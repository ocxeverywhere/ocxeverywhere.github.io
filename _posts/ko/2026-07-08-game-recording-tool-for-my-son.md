---
title: "[광고포함] 유튜브하는 우리 아들을 위한 게임 영상 캡쳐 툴"
description: "게임 영상을 올리는 아들을 위해 만든 무료 Windows 녹화 앱을 Microsoft Store에 출시하기까지의 이야기입니다."
last_modified_at: 2026-07-08 09:00:00 +0300
image:
  path: /assets/img/social/default-card.png
  alt: "LazyDaddy 앱 아이콘과 브랜드 이름"
date: 2026-07-08 07:23:00 +0300
lang: ko
categories: [LazyDaddy Game Recording]
tags: [게임녹화, 게임녹화프로그램, 화면녹화, 화면캡처, 게임캡처, 무료프로그램, 무료게임녹화, 윈도우프로그램, 마이크로소프트스토어, MSIX, 로블록스, 라이벌, 유튜브게임, 게임유튜버, 바이브코딩, AI개발, 코덱스, 클로드코드, GitHubCopilot, LazyDaddy]
permalink: /blog/posts/game-recording-tool-for-my-son/
author: LazyDaddy
translation_key: game-recording-tool-for-my-son
---

이 페이지는 쿠팡 파트너스 활동의 일환으로, 링크를 통한 구매 시 일정액의 수수료를 제공받을 수 있습니다.

우리 아들은 게임을 무척 좋아한다.

요즘에는 주로 로블록스를 하는데, 그 가운데 라이벌을 아주 좋아하고, 생일선물로 받는 기프티카드로 겨우 소소하게 현질하는 라이트 유저다.

라이벌은 로블록스 캐릭터가 1인칭 슈팅게임을 하는 게임이고, 친구들이랑도 팀플레이를 매일 한다. 한국에서 사와서 반 애들에게 인기만점이었던 이 춘식이 마우스로도 잘만 타이밍 좋게 킬을 한다.

{% include link-preview.html url="https://link.coupang.com/a/fdyeSLJCdE" title="카카오프렌즈 CS 형태 무선 마우스 식빵 춘식" description="로블록스 게임 플레이에 사용한 춘식이 무선 마우스입니다." image="/assets/images/posts/coupang-mouse.svg" alt="춘식이 무선 마우스 미리보기" sponsored=true %}

{% include link-preview.html url="https://www.youtube.com/channel/UC2r3Z3jOIA9laB1P8O8sUxg" title="지운 게임 YouTube 채널" description="LazyDaddy Game Recording으로 만든 로블록스 게임 영상을 확인하세요." image="/assets/images/posts/lazydaddy-youtube-video.jpg" alt="지운 게임 YouTube 채널 미리보기" %}

로블록스는 여기 핀란드 초딩들도 정말 많이 하고, 이런 것들도 생일선물로 인기다.

{% include link-preview.html url="https://link.coupang.com/a/fdxK6RDIM8" title="ROBLOX 필통 로블록스 선물용 굿즈" description="로블록스를 좋아하는 어린이를 위한 필통 굿즈입니다." image="/assets/images/posts/coupang-roblox-case.svg" alt="로블록스 필통 미리보기" sponsored=true %}

어느날 유튜브 계정을 만들더니, 게임영상을 올리고 있는데, 아무소리 없이, 본인 언굴 없이 그냥 플레이 영상만 올리는거다.

그것도 프로그램이 유료라서, 무료로 트라이얼 사용만 해보고는 기간이 종료되면 또 새로운 프로그램 찾아서 깔고, 또 깔고 해서 안쓰러워서 기본적인 기능으로 영상 캡쳐되도록 윈도우용 프로그램 만들어주자고 이 프로젝트를 시작했다.

로블록스 라이벌 - 알고리즘을 제대로 타서 28K 뷰가 나온 영상 (아직도 왜 터졌는지 아무도 모름)

영상과 캡쳐가 잘 되는걸 확인하고는 우리 아들만 아니라, 다른 게이머들 (특히, 우리 초딩 게이머들) 사용할 수 있게 배포하려다보니, 신뢰있는 마이크로소프트 스토어에 정식 등록하면 좋을 것 같아 등록을 해봤다.

인스톨러를 exe로 만들었었는데, 등록 신청을 했더니 인스톨러에 서명이 안되어 있다고 개선하라고 코멘트를 받았다. 이 부분도 AI의 도움을 받아 MSIX로 변환해서 진행하는 게 마이크로소프트의 서명을 받게되어 더 신뢰도가 있고, 무료이기도 해서 이렇게 진행했다.

v1.0.3에서 제출을 했는데, 며칠뒤에 개선사항에 대한 코멘트가 왔다. 매뉴얼 테스트 결과 특정 환경에서 기본 기능이 동작을 안한다는 거였다.

수정하고, 자체 테스트하고, 아들래미 실전 테스트하고 피드백주고 개선하고, 또 승인 제출하고 이 과정을 3번 정도 반복하다보니 v.1.0.10까지 버전은 올라갔고, 기능은 좀 더 단순해졌다.

LazyDaddy Game Recording v1.0.8을 사용해서 제작한 라이벌 유튜브 영상 (PIP 탑재)

PIP기능이 있어서 즐겨보는 유뷰버들처럼 신나게 리액션을 할 수 있게 되어서 좀 더 재미난 유튜브 영상을 친구들과 공유할 수 있지 않을까?

가끔은 좀 시끄러워서 이런 게임용 헤드셋을 쓰면 정말 좋을 것 같다

{% include link-preview.html url="https://link.coupang.com/a/fdx5HUfYqa" title="OMIIYA 가상 7.1채널 USB 게이밍 헤드셋" description="게임 녹화와 음성 리액션에 사용할 수 있는 USB 헤드셋입니다." image="/assets/images/posts/coupang-headset.svg" alt="USB 게이밍 헤드셋 미리보기" sponsored=true %}

그리고는 마침내 오늘 드디어 마이크로소프트 스토어에 등록이 되었다고 알림을 받았다.

이 앱은 우리 파워유저님께서 불만 또는 개선사항을 요구하지 않는한 일단 무료로 계속 유지보수할 계획이다.

물론, 이 프로그램도 AI를 이용한 바이브 코딩으로 개발했고, 사실 이 부분이 클로드 코드에서 처음 시작했다가 어느순간 기능이 동작을 안해서 여러번 고치려다 실패하고, Visual Studio GitHub-Copilot에서 코드 보면서 Opus 4.6으로 수정하려다가 여러번 실패했다가. 코덱스 5.5가 한방에 문제를 해결했던 그 프로젝트다. (자세한 사항은 이전 포스팅 참조)

{% include link-preview.html url="https://blog.naver.com/lazydaddypresent0523/224333733438" title="[앱 개발 도전기 #3] 코덱스로 갈아타기" description="Claude Code와 GitHub Copilot을 거쳐 Codex로 문제를 해결한 이전 개발 기록입니다." image="/assets/images/posts/game-recording-app.png" alt="LazyDaddy Game Recording 앱 아이콘" %}

무료 게임 녹화 프로그램을 찾고 계시거나, 로블록스 같은 게임을 쉽게 녹화해 유튜브 영상을 만들고 싶은 분이라면 한 번 사용해 보세요. 또한 마이크로소프트 스토어 등록 과정이나 MSIX 패키징, AI 바이브 코딩(Codex)을 활용한 개발 경험도 앞으로 계속 공유해 보겠습니다.

프로그램에 대한 상세한 설명 또는 다운로드를 받으려면 아래의 앱 사이트에서 확인 가능합니다. (이 앱 사이트도 코덱스가 간단히 만들어줬다, 처음에는 마이크로소프트 스토어 등록을 위한 개인정보처리방침 때문에 간단한 페이지만 만듦)

{% include link-preview.html url="https://ocxeverywhere.github.io/LazyDaddy-GameCapture/" title="LazyDaddy Game Recording" description="게임·웹캠·마이크를 함께 녹화하는 무료 Windows 앱의 기능과 다운로드 정보를 확인하세요." image="/assets/images/posts/game-recording-app.png" alt="LazyDaddy Game Recording 앱 아이콘" %}

#게임녹화 #게임녹화프로그램 #화면녹화 #화면캡처 #게임캡처 #무료프로그램 #무료게임녹화 #윈도우프로그램 #마이크로소프트스토어 #MSIX #로블록스 #라이벌 #유튜브게임 #게임유튜버 #바이브코딩 #AI개발 #코덱스 #클로드코드 #GitHubCopilot #LazyDaddy
