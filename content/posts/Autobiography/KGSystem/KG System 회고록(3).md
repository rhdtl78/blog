---
template: post
title: "KG System 회고록 (3)"
date: "2020-04-29T01:00:00+09:00Z"
slug: /posts/autobiography/kgsystem/3
category: Autobiography
description: "약 8개월간의 프로젝트, 스마트 공장과 laravel"
tags: 
  - Autobiography
  - KGSystem
priority: 0
---
![KG System Logo](/companies/kgsystem.png)

[KG System 홈페이지](https://kgsystem.co.kr)

## 첫 프로젝트 (스마트 공장 지원 사업)
관련 프로젝트의 Portfolio는 [여기](http://localhost:9000/posts/portfolio/kgsystem/mes)를 참고.
2019.06 ~ 2020.02 까지 근무하는 동안 프로젝트를 맡아 진행했었다.

국책과제로 스마트 공장 구축,보급 지원 사업의 일환으로 [삼성 주관 대중소 상생형 스마트 공장 지원 사업 유형 1-b](https://www.kbiz.or.kr/ko/contents/bbs/view.do?seq=132774&topFixYn=N&pg=2&pgSz=10&mnSeq=334&schFld=whle&schTxt=2019)를 진행하게 되었다.

프로젝트 규모는 총 1억1천만원의 비용에 6000만원의 지원금이었으며, 삼성측 멘토가 파견되어 사업 진행에 도움을 주는 방식으로 진행되었다.

## Tech Stack
기술 스택은 다음과 같이 정리된다.
- Webserver
  - Apache2
  - bind9
- Database
  - MySQL (Main Database)
  - Redis (For push-alarm sevice)
- Servier Side
  - Laravel (php)
  - Laravel Echo (socket.io)
- Client Side
  - React & MobX (javascript)
  - Echo (socket.io)
- Source Code Management
  - git & github
- CI|CD
  - github webhook
  - jenkins

언어 사용에 있어 큰 무리가 없게 언어 자체를 바꾸는 일은 없게 선택했으며, React는 이전의 jQuery보다 체계적으로, 재사용 할 수 있게 개발 하기 위해 선택했다.

본인은 React를 이전 부터 사용했고, 공모전 출전 경험도 있어 큰 무리가 없었지만, 사수는 처음 접하는 것이라 걱정되었다.
다행히도 금방 익숙해 졌으며 속도도 붙어 무리없이 완수할 수 있었다.
