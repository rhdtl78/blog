"use strict";(self.webpackChunkrhdtl_78_github_io=self.webpackChunkrhdtl_78_github_io||[]).push([[1896],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(t),g=o,k=u["".concat(l,".").concat(g)]||u[g]||c[g]||a;return t?r.createElement(k,i(i({ref:n},m),{},{components:t})):r.createElement(k,i({ref:n},m))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5525:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={title:"\uc678\ubd80 \uc124\uc815",description:"Spring \uc678\ubd80 \uc124\uc815 \ud559\uc2b5",slug:"/dev-blog/spring/external_configuration",category:"Spring",tags:["Spring","Springboot"]},i=void 0,p={permalink:"/dev-blog/spring/external_configuration",editUrl:"https://rhdtl78.github.io/dev-blog/2020-04-20-spring-external-configuration.md",source:"@site/dev-blog/2020-04-20-spring-external-configuration.md",title:"\uc678\ubd80 \uc124\uc815",description:"Spring \uc678\ubd80 \uc124\uc815 \ud559\uc2b5",date:"2020-04-20T00:00:00.000Z",formattedDate:"April 20, 2020",tags:[{label:"Spring",permalink:"/tags/spring"},{label:"Springboot",permalink:"/tags/springboot"}],readingTime:7.74,hasTruncateMarker:!0,authors:[],frontMatter:{title:"\uc678\ubd80 \uc124\uc815",description:"Spring \uc678\ubd80 \uc124\uc815 \ud559\uc2b5",slug:"/dev-blog/spring/external_configuration",category:"Spring",tags:["Spring","Springboot"]},prevItem:{title:"Spring boot TDD",permalink:"/dev-blog/spring/auto-monitor"},nextItem:{title:"SpringApplication (1)",permalink:"/dev-blog/spring/spring-boot-application/1"}},l={authorsImageUrls:[]},s=[{value:"\uc678\ubd80 \uc124\uc815",id:"\uc678\ubd80-\uc124\uc815",level:3},{value:"\uc6b0\uc120 \uc21c\uc704",id:"\uc6b0\uc120-\uc21c\uc704",level:3},{value:"\ud14c\uc2a4\ud2b8 \uc124\uc815",id:"\ud14c\uc2a4\ud2b8-\uc124\uc815",level:3},{value:"\ud30c\uc77c\uc774 application.properties\ub85c \uac19\uc740 \uacbd\uc6b0\uc5d0\ub294 \uc5b4\ub5bb\uac8c \ub420\uae4c?",id:"\ud30c\uc77c\uc774-applicationproperties\ub85c-\uac19\uc740-\uacbd\uc6b0\uc5d0\ub294-\uc5b4\ub5bb\uac8c-\ub420\uae4c",level:3},{value:"\ud0c0\uc785 \uc138\uc774\ud504 \ud504\ub85c\ud37c\ud2f0 @ConfigurationProperties",id:"\ud0c0\uc785-\uc138\uc774\ud504-\ud504\ub85c\ud37c\ud2f0-configurationproperties",level:3}],m={toc:s},u="wrapper";function c(e){let{components:n,...a}=e;return(0,o.kt)(u,(0,r.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg",alt:"spring logo"})),(0,o.kt)("h3",{id:"\uc678\ubd80-\uc124\uc815"},"\uc678\ubd80 \uc124\uc815"),(0,o.kt)("p",null,"\uc678\ubd80 \uc124\uc815\uc744 \uc815\uc758\ud560 \uc218 \uc788\ub294 \uc704\uce58\ub294 \uae30\ubcf8\uc801\uc73c\ub85c \ub2e4\uc74c\uacfc \uac19\ub2e4."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"src/main/resources/application.properties"),(0,o.kt)("li",{parentName:"ul"},"src/main/resources/application.yml"),(0,o.kt)("li",{parentName:"ul"},"\ud658\uacbd \ubcc0\uc218"),(0,o.kt)("li",{parentName:"ul"},"command line arguments")),(0,o.kt)("p",null,"\uc544\ub798 \ucf54\ub4dc\ub85c \ud14c\uc2a4\ud2b8 \uacb0\uacfc\ub97c \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package com.example;\n\nimport org.springframework.beans.factory.annotation.Value;\nimport org.springframework.boot.ApplicationArguments;\nimport org.springframework.boot.ApplicationRunner;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class SampleRunner implements ApplicationRunner {\n\n    @Value("${custom.name}")\n    private String name;\n    \n    @Override\n    public void run(ApplicationArguments args) throws Exception {\n        System.out.println("=================================");\n        System.out.println(name);\n        System.out.println("=================================");\n    }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# src/main/resources/application.yml\ncustom:\n    name: test\n")),(0,o.kt)("p",null,"\uc2e4\ud589 \uacb0\uacfc"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2020-04-20 11:29:57.703  INFO 3188 --- [           main] com.example.Application                  : Started Application in 1.62 seconds (JVM running for 2.141)\n=================================\ntest\n=================================\n")),(0,o.kt)("h3",{id:"\uc6b0\uc120-\uc21c\uc704"},"\uc6b0\uc120 \uc21c\uc704"),(0,o.kt)("p",null,"\uc6b0\uc120 \uc21c\uc704\ub294 \uad49\uc7a5\ud788 \ub9ce\uc740 \ub2e8\uacc4\uac00 \uc788\ub2e4."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\uc720\uc800 \ud648 \ub514\ub809\ud1a0\ub9ac\uc5d0 \uc788\ub294 spring-boot-dev-tools.properties"),(0,o.kt)("li",{parentName:"ol"},"\ud14c\uc2a4\ud2b8\uc5d0 \uc788\ub294 @TestPropertySource"),(0,o.kt)("li",{parentName:"ol"},"@SpringBootTest \uc560\ub178\ud14c\uc774\uc158\uc758 properties \uc560\ud2b8\ub9ac\ubdf0\ud2b8"),(0,o.kt)("li",{parentName:"ol"},"\ucee4\ub9e8\ub4dc \ub77c\uc778 \uc544\uaddc\uba3c\ud2b8"),(0,o.kt)("li",{parentName:"ol"},"SPRING_APPLICATION_JSON (\ud658\uacbd \ubcc0\uc218 \ub610\ub294 \uc2dc\uc2a4\ud15c \ud504\ub85c\ud2f0) \uc5d0 \ub4e4\uc5b4\uc788\ub294 \ud504\ub85c\ud37c\ud2f0"),(0,o.kt)("li",{parentName:"ol"},"ServletConfig \ud30c\ub77c\ubbf8\ud130"),(0,o.kt)("li",{parentName:"ol"},"ServletContext \ud30c\ub77c\ubbf8\ud130"),(0,o.kt)("li",{parentName:"ol"},"java:comp/env JNDI \uc560\ud2b8\ub9ac\ubdf0\ud2b8"),(0,o.kt)("li",{parentName:"ol"},"System.getProperties() \uc790\ubc14 \uc2dc\uc2a4\ud15c \ud504\ub85c\ud37c\ud2f0"),(0,o.kt)("li",{parentName:"ol"},"OS \ud658\uacbd \ubcc0\uc218"),(0,o.kt)("li",{parentName:"ol"},"RandomValuePropertySource"),(0,o.kt)("li",{parentName:"ol"},"JAR \ubc16\uc5d0 \uc788\ub294 \ud2b9\uc815 \ud504\ub85c\ud30c\uc77c\uc6a9 application properties"),(0,o.kt)("li",{parentName:"ol"},"JAR \uc548\uc5d0 \uc788\ub294 \ud2b9\uc815 \ud504\ub85c\ud30c\uc77c\uc6a9 application properties"),(0,o.kt)("li",{parentName:"ol"},"JAR \ubc16\uc5d0 \uc788\ub294 application properties"),(0,o.kt)("li",{parentName:"ol"},"JAR \uc548\uc5d0 \uc788\ub294 application properties"),(0,o.kt)("li",{parentName:"ol"},"@PropertySource"),(0,o.kt)("li",{parentName:"ol"},"\uae30\ubcf8 \ud504\ub85c\ud37c\ud2f0 (SpringApplication.setDefaultProperties)")),(0,o.kt)("p",null,"\ub530\ub77c\uc11c \uc704\uc758 \uc608\uc81c\ub294 15 \uc21c\uc704 JAR \uc548\uc5d0 \uc788\ub294 application properties\ub97c \uc0ac\uc6a9\ud55c \uac83\uc774\ub2e4."),(0,o.kt)("p",null,"\ud14c\uc2a4\ud2b8 \ucf00\uc774\uc2a4\uc6a9 \uc678\ubd80 \uc124\uc815\ub3c4 \uc815\uc758\ud560 \uc218 \uc788\ub2e4.\nsrc/test/application.{yml, properties}\uc5d0 \uc815\uc758\ud558\uba74 \ud14c\uc2a4\ud2b8 \uc9c4\ud589\uc2dc \ud574\ub2f9 \ud30c\uc77c\uc744 resources\uc5d0 \uc815\uc758\ub41c application.{yml, properites} \ubb34\uc2dc\ud558\uace0 \ub85c\ub4dc\ud55c\ub2e4."),(0,o.kt)("p",null,"\ub2e4\uc74c \ud14c\uc2a4\ud2b8\ub97c \ubcf4\uba74 \uadf8 \ucc28\uc774\ub97c \ud655\uc778 \ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package com.example;\n\nimport org.springframework.beans.factory.annotation.Value;\nimport org.springframework.boot.ApplicationArguments;\nimport org.springframework.boot.ApplicationRunner;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class SampleRunner implements ApplicationRunner {\n\n    @Value("${custom.name}")\n    private String name;\n\n    @Value("${custom.age}")\n    private int age;\n    \n    @Override\n    public void run(ApplicationArguments args) throws Exception {\n        System.out.println("=================================");\n        System.out.println(name);\n        System.out.println(age);\n        System.out.println("=================================");\n    }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# src/main/resources/application.yml\ncustom:\n    name: test\n    age: ${random.int} # \ub79c\ub364 \uac12 \uc9c0\uc815\n")),(0,o.kt)("p",null,"\uc2e4\ud589 \uacb0\uacfc"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2020-04-20 12:07:42.766  INFO 5853 --- [           main] com.example.Application                  : Started Application in 1.38 seconds (JVM running for 1.878)\n=================================\ntest\n1063398586\n=================================\n")),(0,o.kt)("p",null,"\ubb34\uc0ac\ud788 \uc2e4\ud589 \ub41c\ub2e4. "),(0,o.kt)("h3",{id:"\ud14c\uc2a4\ud2b8-\uc124\uc815"},"\ud14c\uc2a4\ud2b8 \uc124\uc815"),(0,o.kt)("p",null,"\ud14c\uc2a4\ud2b8 \ucf00\uc774\uc2a4\ub294 \uc5b4\ub5a8\uae4c?\n\uc544\ub798\uc640 \uac19\uc774 \ud14c\uc2a4\ud2b8 \ucf00\uc774\uc2a4\ub97c \ub9cc\ub4e4\uc5b4 \ud14c\uc2a4\ud2b8\ub97c \uc9c4\ud589\ud55c\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package com.example;\n\n\nimport static org.assertj.core.api.Assertions.assertThat;\n\nimport org.junit.Test;\nimport org.junit.runner.RunWith;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.context.SpringBootTest;\nimport org.springframework.core.env.Environment;\nimport org.springframework.test.context.junit4.SpringRunner;\n\n@RunWith(SpringRunner.class)\n@SpringBootTest\npublic class SampleRunnerTest {\n\n    @Autowired\n    Environment env;\n\n    @Test\n    public void testRun() throws Exception {\n        assertThat(env.getProperty("custom.name"))\n            .isEqualTo("test");\n    }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# src/test/resources/application.yml\ncustom:\n    name: test\n")),(0,o.kt)("p",null,"\uc774\uc81c \ud14c\uc2a4\ud2b8\ub97c \uc9c4\ud589\ud558\uba74 \ud14c\uc2a4\ud2b8\uac00 \uc2e4\ud328\ud568\uc744 \ubcfc\uc218 \uc788\ub2e4. \uc5d0\ub7ec \ub85c\uadf8\ub97c \ubcf4\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 age \uc18d\uc131\uc744 \ud655\uc778 \ud560 \uc218 \uc5c6\ub2e4\uace0 \ub098\uc628\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'sampleRunner': Injection of autowired dependencies failed; nested exception is java.lang.IllegalArgumentException: Could not resolve placeholder 'custom.age' in value \"${custom.age}\"\n")),(0,o.kt)("p",null,"\uc774\ub294 test\uc758 \uc124\uc815\uc5d0\ub3c4 \uac19\uc740 \uc18d\uc131\uc744 \uc815\uc758\ud558\uba74 \ud574\uacb0\ub418\uc9c0\ub9cc, \uc774\ud6c4\uc5d0 \uc5b4\ub5a4 \uc18d\uc131\uc774 \ucd94\uac00\ub420 \uc9c0 \ubaa8\ub974\uae30 \ub54c\ubb38\uc5d0 \ubcc4\ub3c4\uc758 \ud30c\uc77c\ub85c \uad00\ub9ac \ud558\ub294 \uac83\uc744 \uad8c\uc7a5\ud55c\ub2e4.\n\ub610\ud55c @PropertySoruce\ub294 yml \ud30c\uc77c\uc744 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub2e4 \ud558\ub2c8 .properties \ub85c \ubcc0\uacbd\ud560 \uac83\uc744 \uad8c\uc7a5\ud55c\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"# src/main/resources/application.properties\ncustom.name=app\ncustom.age=${random.int} # \ub79c\ub364 \uac12 \uc9c0\uc815\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"# src/test/resources/test.properties\ncustom.name=test\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package com.example;\n\nimport org.junit.Test;\nimport org.junit.runner.RunWith;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.context.SpringBootTest;\nimport org.springframework.core.env.Environment;\nimport org.springframework.test.context.TestPropertySource;\nimport org.springframework.test.context.junit4.SpringRunner;\n\nimport static org.assertj.core.api.Assertions.assertThat;\n\n@RunWith(SpringRunner.class)\n@TestPropertySource(locations = "classpath:/test.properties")\n@SpringBootTest\npublic class SampleRunnerTest {\n\n    @Autowired\n    Environment env;\n\n    @Test\n    public void testRun () throws Exception {\n        assertThat(env.getProperty("custom.name"))\n                .isEqualTo("test");\n    }\n}\n')),(0,o.kt)("p",null,"\uc704 \ud14c\uc2a4\ud2b8 \ucf00\uc774\uc2a4\ub97c \uc2e4\ud589\ud558\uba74 \ud1b5\uacfc\ud560 \uac83\uc774\uace0, \uc774\uc804\uc758 SampleRunner\ub97c \ud1b5\ud574 \ud45c\uc2dc\ub418\ub294 \ub0b4\uc6a9\ub3c4 \ub2ec\ub77c\uc9c4 \uac83\uc744 \ud655\uc778 \ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2020-04-20 14:11:55.186  INFO 11797 --- [           main] com.example.SampleRunnerTest             : Started SampleRunnerTest in 1.74 seconds (JVM running for 2.491)\n=================================\ntest\n-994668283\n=================================\n")),(0,o.kt)("p",null,"src/main/resources/application.properties\uc758 \ub0b4\uc6a9\uc5d0 custom.name \uc744 app\uc73c\ub85c \ubcc0\uacbd\ud588\uc74c\uc5d0\ub3c4 \ubd88\uad6c\ud558\uace0, \ud45c\uc2dc\ub418\ub294 \ub0b4\uc6a9\uc740 src/test/resources/test.properties\uc758 \ub0b4\uc6a9\uc774 \uc0ac\uc6a9\ub418\uc5c8\ub2e4.\n\uc774\ub294 \uc6b0\uc120\uc21c\uc704\uac00 \ub354 \ub192\uc740 \uc124\uc815(2\uc21c\uc704\uc758 @TestPropertySource)\uc774 \ub0ae\uc740 \uc6b0\uc120 \uc21c\uc704\uc758 \uc124\uc815(15\uc21c\uc704\uc758 JAR \uc548\uc758 application.properties)\ub97c \ub36e\uc5b4 \uc4f0\uba70 \uc0dd\uae34 \ud604\uc0c1\uc774\ub2e4.\n\uc774\uc804\uc758 \ub36e\uc5b4\uc4f0\uae30\uc640\uc758 \ucc28\uc774\uc810\uc740 \uc124\uc815 \ud30c\uc77c \uc790\uccb4\ub97c \uad50\uccb4\ud55c \uac83\uc774 \uc544\ub2cc, \ud30c\uc77c \ub0b4\uc6a9\uc744 \ubcf4\uba70 \ud0a4\uac12\uc744 \ube44\uad50\ud574, \ub354 \ub192\uc740 \uc6b0\uc120 \uc21c\uc704\uc758 \uac83\uc744 \uc0ac\uc6a9\ud55c \uc810\uc774\ub2e4."),(0,o.kt)("h3",{id:"\ud30c\uc77c\uc774-applicationproperties\ub85c-\uac19\uc740-\uacbd\uc6b0\uc5d0\ub294-\uc5b4\ub5bb\uac8c-\ub420\uae4c"},"\ud30c\uc77c\uc774 application.properties\ub85c \uac19\uc740 \uacbd\uc6b0\uc5d0\ub294 \uc5b4\ub5bb\uac8c \ub420\uae4c?"),(0,o.kt)("p",null,"\uc6b0\uc120\uc21c\uc704\ub294 \ub2e4\uc74c\uacfc \uac19\ub2e4."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"file:./config/"),(0,o.kt)("li",{parentName:"ol"},"file:./"),(0,o.kt)("li",{parentName:"ol"},"classpath:./config/"),(0,o.kt)("li",{parentName:"ol"},"classpath:./")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"file:./"),"\uc740 \ud604\uc7ac \ud504\ub85c\uc81d\ud2b8\uc758 \ub8e8\ud2b8 \ub514\ub809\ud1a0\ub9ac\ub97c \uc758\ubbf8\ud55c\ub2e4."),(0,o.kt)("p",null,"\uc989 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/main/resources/application.properties"),"\ub294 4\uc21c\uc704\uc758 \uc6b0\uc120\uc21c\uc704\ub97c \uac16\ub294\ub2e4. "),(0,o.kt)("h3",{id:"\ud0c0\uc785-\uc138\uc774\ud504-\ud504\ub85c\ud37c\ud2f0-configurationproperties"},"\ud0c0\uc785 \uc138\uc774\ud504 \ud504\ub85c\ud37c\ud2f0 @ConfigurationProperties"),(0,o.kt)("p",null,"property \ub4e4\uc744 Bean\uc73c\ub85c \ub4f1\ub85d \ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("p",null,"\uc544\ub798 \uc758\uc874\uc131\uc744 \ucd94\uac00\ud558\uba74 \ub0b4 \ud504\ub85c\uc81d\ud2b8\uc758 \ucee4\uc2a4\ud140 \uc124\uc815\uc758 \uba54\ud0c0\ub370\uc774\ud130\ub97c \ub9cc\ub4e4 \uc218 \uc788\ub2e4.\n\uc608\ub97c \ub4e4\uba74, IDE\uc5d0\uc11c properties \uc791\uc131\uc911 \uc790\ub3d9 \uc644\uc131\uc758 \uc815\ubcf4\ub97c \ub9cc\ub4e4 \uc218 \uc788\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-configuration-processor</artifactId>\n    <optional>true</optional>\n</dependency>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package com.example;\n\nimport org.springframework.boot.context.properties.ConfigurationProperties;\nimport org.springframework.stereotype.Component;\n\n@Component\n@ConfigurationProperties("custom")\npublic class CustomProperties {\n    private String name;\n    private int age;\n\n    public String getName() {\n        return this.name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    public int getAge() {\n        return this.age;\n    }\n\n    public void setAge(int age) {\n        this.age = age;\n    }\n}\n')),(0,o.kt)("p",null,"\uc774\ub807\uac8c \ube48(Bean)\uc73c\ub85c \ub4f1\ub85d\ud55c Property\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 SampleRunner\ub3c4 \ubcc0\uacbd\ud55c\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package com.example;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.ApplicationArguments;\nimport org.springframework.boot.ApplicationRunner;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class SampleRunner implements ApplicationRunner {\n\n    @Autowired\n    CustomProperties custom;\n    \n    @Override\n    public void run(ApplicationArguments args) throws Exception {\n        System.out.println("=================================");\n        System.out.println(custom.getName());\n        System.out.println(custom.getAge());\n        System.out.println("=================================");\n    }\n}\n')),(0,o.kt)("p",null,"\uc774\ud6c4 \uc2e4\ud589\ud558\uba74 \uc815\uc0c1\uc801\uc73c\ub85c \uc124\uc815 \ub0b4\uc6a9\uc774 \ud45c\uc2dc \ub420 \uac83\uc774\ub2e4."),(0,o.kt)("p",null,"\ucd94\uac00\ub85c, configuration processor\ub97c \ucd94\uac00\ud55c \uacb0\uacfc\ub3c4 \ub2e4\uc74c\uacfc \uac19\ub2e4.\n",(0,o.kt)("img",{alt:"type-safe-configuration",src:t(4028).Z,width:"929",height:"134"}),"\n\ub0b4\uac00 \ub9cc\ub4e0 \ucee4\uc2a4\ud140 \uc124\uc815\uc774 \uc790\ub3d9\uc644\uc131\uc744 \uc9c0\uc6d0\ud558\uac8c \ub418\uc5c8\ub2e4."),(0,o.kt)("p",null,"\uc774 \ubc29\uc2dd\uc73c\ub85c \uc124\uc815\uc744 \uc801\uc6a9\ud560 \uacbd\uc6b0 key\uc758 case\ubb38\uc81c\uac00 \ud574\uacb0\ub41c\ub2e4.\ncamelCase, kebap-case \ub4f1 \ubaa8\ub450 \uc790\ub3d9\uc73c\ub85c \uc801\uc6a9\ub41c\ub2e4."),(0,o.kt)("p",null,"\ub610\ud55c \ud0c0\uc785 \ucee8\ubc84\uc83c\ub3c4 \uc9c0\uc6d0\ud55c\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package com.example;\n\nimport java.time.Duration;\nimport java.time.temporal.ChronoUnit;\n\nimport org.springframework.boot.context.properties.ConfigurationProperties;\nimport org.springframework.boot.convert.DurationUnit;\nimport org.springframework.stereotype.Component;\n\n@Component\n@ConfigurationProperties("custom")\npublic class CustomProperties {\n    private String name;\n    private int age;\n\n    @DurationUnit(ChronoUnit.SECONDS)\n    private Duration duration;\n\n    public Duration getDuration() {\n        return this.duration;\n    }\n\n    public void setDuration(Duration duration) {\n        this.duration = duration;\n    };\n\n    public String getName() {\n        return this.name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    public int getAge() {\n        return this.age;\n    }\n\n    public void setAge(int age) {\n        this.age = age;\n    }\n\n}\n')),(0,o.kt)("p",null,"\uc774\ub807\uac8c @DurationUnit\uc744 \uc0ac\uc6a9\ud574 Duration \ud0c0\uc785\uc73c\ub85c \uc790\ub3d9\uc73c\ub85c \ubcc0\uacbd\ub41c\ub2e4.\n\ub610 @DurationUnit\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uace0\ub3c4, properties \uc815\uc758 \uc2dc\uc5d0 \uac12\uc5d0 s, ns \ub4f1\uc73c\ub85c \uc2dc\uac04\uc744 \uc54c\uc218 \uc788\ub294 \uc811\ubbf8\uc0ac\ub97c \ubd99\uc774\uba74 \uc790\ub3d9\uc73c\ub85c \ubcc0\uacbd\ub41c\ub2e4."),(0,o.kt)("p",null,"\ud504\ub85c\ud37c\ud2f0 \uac12 \uac80\uc99d\ub3c4 \uc9c0\uc6d0\ud55c\ub2e4."),(0,o.kt)("p",null,"@Validated, \ub610\ub294 JSR-303(@NotNull, ...)\uc744 \ubaa8\ub450 \uc9c0\uc6d0\ud55c\ub2e4."))}c.isMDXComponent=!0},4028:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/spring-type-safe-properties-b7d0c0cb610a8584fb76a82cf07ba3d1.png"}}]);