---
title: "Spring boot TDD"
description: "Spring Boot + JPA + JUnit + Mockito"
slug: /study/spring/auto-monitor
category: Spring
tags: 
  - Spring
  - Springboot
  - TDD
  - Mockito
---

# AutoMonitor 중간 정리
<!--truncate-->
1. 개요
      - Spring Boot 스터디를 위한 프로젝트로 AutoMonitor를 개발.
      - Mockito를 Springboot 환경에서 TDD방법론으로 접근해 사용해보는 것이 학습 목표.
      - 궁극적으로, CI/CD Tool (e.g. jenkins) 를 활용하여 자동화 하는 것이 개발 목표.

    AutoMonitor란?
      - Api Testing Application
      - 주어진 API가 주어진 payload로 정상 작동하는가를 확인
      - API Health checking
    
    Stack
      - Kotlin
      - Springboot
      - JPA
      - Junit
      - Mockito
      - Hibernate
      - JPA
      - Vue

    학습 전략
      - TDD (Test Driven Development)
      - 레이어 별로 Mock-up
      - 항상 Test Case를 먼저 작성할 것

    환경 설정에 대한 설명은 생략.

2. Test Driven Development

    TDD란? 
    
    > 테스트 주도 개발(Test-driven development TDD)은 매우 짧은 개발 사이클을 반복하는 소프트웨어 개발 프로세스 중 하나이다. 
    > 개발자는 먼저 요구사항을 검증하는 자동화된 테스트 케이스를 작성한다. 그런 후에, 그 테스트 케이스를 통과하기 위한 최소한의 코드를 생성한다. 
    > 마지막으로 작성한 코드를 표준에 맞도록 리팩토링한다. 
    > 이 기법을 개발했거나 '재발견' 한 것으로 인정되는 Kent Beck은 2003년에 TDD가 단순한 설계를 장려하고 자신감을 불어넣어준다고 말하였다.
    > -- Wiki에서 발췌 [링크](https://ko.wikipedia.org/wiki/%ED%85%8C%EC%8A%A4%ED%8A%B8_%EC%A3%BC%EB%8F%84_%EA%B0%9C%EB%B0%9C)

    주목할 것은 '먼저 요구사항을 검증하는 자동화된 테스트 케이스를 작성한다.' 이다. 
    테스트 케이스 자체가 기능 명세가 되고, 프로그램의 청사진이 된다.

    1. JPA Repository Mocking

        테스트의 목적은 작성한 Entity를 사용한 JpaRepository를 Mock-up 해보기 위함이다.

        ```kotlin
        /* Test Case */
        @RunWith(MockitoJUnitRunner::class) // Mockito runner
        class ApiSpecJpaRepositoryTest {
            @Mock
            lateinit var apiSpecJpaRepository: ApiSpecJpaRepository; // jpaRepository를 Mockito로 Mock-up

            @InjectMocks
            lateinit var apiSpecRepository: ApiSpecRepository; // jpaRepository를 이용한 Respository. apiSpecJpaRepository를 의존 객체로 갖는다.

            @BeforeAll
            fun setUp() { // Mockito의 어노테이션을 실행.
                MockitoAnnotations.initMocks(this);
            }
        }
        ```
        ```kotlin
        /* JPA Repository */
        @Repository
        interface ApiSpecJpaRepository: JpaRepository<ApiSpec, Long>
        ```
        ```kotlin
        /* Repository */
        @Repository
        class ApiSpecRepository(
                val jpaApiSpecRepository: ApiSpecJpaRepository
        )
        ```

        MockitoRunner가 의존성을 주입해주며 Mock-up을 만들어 준다. 위 테스트 클래스에서는 apiSpecJpaRepository가 Mock-up 객체가 되며 이를 apiSpecRepository가 사용한다.

        등록된 API를 조회하는 기능을 구현하고자 한다. 이 때, Respository에 해당 기능을 바로 구현하지 않고, 인터페이스만 놓아둔다.
        ```kotlin
        /* Repository */
        @Repository
        class ApiSpecRepository(
                val jpaApiSpecRepository: ApiSpecJpaRepository
        ) {
            /**
              * 등록된 api 목록 가져오기
              */
            fun getApis(page: Int): List<ApiSpec> {
                return listOf();
            }
        }
        ```

        그리고 바로 테스트 케이스를 작성한다.
        ```kotlin
        /* Test Case */
        class ApiSpecJpaRepositoryTest {
            ...

            private fun mockResultList(size: Long): List<ApiSpec> {
                return LongStream
                        .range(0, size)
                        .mapToObj {
                            val mocked = mock<ApiSpec>(); // Mock-up
                            // Data mocking
                            whenever(mocked.id).thenReturn(it + 1);
                            whenever(mocked.alias).thenReturn("Test Api - ${it + 1}");
                            whenever(mocked.url).thenReturn("/api/v1/test/${it + 1}");
                            whenever(mocked.payload).thenReturn("{ \"data\": { \"number\": ${it + 1} } }");
                            mocked;
                        }
                        .toList();
            }

            /**
            * 첫 페이지에 해당하는 API 목록을 불러온다.
            */
            @Test
            fun getApis_페이지_번호로_조회하기() {
                // when
                val page: Int = 0;
                val recordSize: Int = 12;
                val paging = PageRequest.of(page, recordSize);

                // mocking
                val mockedResults = mockResultList(12)
                val mockedPage = PageImpl<ApiSpec>(mockedResults)
                whenever(apiSpecJpaRepository.findAll(paging))
                        .thenReturn(mockedPage);

                // then
                assertEquals(12, apiSpecRepository.getApis(page).size);
            }
        }
        ```
        여기서 주목할 것은 mockResultList와 테스트 케이스의 mocking방법이다.

        mockResultList는 integer를 인자로 받아 그 값을 크기로 갖는 ApiSpec의 Mock-up 객체의 List를 반환한다.

        데이터들은 실제 값을 직접 바인드 하지 않고, Mockito의 whenever로 Mock-up 데이터를 생성한다.

        테스트 케이스에서는 apiSpecJpaRepository.findAll 의 결과를 mock-up 한다.

        apiSpecJpaRepository의 findAll 함수에 PageRequest 인자를 넘겨주어 실행하면 12개의 원소를 가진 List객체가 반환된다는 의미이다.
        
        물론 데이터는 모두 Mock-up된 상태이다.

        테스트를 수행하면 당연히 통과하지 못한다. apiSpecRepository에서 테스트하려는 getApis가 의미없는 반환을 하고있기 때문이다.

        이제 이 테스트 케이스를 통과하기 위해 ApiSpecRepository의 getApis함수를 마저 구현한다.

        ```kotlin
        @Repository
        class ApiSpecRepository(
                val jpaApiSpecRepository: ApiSpecJpaRepository
        ) {
            val recordSize: Int = 12;
            /**
             * 등록된 api 목록 가져오기
             */
            fun getApis(page: Int): List<ApiSpec> {
                val paging = PageRequest.of(page, recordSize);
                val result: Page<ApiSpec>? = jpaApiSpecRepository.findAll(paging);

                if (result != null) {
                    return result.content;
                }

                return listOf();
            }
        }
        ```

        PageRequest를 이용해 쿼리 결과를 제한하며, 반환할 내용은 모두 List로 변환한다.

        이제 테스트를 다시 수행하면 통과할 것이다. 테스트가 통과할 수 있는 이유는 바로 apiSpecJpaRepository가 Mock-up 되었기 때문이다.

        Mockito Test Runner가 @Mock으로 지정된 필드를 Mock-up해두고, Mock-up된 apiSpecJpaRepository를 @InjectMocks로 지정된 apiSpecRepository에 의존성 주입을 실행한다. 따라서 apiSpecRepository 내부에는 Mock-up된 jpaRepository가 위치하게 되며 내부에서 apiSpecJpaRepository를 통해 메서드를 호출할 수 있게 되었다.
        
        또한, 내부의 함수를 whenever로 Mock-up했기 때문에 실제 Database에 쿼리를 질의하지 않고 기능이 동작 할 수 있었다.

        이런 방법으로 테스트 케이스를 먼저 작성하고, 테스트를 수행하고, 실패한 테스트에 대해 리팩터링을 진행하는 것이 TDD의 기본이다.

    2. Repository Test
        
        Repository Test에서는 데이터의 저장, 조회가 내가 의도한 대로 이뤄지는지를 확인해야 하기 때문에 별도의 Mock-up을 만들지 않는다.
        간단하게 Save-Load Test를 수행한다.

        ```kotlin
        @RunWith(SpringRunner::class)
        @SpringBootTest
        @TestInstance(TestInstance.Lifecycle.PER_CLASS)
        class ApiSpecRepositoryTest {

            @Autowired
            lateinit var apiSpecRepository: ApiSpecRepository

            @BeforeAll
            fun setUp() {
                for (i: Int in 1..60) {
                    val data = ApiForm(
                            url = "http://localhost/api/v1/test/$i",
                            alias = "TestApi - $i",
                            payload = "{ data: [] }"
                    );

                    apiSpecRepository.saveApi(data);
                }
            }

            @AfterAll
            fun cleanUp() {
                apiSpecRepository
                        .jpaApiSpecRepository
                        .deleteAll();
            }
        }
        ```

        우선 setup과 cleanUp을 구성한다. 테스트 시작 전에 데이터를 미리 구성해 두고, 이후엔 테스트에 사용한 모든 데이터를 모두 제거한다.
        
        ```kotlin
        @RunWith(SpringRunner::class)
        @SpringBootTest
        @TestInstance(TestInstance.Lifecycle.PER_CLASS)
        class ApiSpecRepositoryTest {
            ...
            @Test
            fun `saveApi - 새로운 API 등록`() {
                // mocking
                val inputData = ApiForm(
                        url = "http://test/api/v1/mocked",
                        alias = "test",
                        payload = "{ \"data\" : \"test\" }"
                );

                val inserted = apiSpecRepository.saveApi(inputData);

                val result = apiSpecRepository.jpaApiSpecRepository.findById(inserted.id!!).get();

                Assertions.assertEquals(inputData.url, result.url);
                Assertions.assertEquals(inputData.alias, result.alias);
                Assertions.assertEquals(inputData.payload, result.payload);
            }
        }
        ```

        Save 테스트에서는 데이터를 넣어보고, 이를 다시 꺼내어 확인하는 방식으로 테스트를 진행했다.

        ```kotlin
        @RunWith(SpringRunner::class)
        @SpringBootTest
        @TestInstance(TestInstance.Lifecycle.PER_CLASS)
        class ApiSpecRepositoryTest {
            ...
            @Test
            fun `getApi - 단건 조회`() {
                // when
                val id : Long = 1;

                // then
                val result = apiSpecRepository.getApi(id);
                Assertions.assertNotNull(result);
                Assertions.assertEquals(result!!.id!!, id);
            }
        }
        ```

        Load Test에선 기존 준비한 데이터를 꺼내보는 방향으로 진행했다.

    3. Controller Test
        Controller Test는 앞서서 만든 Repository를 Mock-Up해서 진행한다. Controller Test의 목적은 매핑된 함수들이 제대로 동작 하는지를 보기 위함이지 데이터를 꺼내오는 것이 제대로 동작하는 것을 보는 것이 아니기 때문이다. 관심사를 생각해서 테스트 케이스와 Mock-Up 범위를 결정한다.

        ```kotlin
        @RunWith(MockitoJUnitRunner::class)
        @SpringBootTest
        @AutoConfigureMockMvc
        @TestInstance(TestInstance.Lifecycle.PER_CLASS)
        class DashboardControllerTest {
            @Mock
            lateinit var apiSpecRepository: ApiSpecRepository;

            @InjectMocks
            lateinit var dashboardController: DashboardController;

            @Before
            fun setUp() {
                MockitoAnnotations.initMocks(this);
            }

            private fun mockResultList(size: Long): List<ApiSpec> {
                return LongStream
                        .range(0, size)
                        .mapToObj {
                            ApiSpec(
                                    id = it + 1,
                                    alias = "Test Api - ${it + 1}",
                                    url = "/api/v1/test/${it + 1}",
                                    payload = "{ \"data\": { \"number\": ${it + 1} } }"
                            );
                        }
                        .toList();
            }
        }
        ```

        우선 테스트 준비를 위와 같이 해둔다. 실제 Request를 주고 받는 테스트를 할 것이기 때문에 MockMVC를 사용한다. 앞서서 언급한 대로 apiSpecRepository는 Mock-UP해 두고 테스트 케이스 마다 예상 값을 정한다. 테스트 데이터는 엔티티를 사용하였다. JpaRepository테스트와 다른 점은 데이터 자체를 다시 Mockito로 Mock-Up하지 않은 것이다. Object De/Serialize에서 Mock-up객체의 다른 메서드, 프로퍼티들이 함께 결과에 포함 될 수 있기 때문에 데이터를 직접 구성하게 했다.

        ```kotlin
        @RunWith(MockitoJUnitRunner::class)
        @SpringBootTest
        @AutoConfigureMockMvc
        @TestInstance(TestInstance.Lifecycle.PER_CLASS)
        class DashboardControllerTest {
            ...
            @Test
            fun `getRegisteredApis - API Calling 테스트 - 데이터 조회`() {
                val mockedList = mockResultList(12)
                whenever(apiSpecRepository.getApis(1))
                        .thenReturn(mockedList);

                val request = get("/api/v1/apis/1")
                        .accept(MediaType.APPLICATION_JSON);

                MockMvcBuilders
                        .standaloneSetup(dashboardController)
                        .build()
                        .perform(request)
                        .andExpect(status().isOk)
                        .andDo(ResultHandler {
                            println(it.response.contentAsString);
                        })
                        .andExpect(jsonPath("$").isArray)
                        .andExpect(jsonPath("$.*", Matchers.hasSize<ApiSpec>(12)))

            }
        }
        ```

        조회 테스트이다. Mock-Up 데이터를 12개 (1 page 분량)을 준비해두고 페이지 번호를 주어 요청하는 테스트 시나리오이다.
        이제 테스트를 수행하면 실패할 것이다. 컨트롤러에 가서 해당 기능을 구현한다.

        ```kotlin
        @RestController
        class DashboardController(
                val apiSpecRepository: ApiSpecRepository
        ) {
            @GetMapping("/api/v1/apis/{page}")
            fun getRegisteredApis(@PathVariable("page") page: Int): List<ApiSpec> = apiSpecRepository.getApis(page)
        }
        ```

        Get요청 테스트를 작성했으니 GetMapping을 구성한다. Restful 디자인을 사용했다.
        다시 테스트를 수행하면 통과한다.

    4. 반복...

        이제 기능을 개발할 때 마다 위 흐름을 반복하면된다. 
        1. Test Case 작성
             - JpaRepository
                 - 어떤 메서드를 사용해 데이터를 가져올 지 정한다.
                 - Repository에 해당 메서드를 사용하는 기능의 껍데기를 만든다.
                 - Repository에 JpaRepository의 Mock-Up을 의존성으로 주입한다.
             - Repository
                 - mock-up없이, 실제 데이터의 CRUD가 이뤄지는지를 확인하는 테스트 케이스를 작성한다.
             - Controller
                 - Repository로 꺼내온 데이터를 어떻게 핸들링 할 지에 대해 테스트 케이스를 작성한다.
                 - 실제 Request와 유사하게 테스트해야 하므로 MockMVC를 사용하는 것을 권장한다.
                 - Repository의 Mock-Up을 Controller의 의존성으로 주입한다.
        2. Test 수행
        3. Refactoring

3. 앞으로...
    1. Frontend와 Api연동.
         - 현재까지 작성된 Api들을 Frontend와 연동해 기능의 동작을 확인한다.
    2. CI/CD툴과 연동.
         - Jenkins로 배치 프로세스를 구성해 테스트를 주기적으로, 자동화 한다.