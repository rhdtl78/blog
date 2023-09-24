"use strict";(self.webpackChunkrhdtl_78_github_io=self.webpackChunkrhdtl_78_github_io||[]).push([[2100],{3905:(n,e,t)=>{t.d(e,{Zo:()=>s,kt:()=>m});var o=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,o,a=function(n,e){if(null==n)return{};var t,o,a={},r=Object.keys(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var c=o.createContext({}),p=function(n){var e=o.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},s=function(n){var e=p(n.components);return o.createElement(c.Provider,{value:e},n.children)},d="mdxType",g={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(n,e){var t=n.components,a=n.mdxType,r=n.originalType,c=n.parentName,s=l(n,["components","mdxType","originalType","parentName"]),d=p(t),u=a,m=d["".concat(c,".").concat(u)]||d[u]||g[u]||r;return t?o.createElement(m,i(i({ref:e},s),{},{components:t})):o.createElement(m,i({ref:e},s))}));function m(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=n,l[d]="string"==typeof n?n:a,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9674:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=t(7462),a=(t(7294),t(3905));const r={title:"Access Control with AOP",description:"\uc5b4\ub178\ud14c\uc774\uc158 \uae30\ubc18 \uc811\uadfc \uc81c\uc5b4\ub97c AOP\ub85c \uad6c\ud604\ud574\ubcf4\uc790.",slug:"/dev-blog/programming/acl-with-aop",category:"Programming",tags:["Access Control","Spring","AOP","AspectJ"]},i=void 0,l={permalink:"/dev-blog/programming/acl-with-aop",editUrl:"https://rhdtl78.github.io/dev-blog/2023-09-03-access-controll-with-aop/index.md",source:"@site/dev-blog/2023-09-03-access-controll-with-aop/index.md",title:"Access Control with AOP",description:"\uc5b4\ub178\ud14c\uc774\uc158 \uae30\ubc18 \uc811\uadfc \uc81c\uc5b4\ub97c AOP\ub85c \uad6c\ud604\ud574\ubcf4\uc790.",date:"2023-09-03T00:00:00.000Z",formattedDate:"September 3, 2023",tags:[{label:"Access Control",permalink:"/tags/access-control"},{label:"Spring",permalink:"/tags/spring"},{label:"AOP",permalink:"/tags/aop"},{label:"AspectJ",permalink:"/tags/aspect-j"}],readingTime:4.65,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Access Control with AOP",description:"\uc5b4\ub178\ud14c\uc774\uc158 \uae30\ubc18 \uc811\uadfc \uc81c\uc5b4\ub97c AOP\ub85c \uad6c\ud604\ud574\ubcf4\uc790.",slug:"/dev-blog/programming/acl-with-aop",category:"Programming",tags:["Access Control","Spring","AOP","AspectJ"]},prevItem:{title:"Ehcache\uc640 RMI\ub97c \ud65c\uc6a9\ud55c \ub2e4\uc911 \uc11c\ubc84 \ud658\uacbd\uc758 \uce90\uc2f1 \ubb38\uc81c \ud574\uacb0",permalink:"/dev-blog/programming/distributed-ehcache"},nextItem:{title:"[\uc624\ube0c\uc81d\ud2b8] Chapter09. \uc720\uc5f0\ud55c \uc124\uacc4",permalink:"/dev-blog/object/chapter/09"}},c={authorsImageUrls:[]},p=[{value:"\uc5b4\ub178\ud14c\uc774\uc158 \uae30\ubc18 \uc811\uadfc \uc81c\uc5b4\ub97c AOP\ub85c \uad6c\ud604\ud574\ubcf4\uc790.",id:"\uc5b4\ub178\ud14c\uc774\uc158-\uae30\ubc18-\uc811\uadfc-\uc81c\uc5b4\ub97c-aop\ub85c-\uad6c\ud604\ud574\ubcf4\uc790",level:2},{value:"@AccessControl",id:"accesscontrol",level:2},{value:"AccessControlAdvice",id:"accesscontroladvice",level:2},{value:"Pattern",id:"pattern",level:3},{value:"pointcut",id:"pointcut",level:3},{value:"exception",id:"exception",level:3},{value:"ControllerAdvice",id:"controlleradvice",level:3},{value:"\uc608\uc2dc",id:"\uc608\uc2dc",level:3}],s={toc:p},d="wrapper";function g(n){let{components:e,...t}=n;return(0,a.kt)(d,(0,o.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\uc5b4\ub178\ud14c\uc774\uc158-\uae30\ubc18-\uc811\uadfc-\uc81c\uc5b4\ub97c-aop\ub85c-\uad6c\ud604\ud574\ubcf4\uc790"},"\uc5b4\ub178\ud14c\uc774\uc158 \uae30\ubc18 \uc811\uadfc \uc81c\uc5b4\ub97c AOP\ub85c \uad6c\ud604\ud574\ubcf4\uc790."),(0,a.kt)("p",null,"\uc11c\ubc84\uac04 \uc5f0\ub3d9\uc774 \ud544\uc694\ud55c \uae30\ub2a5\uc744 \uac1c\ubc1c\ud558\ub2e4\ubcf4\uba74, \ud2b9\uc815 ",(0,a.kt)("inlineCode",{parentName:"p"},"endpoint"),"\ub4e4\uc740 \uc811\uadfc IP\uac00 \uc81c\ud55c\ub418\uc5b4\uc57c \ud560 \ud544\uc694\uac00 \uc0dd\uae34\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","Spring Security \uc758 Filter chain\uc744 \ud65c\uc6a9\ud558\ub294 \uac83\uc774 \uc77c\ubc18\uc801\uc774\uaca0\uc9c0\ub9cc, spring security \uac00 \uc5c6\ub294 \ud504\ub85c\uc81d\ud2b8\uc758 \uacbd\uc6b0 \ub9ce\uc740 \ubd80\ubd84\uc744 \uc124\uc815\ud574\uc918\uc57c\ud558\ub294 \ubd88\ud3b8\uc774 \uc788\ub2e4.\n\uc774\ubc88 \uae00\uc5d0\ub294 annotation\uc744 \ud65c\uc6a9\ud574 \uac04\ub2e8\ud558\uac8c \uad6c\ud604\ud55c, ip \uae30\ubc18 acl \uc5d0 \ub300\ud574 \uc124\uba85\ud55c\ub2e4."),(0,a.kt)("h2",{id:"accesscontrol"},"@AccessControl"),(0,a.kt)("p",null,"\uc811\uadfc \uc81c\uc5b4 \uc124\uc815 \uc5ec\ubd80 \ubc0f \uc138\ubd80 \uc124\uc815\uc744 \ud558\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"annotation"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"package io.github.rhdtl78.acl.annotation;\n\nimport java.lang.annotation.ElementType;\nimport java.lang.annotation.Retention;\nimport java.lang.annotation.RetentionPolicy;\nimport java.lang.annotation.Target;\n\n@Retention(RetentionPolicy.RUNTIME)\n@Target({ElementType.METHOD, ElementType.TYPE})\npublic @interface AccessControl {\n\n    String[] include() default {};\n\n    String[] exclude() default {};\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"include")," \uc5d0 \uc120\uc5b8\ub41c \ubaa9\ub85d\uc73c\ub85c \ud5c8\uc6a9 \uc124\uc815\uc744, ",(0,a.kt)("inlineCode",{parentName:"p"},"exclude"),"\ub85c \uc120\uc5b8\ub41c \ubaa9\ub85d\uc73c\ub85c \ucc28\ub2e8 \uc124\uc815\uc744 \ud560 \uc218 \uc788\ub2e4.\n",(0,a.kt)("inlineCode",{parentName:"p"},"class")," \ubc0f ",(0,a.kt)("inlineCode",{parentName:"p"},"method")," \uae30\ubc18 \uc124\uc815\uc744 \uc9c0\uc6d0\ud55c\ub2e4."),(0,a.kt)("h2",{id:"accesscontroladvice"},"AccessControlAdvice"),(0,a.kt)("p",null,"\uc811\uadfc \uc81c\uc5b4\ub97c \ucc98\ub9ac\ud558\ub294 \uc138\ubd80 \ub85c\uc9c1\uc744 \ub2f4\ub2f9\ud558\ub294 \ud074\ub798\uc2a4.\n",(0,a.kt)("inlineCode",{parentName:"p"},"loop back ip"),"\uc640 ",(0,a.kt)("inlineCode",{parentName:"p"},"CIDR \ud45c\uae30\ubc95"),"\uc744 \uc9c0\uc6d0\ud55c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package io.github.rhdtl78.acl.advice;\n\nimport io.github.rhdtl78.acl.annotcation.AccessControl;\nimport io.github.rhdtl78.acl.exception.AclDeniedException;\nimport java.util.Arrays;\nimport javax.servlet.http.HttpServletRequest;\nimport javax.servlet.http.HttpServletResponse;\nimport lombok.extern.slf4j.Slf4j;\nimport org.apache.commons.net.util.SubnetUtils;\nimport org.aspectj.lang.JoinPoint;\nimport org.aspectj.lang.annotation.Aspect;\nimport org.aspectj.lang.annotation.Before;\nimport org.aspectj.lang.annotation.Pointcut;\nimport org.aspectj.lang.reflect.MethodSignature;\nimport org.springframework.stereotype.Component;\nimport org.springframework.web.context.request.RequestContextHolder;\nimport org.springframework.web.context.request.ServletRequestAttributes;\n\n@Slf4j\n@Aspect\n@Component\npublic class AccessControlAdvice {\n\n    private static final String CIDR_SUFFIX_PATTERN = "^([0-9]{1,3}\\\\.){3}[0-9]{1,3}(\\\\/([0-9]|[1-2][0-9]|3[0-2]))$";\n    private static final String LOOPBACK_PATTERN = "^localhost$|^127(?:\\\\.[0-9]+){0,2}\\\\.[0-9]+$|^(?:0*\\\\:)*?:?0*1$";\n\n    @Pointcut("@annotation(org.springframework.web.bind.annotation.RequestMapping) || @annotation(org.springframework.web.bind.annotation.GetMapping) || @annotation(org.springframework.web.bind.annotation.PostMapping) || @annotation(org.springframework.web.bind.annotation.PutMapping) || @annotation(org.springframework.web.bind.annotation.PatchMapping) || @annotation(org.springframework.web.bind.annotation.DeleteMapping)")\n    public void endpoint() {\n    }\n\n    @Pointcut("@annotation(io.github.rhdtl78.acl.annotcation.AccessControl)")\n    public void annotatedMethod() {\n    }\n\n    @Pointcut("@within(io.github.rhdtl78.acl.annotcation.AccessControl)")\n    public void annotatedClass() {\n    }\n\n    @Before("execution(* *(..)) && endpoint() && (annotatedMethod() || annotatedClass())")\n    public void checkAccessControl(JoinPoint joinPoint) {\n        MethodSignature signature = (MethodSignature) joinPoint.getSignature();\n        AccessControl accessControl = signature.getMethod().getAnnotation(AccessControl.class);\n\n        if (accessControl == null) {\n            Class<?> declaringType = signature.getDeclaringType();\n            accessControl = declaringType.getDeclaredAnnotation(AccessControl.class);\n        }\n\n        log.debug("accessControl: {}", accessControl);\n\n        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();\n\n        String remoteHost = request.getRemoteHost();\n        log.debug("remoteHost: {}", remoteHost);\n\n        boolean isInAllowedHost = Arrays.stream(accessControl.include()).anyMatch(subnet -> matches(remoteHost, subnet));\n        boolean isInDeniedHost = Arrays.stream(accessControl.exclude()).anyMatch(subnet -> matches(remoteHost, subnet));\n\n        boolean isNotInAllowedPattern = accessControl.include().length > 0 && accessControl.exclude().length == 0 && !isInAllowedHost;\n        boolean isInDeniedPattern = accessControl.include().length == 0 && accessControl.exclude().length > 0 && isInDeniedHost;\n        boolean isMatchedWithDeniedPattern = accessControl.include().length > 0 && accessControl.exclude().length > 0 && (!isInAllowedHost || isInDeniedHost);\n\n        if (isNotInAllowedPattern || isInDeniedPattern || isMatchedWithDeniedPattern) {\n            throw new AclDeniedException("Access denied from ACL layer. please contact administrator");\n        }\n\n        boolean noConfiguration = accessControl.include().length == 0 && accessControl.exclude().length == 0;\n        if (noConfiguration) {\n            log.debug("AccessControl annotation is empty. please check your code");\n        }\n\n        log.debug("AccessControl is passed");\n    }\n\n    private boolean matches(String ip, String subnet) {\n        if (ip.matches(LOOPBACK_PATTERN)) {\n            return true;\n        }\n\n        if (subnet.matches(CIDR_SUFFIX_PATTERN)) {\n            SubnetUtils utils = new SubnetUtils(subnet);\n            return utils.getInfo().isInRange(ip);\n        }\n\n        return ip.equals(subnet);\n    }\n}\n')),(0,a.kt)("h3",{id:"pattern"},"Pattern"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'    ...\n    private static final String CIDR_SUFFIX_PATTERN = "^([0-9]{1,3}\\\\.){3}[0-9]{1,3}(\\\\/([0-9]|[1-2][0-9]|3[0-2]))$";\n    private static final String LOOPBACK_PATTERN = "^localhost$|^127(?:\\\\.[0-9]+){0,2}\\\\.[0-9]+$|^(?:0*\\\\:)*?:?0*1$";\n    ...\n')),(0,a.kt)("p",null,"\uc704 \uc904\uc758 \ud328\ud134 \uc120\uc5b8\uc73c\ub85c ",(0,a.kt)("inlineCode",{parentName:"p"},"CIDR \ud45c\uae30\ubc95"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"loop back ip"),"\ub97c \uac10\uc9c0\ud560 \uc218 \uc788\ub2e4. "),(0,a.kt)("h3",{id:"pointcut"},"pointcut"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Pointcut("@annotation(org.springframework.web.bind.annotation.RequestMapping) || @annotation(org.springframework.web.bind.annotation.GetMapping) || @annotation(org.springframework.web.bind.annotation.PostMapping) || @annotation(org.springframework.web.bind.annotation.PutMapping) || @annotation(org.springframework.web.bind.annotation.PatchMapping) || @annotation(org.springframework.web.bind.annotation.DeleteMapping)")\npublic void endpoint() {\n}\n')),(0,a.kt)("p",null,"\ucee8\ud2b8\ub864\ub7ec\uc5d0\ub9cc \uc124\uc815 \ud560 \uc218 \uc788\ub3c4\ub85d, \ud2b9\ud788 ",(0,a.kt)("inlineCode",{parentName:"p"},"endpoint mapping")," \uc5d0\ub9cc \ub3d9\uc791\ud558\ub3c4\ub85d \uc81c\ud55c\ud558\ub294 Pointcut.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"RequestMapping")," \ubc0f \uae30\ud0c0 ",(0,a.kt)("inlineCode",{parentName:"p"},"endpoint mapping")," \uc744 \ubaa8\ub450 \uc9c0\uc6d0\ud55c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Pointcut("@annotation(io.github.rhdtl78.acl.annotcation.AccessControl)")\npublic void annotatedMethod() {\n}\n\n@Pointcut("@within(io.github.rhdtl78.acl.annotcation.AccessControl)")\npublic void annotatedClass() {\n}\n')),(0,a.kt)("p",null,"\uba54\uc11c\ub4dc \uae30\ubc18 \ubc0f \ud074\ub798\uc2a4 \uae30\ubc18 \uc124\uc815\uc744 \uc9c0\uc6d0\ud558\ub294 pointcut.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},'@Pointcut("@annotation(io.github.rhdtl78.acl.annotcation.AccessControl)")')," \uc774 ",(0,a.kt)("inlineCode",{parentName:"p"},"@AccessControl"),"\uc774 \ubd99\uc740 \ubaa8\ub4e0 \uba54\uc11c\ub4dc\uc758 \uc2e4\ud589\uc5d0 \ub3d9\uc791\ud558\uac8c \ud558\uba70,",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},'@Pointcut("@within(io.github.rhdtl78.acl.annotcation.AccessControl)")')," \uc774 ",(0,a.kt)("inlineCode",{parentName:"p"},"@AccessControl"),"\uc774 \ubd99\uc740 \ud074\ub798\uc2a4\uc758 \ubaa8\ub4e0 \uba54\uc11c\ub4dc\uc758 \uc2e4\ud589\uc5d0 \ub3d9\uc791\ud558\uac8c \ud55c\ub2e4."),(0,a.kt)("h3",{id:"exception"},"exception"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"package io.github.rhdtl78.acl.exception;\n\npublic class AclDeniedException extends RuntimeException {\n    public AclDeniedException(String message) {\n        super(message);\n    }\n}\n\n")),(0,a.kt)("p",null,"\uc811\uadfc \uc81c\uc5b4\ub97c \ud1b5\uacfc\ud558\uc9c0 \ubabb\ud55c \uacbd\uc6b0, \uc608\uc678\ucc98\ub9ac \ud560 \uc218 \uc788\ub3c4\ub85d \ubc1c\ud589\ud558\ub294 \uc608\uc678.",(0,a.kt)("br",{parentName:"p"}),"\n","\uae30\ubcf8\uc801\uc73c\ub85c, \uc704 \uc608\uc678\ub97c \ucc98\ub9ac\ud558\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"ControllerAdvice"),"\ub3c4 \uc900\ube44\ub418\uc5b4\uc788\ub2e4."),(0,a.kt)("h3",{id:"controlleradvice"},"ControllerAdvice"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"package io.github.rhdtl78.acl.advice;\n\nimport io.github.rhdtl78.acl.exception.AclDeniedException;\nimport org.springframework.core.annotation.Order;\nimport org.springframework.web.bind.annotation.ExceptionHandler;\nimport org.springframework.web.bind.annotation.RestControllerAdvice;\n\n@Order(0)\n@RestControllerAdvice\npublic class AclRestControllerAdvice {\n\n    @ExceptionHandler(AclDeniedException.class)\n    public String handleAclDeniedException(AclDeniedException e) {\n        return e.getMessage();\n    }\n}\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package io.github.rhdtl78.acl.advice;\n\nimport io.github.rhdtl78.acl.exception.AclDeniedException;\nimport org.springframework.core.annotation.Order;\nimport org.springframework.web.bind.annotation.ControllerAdvice;\nimport org.springframework.web.bind.annotation.ExceptionHandler;\nimport org.springframework.web.servlet.ModelAndView;\n\n@Order(1)\n@ControllerAdvice\npublic class AclControllerAdvice {\n\n    @ExceptionHandler(AclDeniedException.class)\n    public ModelAndView handleAclDeniedException(AclDeniedException e) {\n        ModelAndView modelAndView = new ModelAndView();\n        modelAndView.setViewName("error");\n        modelAndView.addObject("message", e.getMessage());\n        return modelAndView;\n    }\n}\n\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@Controller"),"\uc640 ",(0,a.kt)("inlineCode",{parentName:"p"},"@RestController"),"\ub97c \ub458 \ub2e4 \uc9c0\uc6d0\ud558\uae30 \uc704\ud574 \uac01\uac01\uc758 ControllerAdvice\ub97c \ub9cc\ub4e4\uc5c8\uc73c\ub098,",(0,a.kt)("br",{parentName:"p"}),"\n","ACL \uc608\uc678\ub97c \ub358\uc9c4 \ucee8\ud2b8\ub864\ub7ec\uc758 \uc885\ub958\uc640 \uad00\uacc4\uc5c6\uc774, ",(0,a.kt)("inlineCode",{parentName:"p"},"@Order(0)"),"\uc73c\ub85c \uc124\uc815\ub41c ",(0,a.kt)("inlineCode",{parentName:"p"},"AclRestControllerAdvice")," \ub9cc \ub3d9\uc791\ud558\ub354\ub77c."),(0,a.kt)("h3",{id:"\uc608\uc2dc"},"\uc608\uc2dc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Controller\n@RequestMapping("/")\n@AccessControl(include = ["10.0.0.1/32", "10.0.1.99"])\nclass MyController {\n    @GetMapping\n    public String index() {\n        return "index";\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\n@RequestMapping("/")\nclass MyController {\n    @GetMapping\n    @AccessControl(include = ["10.0.0.1/32", "10.0.1.99"])\n    public String index() {\n        return "index";\n    }\n}\n')))}g.isMDXComponent=!0}}]);