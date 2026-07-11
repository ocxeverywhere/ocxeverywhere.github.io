---
title: "[앱 개발 도전기 #3] 코덱스로 갈아타기"
description: "Claude Code에서 Codex로 개발 환경을 옮긴 뒤 느낀 속도, 워커 설정, GPT-5.5 문제 해결력과 모바일 Remote 기능을 정리했습니다."
last_modified_at: 2026-07-10 09:00:00 +0300
image:
  path: /assets/images/posts/codex-ai-coding-overview.png
  alt: "Codex로 AI 코딩을 시작하는 방법을 설명하는 안내 이미지"
date: 2026-07-02 05:47:00 +0300
lang: ko
categories: [앱 개발]
tags: [코덱스, Codex, GPT55, GPT55코딩, ChatGPT, ClaudeCode, 클로드코드, 바이브코딩, AI코딩, AI개발, 개발생산성, 프로그래밍, 앱개발, 개인프로젝트, GitHubCopilot, GPT플러스, AI활용, 개발도구, 생성형AI, 코딩AI, 개발자동화, LazyDaddy, JustListen, 개발자, 코딩팁]
permalink: /blog/posts/switching-to-codex/
author: LazyDaddy
---

지난 [앱 개발 도전기 #1](/blog/posts/claude-code-first-android-app/)에서 클로드 코드를 사용해 바이브 코딩을 시작한 이야기를 공유했는데요.

그 글을 작성한 4월 초에 코덱스 5.5가 나왔지요. 비슷하게 클로드에서 Opus 4.7을 내놓기는 했으나, 토큰 소모량만 무지하게 늘어나며 앱 개발 측면에서는 Opus 4.6과 크게 비교가 안 되는 모델이었지요.

## Claude Code에서 Codex로

코덱스는 어떨지 궁금하기도 해서 가장 낮은 플랜인 Plus를 결제하고 코덱스를 설치했습니다.

저는 클로드도 클로드 코드 앱을 사용하고 있었는데요. 코덱스 UX도 무척 클로드 코드 앱과 비슷해 적응하는 데 5분도 채 걸리지 않았어요.

당연히 지난 포스팅에서 설정해 두었던 스킬들, 각종 Markdown 문서들, 에이전트들도 코덱스에 호환됩니다. 저는 코덱스에게 시켰어요.

![Claude Code의 설정과 에이전트를 Codex로 옮겨 달라고 요청한 프롬프트](/assets/images/posts/codex-claude-migration-prompt.png)

*기존 Claude Code 설정을 Codex에서 사용할 수 있도록 요청한 화면*

그리고 프로젝트에 클로드 코드의 `CLAUDE.md`가 있으면 이 또한 코덱스에서도 읽을 수 있으나, 코덱스는 `AGENTS.md`를 따로 관리하고 있더라고요. 클로드의 에이전트라는 용어에 상응되는 워커라는 용어도 있었고요. 그래도 클로드 용어로 지시해도 찰떡같이 알아먹었습니다.

클로드의 주요 모델인 Sonnet 4.6에 대응되는 모델을 찾는 것이 중요해서, 코덱스에 물어보고 GPT-5.4 Thinking 모델을 대부분의 에이전트(워커)에서 사용하도록 설정했습니다. GPT-5.5 모델을 항상 메인으로 사용하기 때문에 토큰 소모량 관리를 위해 실제 코딩, 리팩터링, 리뷰, 테스트 등을 작성하는 에이전트는 모두 하위 범용 모델을 사용하도록 했지요.

![코딩과 리뷰 작업용 워커에 GPT-5.4 모델을 지정한 Codex 설정](/assets/images/posts/codex-worker-model-settings.png)

*코딩·리팩터링·리뷰·테스트 워커의 모델을 나눠 설정한 화면*

## 가장 놀란 건 속도

가장 놀란 건 속도.

너무 빠르게 구현해 주는 게 신세계였습니다.

한 달 써보니 더 이상 클로드 코드로 돌아갈 수 없었습니다. 물론 회사 업무에는 아직도 클로드 코드를 써야 하긴 합니다만, 이제는 Visual Studio GitHub Copilot에서도 GPT-5.5 모델을 선택해서 씁니다.

**클로드 코드 대비 크게 단점은 없는 데다가, 속도도 빠르고 코딩 퀄리티도 괜찮고.**

예전에 프로젝트에서 클로드 코드가 계속 헤매면서 여러 번 재시도해도 해결하지 못하던 버그가 있었는데, 코덱스 GPT-5.5가 단 한 번의 시도만에 해결했습니다. 그 이후로는 개인 프로젝트를 코덱스 GPT-5.5만 사용해서 진행하고 있고요.

LazyDaddy, JustListen - Digital Detox 앱을 출시하고 웹페이지도 간단히 다 만들었습니다.

## 모바일 Remote와 이미지 생성

게다가 **GPT 모바일 앱의 Remote 기능으로 코덱스에서 작업한 것을 모바일에서 계속 확인하고 이어서 진행**할 수 있어 너무 좋아요. 그전에는 구글 데스크톱 같은 것을 썼는데 많이 불편했거든요. 아직도 클로드 코드는 이 기능을 지원하지 않지 않나요?

클로드 코드를 쓸 때 너무 불편해서 앱을 하나 만들까 하는 생각도 들더라고요. 금방 지원할 것 같아 시도하지는 않았습니다만.

**또 다른 장점은 GPT의 이미지 기능**이 마침 핫하게 올라와서 이걸 사용할 수 있다는 점이에요. 마케팅용 이미지 생성, 앱 아이콘, 디자인 등을 GPT 이미지로 해결했어요.

저처럼 육아하면서 틈틈이 개발하는 경우에는 코덱스 Plus 구독만으로도 전혀 부족하지 않네요. 5시간 사용량 제한에 걸리면 강제 휴식하거나 이미지를 만들면 되니까요.

GPT Plus를 구독하고 계신 분들은 한번 도전해 보세요.

![Codex의 특징과 시작 방법을 요약한 AI 코딩 안내 이미지](/assets/images/posts/codex-ai-coding-overview.png)

*Codex를 활용한 AI 코딩의 특징과 시작 방법 요약*

#코덱스 #Codex #GPT55 #GPT55코딩 #ChatGPT #ClaudeCode #클로드코드 #바이브코딩 #AI코딩 #AI개발 #개발생산성 #프로그래밍 #앱개발 #개인프로젝트 #GithubCopilot #GPT플러스 #AI활용 #개발도구 #생성형AI #코딩AI #개발자동화 #LazyDaddy #JustListen #개발자 #코딩팁
