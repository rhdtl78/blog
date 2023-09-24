"use strict";(self.webpackChunkrhdtl_78_github_io=self.webpackChunkrhdtl_78_github_io||[]).push([[5917],{3905:(e,n,a)=>{a.d(n,{Zo:()=>s,kt:()=>u});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function c(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),p=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):c(c({},n),e)),a},s=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},h="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),h=p(a),m=r,u=h["".concat(l,".").concat(m)]||h[m]||g[m]||o;return a?t.createElement(u,c(c({ref:n},s),{},{components:a})):t.createElement(u,c({ref:n},s))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[h]="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=a[p];return t.createElement.apply(null,c)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8938:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var t=a(7462),r=(a(7294),a(3905));const o={title:"Ehcache\uc640 RMI\ub97c \ud65c\uc6a9\ud55c \ub2e4\uc911 \uc11c\ubc84 \ud658\uacbd\uc758 \uce90\uc2f1 \ubb38\uc81c \ud574\uacb0",description:"\ubd84\uc0b0 \ud658\uacbd\uc5d0\uc11c\uc758 Ehcache \uc124\uc815\uacfc RMI \uae30\ubc18 \ud074\ub7ec\uc2a4\ud130\ub9c1 \uad6c\ud604",slug:"/dev-blog/programming/distributed-ehcache",category:"Programming",tags:["Spring","EHCache","\ubd84\uc0b0\uce90\uc2dc"]},c=void 0,i={permalink:"/dev-blog/programming/distributed-ehcache",editUrl:"https://rhdtl78.github.io/dev-blog/2023-09-24-distributed-ehcache/index.mdx",source:"@site/dev-blog/2023-09-24-distributed-ehcache/index.mdx",title:"Ehcache\uc640 RMI\ub97c \ud65c\uc6a9\ud55c \ub2e4\uc911 \uc11c\ubc84 \ud658\uacbd\uc758 \uce90\uc2f1 \ubb38\uc81c \ud574\uacb0",description:"\ubd84\uc0b0 \ud658\uacbd\uc5d0\uc11c\uc758 Ehcache \uc124\uc815\uacfc RMI \uae30\ubc18 \ud074\ub7ec\uc2a4\ud130\ub9c1 \uad6c\ud604",date:"2023-09-24T00:00:00.000Z",formattedDate:"September 24, 2023",tags:[{label:"Spring",permalink:"/tags/spring"},{label:"EHCache",permalink:"/tags/eh-cache"},{label:"\ubd84\uc0b0\uce90\uc2dc",permalink:"/tags/\ubd84\uc0b0\uce90\uc2dc"}],readingTime:7.035,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Ehcache\uc640 RMI\ub97c \ud65c\uc6a9\ud55c \ub2e4\uc911 \uc11c\ubc84 \ud658\uacbd\uc758 \uce90\uc2f1 \ubb38\uc81c \ud574\uacb0",description:"\ubd84\uc0b0 \ud658\uacbd\uc5d0\uc11c\uc758 Ehcache \uc124\uc815\uacfc RMI \uae30\ubc18 \ud074\ub7ec\uc2a4\ud130\ub9c1 \uad6c\ud604",slug:"/dev-blog/programming/distributed-ehcache",category:"Programming",tags:["Spring","EHCache","\ubd84\uc0b0\uce90\uc2dc"]},nextItem:{title:"Access Control with AOP",permalink:"/dev-blog/programming/acl-with-aop"}},l={authorsImageUrls:[]},p=[{value:"AS-IS",id:"as-is",level:2},{value:"TO-BE",id:"to-be",level:2},{value:"build.gradle",id:"buildgradle",level:3},{value:"Java Config",id:"java-config",level:3},{value:"<code>ehcache.xml</code>",id:"ehcachexml",level:3},{value:"Java Config",id:"java-config-1",level:3}],s={toc:p},h="wrapper";function g(e){let{components:n,...a}=e;return(0,r.kt)(h,(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ud604\uc7ac \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c\uc758 \ub2e4\uc911 \uc11c\ubc84 \ud658\uacbd\uc5d0\uc11c \ubc1c\uc0dd\ud55c embedded \uce90\uc2f1 \ubb38\uc81c\uc640 \ud574\uacb0 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc124\uba85\ud55c\ub2e4."),(0,r.kt)("h1",{id:"\ubb38\uc81c-\uc0c1\ud669"},"\ubb38\uc81c \uc0c1\ud669"),(0,r.kt)("p",null,"\ud604\uc7ac \ub9de\uace0\uc788\ub294 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\uc911\uc778 \uc11c\ubc84\ub294 \ucd1d 20\ub300\uc758 WAS \uc778\uc2a4\ud134\uc2a4\uc640 \uac01 2\ub300\uc529\uc744 \uc5f0\uacb0\ud558\ub294 Apache \uc6f9 \uc11c\ubc84\ub85c \uad6c\uc131\ub418\uc5b4\uc788\ub2e4. \ubb3c\ub9ac \uc11c\ubc84\ub294 \ucd1d 10\ub300\ub85c \uac01\uac01 2\ub300\uc758 \uc778\uc2a4\ud134\uc2a4\ub97c \uad6c\ub3d9\ud558\uace0\uc788\ub2e4. \ubaa8\ub4e0 \uc11c\ubc84\ub294 \uc628\ud504\ub808\ubbf8\uc2a4 \ud658\uacbd\uc774\ub2e4. \uc5c5\ubb34\uc0c1 \uc5f0\ub3d9\ud558\uace0\uc788\ub294 \uc678\ubd80 \uc11c\ube44\uc2a4\uc911 \ud558\ub098\uac00 oauth2.0 \uae30\ubc18 \uc778\uc99d \uc808\ucc28\ub97c \uc0ac\uc6a9\ud55c\ub2e4.  \ud574\ub2f9 \uc11c\ube44\uc2a4\uc5d0\uc11c \ubc1c\uae09\ub41c ",(0,r.kt)("inlineCode",{parentName:"p"},"authorize_code")," \ub294 \uc77c\ud68c\uc6a9\uc774\uba70, \uc774 \ucf54\ub4dc\ub97c \ud1b5\ud574 ",(0,r.kt)("inlineCode",{parentName:"p"},"access token"),"\uc744 \ubc1c\uae09\ubc1b\uc744 \uc218 \uc788\ub2e4. \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uae30\ub2a5\uc911\uc5d0\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"authorize_code")," \ub9cc\uc744 \uac00\uc9c0\uace0 ",(0,r.kt)("inlineCode",{parentName:"p"},"access token")," \uc744 \ubc1c\uae09 \ubc1b\uc544  \uce90\uc2f1\ud558\uc5ec \ub9cc\ub8cc\ub420\ub54c\uae4c\uc9c0 \uc0ac\uc6a9\ud55c\ub2e4. \uc11c\ubc84\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"authorize code")," \ub97c key\ub85c \uce90\uc2dc\ub97c \uad6c\uc131\ud558\uba70 \uc774\ud6c4\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"access token")," \ubc1c\uae09 \uc694\uccad\uc5d0 \ub300\ube44\ud55c\ub2e4. \uadf8\ub7ec\ub098 \ub2e4\uc911 \uc778\uc2a4\ud134\uc2a4\ub85c \uc778\ud574 \uce90\uc2dc\ub97c \uad6c\uc131\ud55c \uc778\uc2a4\ud134\uc2a4\uac00 \uc544\ub2cc \ub2e4\ub978 \ubaa8\ub4e0 \uc778\uc2a4\ud134\uc2a4\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"access token")," \ubc1c\uae09\uc5d0 \uc2e4\ud328\ud55c\ub2e4."),(0,r.kt)("h1",{id:"\uacc4\ud68d"},"\uacc4\ud68d"),(0,r.kt)("p",null,"\ud604\uc7ac Ehcache\ub97c \ubaa8\ub4e0 \uc774\ubca4\ud2b8 \uc11c\ubc84 WAS \uc778\uc2a4\ud134\uc2a4\uc5d0\uc11c embed \ud558\uc5ec \uc0ac\uc6a9\uc911\uc774\ub2e4. Ehcache\ub294 ",(0,r.kt)("a",{parentName:"p",href:"https://www.ehcache.org/documentation/2.8/replication/rmi-replicated-caching.html"},"\ud074\ub7ec\uc2a4\ud130\ub9c1\uc744 \uc9c0\uc6d0"),"\ud55c\ub2e4. \ub85c\uceec \uce90\uc2dc \uc124\uc815\uc744 \ubd84\uc0b0 \uce90\uc2dc \uc124\uc815\uc73c\ub85c \ubcc0\uacbd\ud558\uc5ec \uc778\uc2a4\ud134\uc2a4\uac04 \uce90\uc2dc \ubd88\uc77c\uce58 \ubb38\uc81c\ub97c \ud574\uacb0\ud560 \uc218 \uc788\ub2e4.\n\ub2e8, \uc774\ubc88\uc5d0 \uc124\uc815\ud560 RMI \uae30\ubc18 \ud074\ub7ec\uc2a4\ud130\ub9c1\uc740 multicast \ub97c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub2e4\uba74, \uc218\ub3d9\uc73c\ub85c P2P \uc5f0\uacb0 \uc124\uc815\uc744 \uc9c4\ud589\ud574\uc57c \ud55c\ub2e4.\nehcache\uac00 \uc9c0\uc6d0\ud558\ub294 \ubd84\uc0b0 \uce90\uc2dc \uc124\uc815\uc5d0\ub294 4\uac00\uc9c0\uac00 \uc788\ub2e4. (2.x \ud55c\uc815)."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Terracota\nTerracota \ub77c\ub294 \ubcc4\ub3c4\uc758 \uc11c\ube44\uc2a4\ub97c \uad6c\ub3d9\ud558\uc5ec \uad6c\uc131\ud558\ub294 \ubc29\uc2dd\uc774\ub2e4. \uc11c\ubc84 \uad6c\uc870\ub97c \ubcc0\uacbd\ud560 \uc218 \uc5c6\ub294 \uc0c1\ud669\uc774\ubbc0\ub85c \uc81c\uc678\ub418\uc5c8\ub2e4.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"RMI (Remote Method Invocation)\n\ubcf8 \uae00\uc5d0\uc11c \uc124\uba85\ud558\ub294 \ubc29\uc2dd\uc774\ub2e4. \ub77c\uc6b0\ud130\ub098 \uc2a4\uc704\uce58\uc5d0\uc11c \uc9c0\uc6d0\ud558\ub294 multicast ip \ub300\uc5ed\uc744 \uc0ac\uc6a9\ud574 \uba54\uc2dc\uc9c0\ub97c \uc8fc\uace0\ubc1b\uc740 \ubc29\uc2dd\uc774\ub2e4.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"JGROUP\nRMI \uc640 \ube44\uc2b7\ud55c \ubc29\uc2dd\uc774\uc9c0\ub9cc, \uc124\uc815\uc774 \ub354 \ubcf5\uc7a1\ud558\uace0 \uc5f0\uad6c\ud560 \uc2dc\uac04\uc774 \ubaa8\uc790\ub974\uae30\uc5d0 \uc120\ud0dd \ub300\uc0c1\uc5d0\uc11c \uc81c\uc678\ud588\ub2e4.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"JMS\n\ubcc4\ub3c4\uc758 Message Queue\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\uc2dd\uc774\ub2e4. \ub9c8\ucc2c\uac00\uc9c0\ub85c, \ubcc4\ub3c4 \uc11c\ubc84\ub97c \uad6c\uc131\ud560 \uc218 \uc5c6\ub294 \uc0c1\ud669\uc774\uae30\uc5d0 \uc81c\uc678\ub418\uc5c8\ub2e4."))),(0,r.kt)("h1",{id:"\ub3c4\uc548"},"\ub3c4\uc548"),(0,r.kt)("p",null,"\uc544\ub798\ub294 \ubaa9\ud45c \uad6c\uc131\uc758 \ub3c4\uc548\uc774\ub2e4. IP \uc8fc\uc18c\ub294 \ubb3c\ub9ac \uc11c\ubc84\uc758 \uad6c\ubd84\uc744 \ub098\ud0c0\ub0b4\uae30 \uc704\ud574 \ud45c\uc2dc\ud55c \uac00\uc0c1\uc758 IP \uc774\ub2e4."),(0,r.kt)("h2",{id:"as-is"},"AS-IS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"----- 172.0.0.1 -----\n|        WEB        |\n---------------------\n          |\n---- 172.0.0.2,3 ----\n|  App  |  EhCache  |\n---------------------  X 2\n|       TOMCAT      |\n---------------------\n")),(0,r.kt)("h2",{id:"to-be"},"TO-BE"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"----- 172.0.0.1 -----\n|        WEB        |\n---------------------\n          |        RMI with multicast\n          |    \u250c-----------------------\u2510\n----- 172.0.0.2 -----    ----- 172.0.0.3 -----\n|  App  |  EhCache  |    |  App  |  EhCache  |\n---------------------    ---------------------\n|       TOMCAT      |    |       TOMCAT      |\n---------------------    ---------------------\n")),(0,r.kt)("h1",{id:"\uad6c\ud604"},"\uad6c\ud604"),(0,r.kt)("p",null,"Java Config \ub85c \uc124\uc815\ud55c \ub0b4\uc6a9\uc740 \uc544\ub798\uc640 \uac19\ub2e4. \ubcf8 \uae00\uacfc \ube44\uc2b7\ud55c \ud0a4\uc6cc\ub4dc\ub85c \uac80\uc0c9\ud558\uba74 \ub9ce\uc774 \ubcf4\uc774\ub294 \ub0b4\uc6a9\uacfc \ucc28\uc774\uac00 \ud06c\uac8c \uc5c6\ub2e4."),(0,r.kt)("h3",{id:"buildgradle"},"build.gradle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    // ...\n    implementation 'net.sf.ehcache:ehcache:2.10.4'\n}\n")),(0,r.kt)("h3",{id:"java-config"},"Java Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import java.net.InetAddress;\nimport java.net.UnknownHostException;\nimport net.sf.ehcache.Cache;\nimport net.sf.ehcache.config.CacheConfiguration;\nimport net.sf.ehcache.config.CacheConfiguration.CacheEventListenerFactoryConfiguration;\nimport net.sf.ehcache.config.DiskStoreConfiguration;\nimport net.sf.ehcache.config.FactoryConfiguration;\nimport net.sf.ehcache.config.PersistenceConfiguration;\nimport net.sf.ehcache.config.PersistenceConfiguration.Strategy;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.cache.CacheManager;\nimport org.springframework.cache.ehcache.EhCacheCacheManager;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.context.annotation.Primary;\n\n@Configuration\npublic class CacheConfig {\n\n    private static final Logger log = LoggerFactory.getLogger(CacheConfig.class);\n\n    @Bean\n    @Primary\n    public CacheManager cacheManager() throws UnknownHostException {\n        net.sf.ehcache.CacheManager cacheManager = createEhCacheManager();\n        cacheManager.addCache(applyRmiEventListener(cacheChannelOneMin()));\n        return new EhCacheCacheManager(cacheManager);\n    }\n\n    private net.sf.ehcache.CacheManager createEhCacheManager() throws UnknownHostException {\n\n        net.sf.ehcache.config.Configuration configuration = new net.sf.ehcache.config.Configuration();\n        configuration.diskStore(new DiskStoreConfiguration().path("java.io.tmpdir"));\n        String hostname = InetAddress.getLocalHost().getHostName();\n        log.info("hostname: {}", hostname);\n\n        // multicast \uc124\uc815\n        FactoryConfiguration factoryConfig = new FactoryConfiguration()\n            .className("net.sf.ehcache.distribution.RMICacheManagerPeerProviderFactory")\n            .properties("peerDiscovery=automatic,multicastGroupAddress=228.0.0.4,multicastGroupPort=4446,timeToLive=1")\n            .propertySeparator(",");\n        configuration.cacheManagerPeerProviderFactory(factoryConfig);\n\n        // \ub2e4\ub978 \ub178\ub4dc\uc5d0\uc11c \ubc1c\uc0dd\ud55c \uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108\n        FactoryConfiguration listenerFactoryConfig = new FactoryConfiguration()\n            .className("net.sf.ehcache.distribution.RMICacheManagerPeerListenerFactory")\n            .properties("socketTimeoutMillis=2000,port=40000,hostName=" + hostname)\n            .propertySeparator(",");\n        configuration.cacheManagerPeerListenerFactory(listenerFactoryConfig);\n\n        return net.sf.ehcache.CacheManager.create(configuration);\n    }\n\n    private Cache applyRmiEventListener(Cache cache) {\n        // \uce90\uc2dc \ubcc4 \ubcc0\uacbd \ub0b4\uc5ed\uc744 \uc804\uc1a1 \uc124\uc815\n        CacheEventListenerFactoryConfiguration eventListenerFactoryConfig = new CacheEventListenerFactoryConfiguration()\n            .className("net.sf.ehcache.distribution.RMICacheReplicatorFactory")\n            // \ub3d9\uae30\uc801\uc73c\ub85c \ubcc0\uacbd\uc0ac\ud56d\uc744 \uc804\ud30c, \uc0c8\ub85c\uc6b4 \uce90\uc2dc \ud56d\ubaa9 \uc804\ud30c, \uce90\uc2dc \ud56d\ubaa9\uc758 \ubcc0\uacbd\uc0ac\ud56d \uc804\ud30c, \uce90\uc2dc \ud56d\ubaa9\uc758 \ubcc0\uacbd \uc0ac\ud56d\uc744 evict \ud558\ub294 \uac83\uc73c\ub85c \ub300\uccb4.\n            .properties("replicateAsynchronously=false,replicatePuts=true,replicateUpdates=true,replicateUpdatesViaCopy=false,replicateRemovals=true")\n            .propertySeparator(",");\n\n        cache.getCacheConfiguration()\n            .cacheEventListenerFactory(eventListenerFactoryConfig);\n\n        return cache;\n    }\n\n    private Cache cacheChannelOneMin() {\n        return new Cache(\n            new CacheConfiguration()\n                .name("cacheChannelOneMin")\n                .maxEntriesLocalHeap(1000)\n                .eternal(false)\n                .persistence(\n                    new PersistenceConfiguration()\n                        .strategy(Strategy.LOCALTEMPSWAP)\n                )\n                .timeToIdleSeconds(60)\n                .timeToLiveSeconds(60)\n                .memoryStoreEvictionPolicy("LRU")\n        );\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RMICache")," \ub85c \ubcf4\uc774\ub294 \ub0b4\uc6a9\ub4e4\uc774 \ubaa8\ub450 RMI \uae30\ubc18 \ubd84\uc0b0 \uce90\uc2dc \uc124\uc815\uc5d0 \uad00\ud55c \ub0b4\uc6a9\uc774\ub2e4.  \uadf8\ub7ec\ub098 \ub180\ub78d\uac8c\ub3c4,"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("span",{style:{fontSize:"2rem"}},"\uc704 \uc124\uc815\uc740 \uc81c\ub300\ub85c \ub3d9\uc791\ud558\uc9c0 \uc54a\ub294\ub2e4.")))),(0,r.kt)("p",null,"\uc801\uc6a9\ud560 \ud504\ub85c\uc81d\ud2b8\uac00 Spring MVC project (springframework 5.X) \ub77c\uc11c \uadf8\ub7f0\uac83 \uac19\uc544, Springboot 2.x \ub85c \ud074\ub9b0 \ud504\ub85c\uc81d\ud2b8\ub97c \uad6c\uc131\ud6c4 \uc2dc\ub3c4\ud588\uc74c\uc5d0\ub3c4, \uac01 \uc778\uc2a4\ud134\uc2a4\uac00 \uc11c\ub85c\ub97c \ucc3e\uc9c0 \ubabb\ud558\ub294 \ubaa8\uc2b5\uc744 \ubcf4\uc600\ub2e4. PeerProvider\uac00 \ub3d9\uc791\ud558\uc9c0 \uc54a\ub294 \uac83 \ucc98\ub7fc, PeerListener\ub294 \ub4f1\ub85d\ub41c \uac83\uc774 \ubcf4\uc600\ub294\ub370, PeerListener \uac00 \uc544\ubb34 \ub3d9\uc791\ub3c4 \ud558\uc9c0 \uc54a\uc558\ub2e4."),(0,r.kt)("p",null,"\uc774\uc5d0 xml \uae30\ubc18 \uc124\uc815\uc73c\ub85c \uc62e\uae34 \ud6c4\uc5d0\uc57c \ub3d9\uc791\ud588\ub2e4."),(0,r.kt)("h3",{id:"ehcachexml"},(0,r.kt)("inlineCode",{parentName:"h3"},"ehcache.xml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-\bxml"},'<?xml version="1.0" encoding="UTF-8" ?>\n<ehcache xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:noNamespaceSchemaLocation="https://www.ehcache.org/ehcache.xsd">\n    <diskStore path="java.io.tmpdir"/>\n    <cacheManagerPeerProviderFactory\n        class="net.sf.ehcache.distribution.RMICacheManagerPeerProviderFactory"\n        properties="peerDiscovery=automatic,multicastGroupAddress=228.0.0.4,multicastGroupPort=4446,timeToLive=1"\n        propertySeparator=","\n    />\n\n    <cacheManagerPeerListenerFactory\n        class="net.sf.ehcache.distribution.RMICacheManagerPeerListenerFactory"\n        properties="hostName=localhost, port=40001, socketTimeoutMillis=2000"/>\n\n    <cache name="cacheChannelOneMin"\n        maxEntriesLocalHeap="1000"\n        maxEntriesLocalDisk="10000"\n        diskPersistent="false"\n        timeToIdleSeconds="1000"\n        timeToLiveSeconds="1000"\n        memoryStoreEvictionPolicy="LRU"\n    >\n        <cacheEventListenerFactory\n            class="net.sf.ehcache.distribution.RMICacheReplicatorFactory"\n            properties="replicateAsynchronously=false,replicatePuts=true,replicateUpdates=true,replicateUpdatesViaCopy=false,replicateRemovals=true"\n            propertySeparator=","\n        />\n    </cache>\n</ehcache>\n')),(0,r.kt)("h3",{id:"java-config-1"},"Java Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"package com.skp.ocb.cache.config;\n\nimport org.springframework.cache.CacheManager;\nimport org.springframework.cache.ehcache.EhCacheCacheManager;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n\n@Configuration\npublic class CacheConfig {\n\n    @Bean\n    public CacheManager cacheManager() {\n        net.sf.ehcache.CacheManager cacheManager = new net.sf.ehcache.CacheManager();\n        return new EhCacheCacheManager(cacheManager);\n    }\n}\n")),(0,r.kt)("p",null,"\ubc84\uc804 \ubb38\uc81c\uc778\uac00 \uc2f6\uc5b4, ehcache 3.x \ub3c4 \uc54c\uc544\ubd24\uc73c\ub098, 3\ubc84\uc804 \ubd80\ud130 \ud328\ud0a4\uc9c0 \uc774\ub984\ubd80\ud130\uac00 \ub2ec\ub77c\uc84c\uc73c\uba70, RMI \uad00\ub828 \uad6c\ud604\uc774 \ubaa8\ub450 \uc0ac\ub77c\uc9c4 \uc0c1\ud0dc\uc600\ub2e4."),(0,r.kt)("p",null,"\uc774\ud6c4 \ub354 \uc774\uc0c1 ehcache \ub85c \ud560 \uc218 \uc788\ub294 \ub2e4\ub978 \ubd84\uc0b0 \uce90\uc2dc \uc124\uc815\uc740 \ucc3e\uc744 \uc218 \uc5c6\uc5c8\ub2e4. JGROUP\uc740 multicast \uae30\ubc18\uc774\uc9c0\ub9cc, \uc124\uc815\uc774 \ub354 \ubcf5\uc7a1\ud574 \uad00\ub9ac \uc6a9\uc774\uc131\uc744 \uc704\ud574 \uc81c\uc678\ud588\uace0, JMS \ub294 \ubcc4\ub3c4\uc758 MQ \uc11c\ubc84\uac00 \ud544\uc694\ud574 \uc120\ud0dd \ub300\uc0c1\uc774 \uc544\ub2c8\uc5c8\ub2e4. terracota \uc5ed\uc2dc \ubcc4\ub3c4\uc758 \uc11c\ube44\uc2a4\uac00 \ud544\uc694\ud568\uc5d0 \uc81c\uc678\ub418\uc5c8\ub2e4."))}g.isMDXComponent=!0}}]);