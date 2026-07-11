---
title: "[Includes Advertising] A Game Recording Tool for My Son's YouTube Channel"
description: "The story of building a free Windows recording app for my son, who uploads gaming videos, and releasing it on the Microsoft Store."
last_modified_at: 2026-07-08 09:00:00 +0300
image:
  path: /assets/img/social/default-card.png
  alt: "LazyDaddy app icon and brand name"
date: 2026-07-08 07:23:00 +0300
lang: en
categories: [LazyDaddy Game Recording]
tags: [game recording, game recording software, screen recording, screen capture, game capture, free software, free game recording, Windows app, Microsoft Store, MSIX, Roblox, RIVALS, YouTube gaming, gaming YouTuber, vibe coding, AI development, Codex, Claude Code, GitHub Copilot, LazyDaddy]
permalink: /en/blog/posts/game-recording-tool-for-my-son/
author: LazyDaddy
translation_key: game-recording-tool-for-my-son
---

This page is part of the Coupang Partners affiliate program. I may receive a commission on purchases made through the links on this page.

My son absolutely loves games.

These days, he mostly plays Roblox. RIVALS is his favorite, and he is a light user who only makes the occasional small in-game purchase with gift cards he receives for his birthday.

RIVALS is a first-person shooter featuring Roblox characters, and he plays on a team with his friends every day. He even manages to land perfectly timed kills with this Chun-sik mouse that we brought from Korea, which became a huge hit with his classmates.

{% include link-preview.html url="https://link.coupang.com/a/fdyeSLJCdE" title="Kakao Friends Wireless Bread Chun-sik Mouse" description="The wireless mouse used for Roblox gameplay in this story." image="/assets/images/posts/coupang-mouse.jpg" alt="Chun-sik wireless mouse preview" sponsored=true %}

![Jiun Games YouTube channel celebrating 1,000 subscribers](/assets/images/posts/jiun-game-channel.png)

*The Jiun Games YouTube channel celebrating 1,000 subscribers*

{% include link-preview.html url="https://www.youtube.com/channel/UC2r3Z3jOIA9laB1P8O8sUxg" title="Jiun's Gaming YouTube Channel" description="Watch Roblox gameplay videos created with LazyDaddy Game Recording." image="/assets/images/posts/jiun-game-youtube-preview.png" alt="Black and gold Jiun Game YouTube channel preview" %}

Roblox is also incredibly popular among elementary school students here in Finland, and items like this are popular birthday gifts.

{% include link-preview.html url="https://link.coupang.com/a/fdxK6RDIM8" title="ROBLOX Pencil Case and Gift Merchandise" description="A pencil case gift for children who enjoy Roblox." image="/assets/images/posts/coupang-roblox-case.jpg" alt="Roblox pencil case preview" sponsored=true %}

One day, he created a YouTube account and started uploading gaming videos. They were simply gameplay recordings, with no commentary and without showing his face.

The recording software was paid, so he would use a free trial until it expired, then search for and install another program, and then another. I felt bad watching him go through that, so I started this project to make him a Windows application that could capture video with the basic features he needed.

![Roblox RIVALS gameplay video](/assets/images/posts/roblox-rivals-28k-video.png)

*The Roblox RIVALS gameplay video that caught the algorithm and reached 28K views*

Roblox RIVALS — the video that somehow caught the algorithm and reached 28K views (we still have no idea why it took off)

Once I confirmed that video recording and screenshots worked well, I wanted to distribute the app so that other gamers—not just my son, and especially other elementary school gamers—could use it. I thought it would be best to publish it officially through the trusted Microsoft Store, so I submitted it.

I had originally created an EXE installer, but when I applied for publication, I received feedback that the installer was unsigned and needed improvement. With help from AI, I converted it to MSIX instead. This approach meant it would receive Microsoft's signature, making it more trustworthy, and it was also free.

I submitted v1.0.3, and a few days later I received comments requesting improvements. The manual test results showed that the app's core functionality did not work in a particular environment.

I fixed it, tested it myself, had my son test it in actual use, collected his feedback, improved it, and submitted it for approval again. After repeating this process about three times, the version reached v1.0.10, while the feature set became a little simpler.

![Roblox RIVALS video recorded with LazyDaddy Game Recording and PIP](/assets/images/posts/lazydaddy-game-recording-pip.png)

*A game recording made with the PIP feature in LazyDaddy Game Recording v1.0.8*

A RIVALS YouTube video created with LazyDaddy Game Recording v1.0.8 (with PIP)

With the PIP feature, he can react enthusiastically like the YouTubers he enjoys watching. Perhaps that will help him create more entertaining YouTube videos to share with his friends.

It can get a little noisy sometimes, so a gaming headset like this would be really useful.

{% include link-preview.html url="https://link.coupang.com/a/fdx5HUfYqa" title="OMIIYA Virtual 7.1-Channel USB Gaming Headset" description="A USB headset suitable for game recording and voice reactions." image="/assets/images/posts/coupang-headset.jpg" alt="USB gaming headset preview" sponsored=true %}

Then, at last, I received a notification today that the app had finally been published on the Microsoft Store.

![LazyDaddy Game Recording app listing in the Microsoft Store](/assets/images/posts/microsoft-store-lazydaddy-game-recording.png)

*LazyDaddy Game Recording officially listed in the Microsoft Store*

For now, I plan to keep maintaining this app for free unless our power user raises complaints or requests improvements.

Of course, this program was also developed through AI-assisted vibe coding. In fact, this is the project that I first started in Claude Code. At some point, a feature stopped working, and I failed several times to fix it. I then tried to modify the code with Opus 4.6 while reviewing it in Visual Studio GitHub Copilot, but failed several more times. Codex 5.5 ultimately solved the problem in one shot. (See the previous post for details.)

{% include link-preview.html url="https://blog.naver.com/lazydaddypresent0523/224333733438" title="[App Development Challenge #3] Switching to Codex" description="The earlier development story about solving the recording issue after trying Claude Code and GitHub Copilot." image="/assets/images/posts/game-recording-app.png" alt="LazyDaddy Game Recording app icon" %}

If you are looking for free game recording software, or want an easy way to record games such as Roblox and create YouTube videos, give it a try. I also plan to continue sharing my experience with the Microsoft Store submission process, MSIX packaging, and AI vibe coding with Codex.

For a detailed description of the program or to download it, visit the app site below. (Codex also created this simple app site for me. Initially, I only made a basic page because I needed a privacy policy for the Microsoft Store submission.)

{% include link-preview.html url="https://ocxeverywhere.github.io/LazyDaddy-GameCapture/" title="LazyDaddy Game Recording" description="Explore features and download information for the free Windows game, webcam, and microphone recorder." image="/assets/images/posts/game-recording-app.png" alt="LazyDaddy Game Recording app icon" %}

#GameRecording #GameRecordingSoftware #ScreenRecording #ScreenCapture #GameCapture #FreeSoftware #FreeGameRecording #WindowsApp #MicrosoftStore #MSIX #Roblox #RIVALS #YouTubeGaming #GamingYouTuber #VibeCoding #AIDevelopment #Codex #ClaudeCode #GitHubCopilot #LazyDaddy
