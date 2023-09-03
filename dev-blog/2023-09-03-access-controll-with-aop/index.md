---
title: "Access Control with AOP"
description: "어노테이션 기반 접근 제어를 AOP로 구현해보자."
slug: /dev-blog/programming/acl-with-aop
category: Programming
tags: 
    - Access Control
    - Spring
    - AOP
    - AspectJ
---

## 어노테이션 기반 접근 제어를 AOP로 구현해보자.
<!--truncate-->

서버간 연동이 필요한 기능을 개발하다보면, 특정 `endpoint`들은 접근 IP가 제한되어야 할 필요가 생긴다.  
Spring Security 의 Filter chain을 활용하는 것이 일반적이겠지만, spring security 가 없는 프로젝트의 경우 많은 부분을 설정해줘야하는 불편이 있다.
이번 글에는 annotation을 활용해 간단하게 구현한, ip 기반 acl 에 대해 설명한다.

## @AccessControl
접근 제어 설정 여부 및 세부 설정을 하는 `annotation`.

```java
package io.github.rhdtl78.acl.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.METHOD, ElementType.TYPE})
public @interface AccessControl {

    String[] include() default {};

    String[] exclude() default {};
}
```
`include` 에 선언된 목록으로 허용 설정을, `exclude`로 선언된 목록으로 차단 설정을 할 수 있다. 
`class` 및 `method` 기반 설정을 지원한다.

## AccessControlAdvice
접근 제어를 처리하는 세부 로직을 담당하는 클래스.
`loop back ip`와 `CIDR 표기법`을 지원한다.

```java
package io.github.rhdtl78.acl.advice;

import io.github.rhdtl78.acl.annotcation.AccessControl;
import io.github.rhdtl78.acl.exception.AclDeniedException;
import java.util.Arrays;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.net.util.SubnetUtils;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

@Slf4j
@Aspect
@Component
public class AccessControlAdvice {

    private static final String CIDR_SUFFIX_PATTERN = "^([0-9]{1,3}\\.){3}[0-9]{1,3}(\\/([0-9]|[1-2][0-9]|3[0-2]))$";
    private static final String LOOPBACK_PATTERN = "^localhost$|^127(?:\\.[0-9]+){0,2}\\.[0-9]+$|^(?:0*\\:)*?:?0*1$";

    @Pointcut("@annotation(org.springframework.web.bind.annotation.RequestMapping) || @annotation(org.springframework.web.bind.annotation.GetMapping) || @annotation(org.springframework.web.bind.annotation.PostMapping) || @annotation(org.springframework.web.bind.annotation.PutMapping) || @annotation(org.springframework.web.bind.annotation.PatchMapping) || @annotation(org.springframework.web.bind.annotation.DeleteMapping)")
    public void endpoint() {
    }

    @Pointcut("@annotation(io.github.rhdtl78.acl.annotcation.AccessControl)")
    public void annotatedMethod() {
    }

    @Pointcut("@within(io.github.rhdtl78.acl.annotcation.AccessControl)")
    public void annotatedClass() {
    }

    @Before("execution(* *(..)) && endpoint() && (annotatedMethod() || annotatedClass())")
    public void checkAccessControl(JoinPoint joinPoint) {
        MethodSignature signature = (MethodSignature) joinPoint.getSignature();
        AccessControl accessControl = signature.getMethod().getAnnotation(AccessControl.class);

        if (accessControl == null) {
            Class<?> declaringType = signature.getDeclaringType();
            accessControl = declaringType.getDeclaredAnnotation(AccessControl.class);
        }

        log.debug("accessControl: {}", accessControl);

        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();

        String remoteHost = request.getRemoteHost();
        log.debug("remoteHost: {}", remoteHost);

        boolean isInAllowedHost = Arrays.stream(accessControl.include()).anyMatch(subnet -> matches(remoteHost, subnet));
        boolean isInDeniedHost = Arrays.stream(accessControl.exclude()).anyMatch(subnet -> matches(remoteHost, subnet));

        boolean isNotInAllowedPattern = accessControl.include().length > 0 && accessControl.exclude().length == 0 && !isInAllowedHost;
        boolean isInDeniedPattern = accessControl.include().length == 0 && accessControl.exclude().length > 0 && isInDeniedHost;
        boolean isMatchedWithDeniedPattern = accessControl.include().length > 0 && accessControl.exclude().length > 0 && (!isInAllowedHost || isInDeniedHost);

        if (isNotInAllowedPattern || isInDeniedPattern || isMatchedWithDeniedPattern) {
            throw new AclDeniedException("Access denied from ACL layer. please contact administrator");
        }

        boolean noConfiguration = accessControl.include().length == 0 && accessControl.exclude().length == 0;
        if (noConfiguration) {
            log.debug("AccessControl annotation is empty. please check your code");
        }

        log.debug("AccessControl is passed");
    }

    private boolean matches(String ip, String subnet) {
        if (ip.matches(LOOPBACK_PATTERN)) {
            return true;
        }

        if (subnet.matches(CIDR_SUFFIX_PATTERN)) {
            SubnetUtils utils = new SubnetUtils(subnet);
            return utils.getInfo().isInRange(ip);
        }

        return ip.equals(subnet);
    }
}
```
### Pattern
```java
    ...
    private static final String CIDR_SUFFIX_PATTERN = "^([0-9]{1,3}\\.){3}[0-9]{1,3}(\\/([0-9]|[1-2][0-9]|3[0-2]))$";
    private static final String LOOPBACK_PATTERN = "^localhost$|^127(?:\\.[0-9]+){0,2}\\.[0-9]+$|^(?:0*\\:)*?:?0*1$";
    ...
```
위 줄의 패턴 선언으로 `CIDR 표기법`, `loop back ip`를 감지할 수 있다. 

### pointcut
```java
@Pointcut("@annotation(org.springframework.web.bind.annotation.RequestMapping) || @annotation(org.springframework.web.bind.annotation.GetMapping) || @annotation(org.springframework.web.bind.annotation.PostMapping) || @annotation(org.springframework.web.bind.annotation.PutMapping) || @annotation(org.springframework.web.bind.annotation.PatchMapping) || @annotation(org.springframework.web.bind.annotation.DeleteMapping)")
public void endpoint() {
}
```
컨트롤러에만 설정 할 수 있도록, 특히 `endpoint mapping` 에만 동작하도록 제한하는 Pointcut.  
`RequestMapping` 및 기타 `endpoint mapping` 을 모두 지원한다.

```java
@Pointcut("@annotation(io.github.rhdtl78.acl.annotcation.AccessControl)")
public void annotatedMethod() {
}

@Pointcut("@within(io.github.rhdtl78.acl.annotcation.AccessControl)")
public void annotatedClass() {
}
```
메서드 기반 및 클래스 기반 설정을 지원하는 pointcut.  
`@Pointcut("@annotation(io.github.rhdtl78.acl.annotcation.AccessControl)")` 이 `@AccessControl`이 붙은 모든 메서드의 실행에 동작하게 하며,  
`@Pointcut("@within(io.github.rhdtl78.acl.annotcation.AccessControl)")` 이 `@AccessControl`이 붙은 클래스의 모든 메서드의 실행에 동작하게 한다.

### exception
```java
package io.github.rhdtl78.acl.exception;

public class AclDeniedException extends RuntimeException {
    public AclDeniedException(String message) {
        super(message);
    }
}

```
접근 제어를 통과하지 못한 경우, 예외처리 할 수 있도록 발행하는 예외.  
기본적으로, 위 예외를 처리하는 `ControllerAdvice`도 준비되어있다.

### ControllerAdvice
```java
package io.github.rhdtl78.acl.advice;

import io.github.rhdtl78.acl.exception.AclDeniedException;
import org.springframework.core.annotation.Order;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Order(0)
@RestControllerAdvice
public class AclRestControllerAdvice {

    @ExceptionHandler(AclDeniedException.class)
    public String handleAclDeniedException(AclDeniedException e) {
        return e.getMessage();
    }
}

```

```java
package io.github.rhdtl78.acl.advice;

import io.github.rhdtl78.acl.exception.AclDeniedException;
import org.springframework.core.annotation.Order;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.ModelAndView;

@Order(1)
@ControllerAdvice
public class AclControllerAdvice {

    @ExceptionHandler(AclDeniedException.class)
    public ModelAndView handleAclDeniedException(AclDeniedException e) {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("error");
        modelAndView.addObject("message", e.getMessage());
        return modelAndView;
    }
}

```

`@Controller`와 `@RestController`를 둘 다 지원하기 위해 각각의 ControllerAdvice를 만들었으나,   
ACL 예외를 던진 컨트롤러의 종류와 관계없이, `@Order(0)`으로 설정된 `AclRestControllerAdvice` 만 동작하더라.


### 예시
```java
@Controller
@RequestMapping("/")
@AccessControl(include = ["10.0.0.1/32", "10.0.1.99"])
class MyController {
    @GetMapping
    public String index() {
        return "index";
    }
}
```

```java
@RestController
@RequestMapping("/")
class MyController {
    @GetMapping
    @AccessControl(include = ["10.0.0.1/32", "10.0.1.99"])
    public String index() {
        return "index";
    }
}
```