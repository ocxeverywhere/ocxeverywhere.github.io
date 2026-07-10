---
title: "[App Development Challenge #2] Claude Code — Managing Token Usage"
description: "How to use Claude Code tokens efficiently through model selection, parallel agents, testing, reviews, and session management."
date: 2026-06-24 21:27:00 +0300
lang: en
categories: [App Development]
tags: [Claude Code, vibe coding, AI coding, AI development, generative AI, app development, Android development, Kotlin, side project, solo development, developer productivity, development automation, unit testing, code review, GitHub, pull requests, ClaudeMD, agent development]
permalink: /en/blog/posts/managing-token-usage-in-claude-code/
author: LazyDaddy
translation_key: claude-code-token-management
---

## Before You Begin — You Do Not Need to Know Everything

Claude Code is an incredibly powerful tool.

It is fine if you have no Android development experience and do not even know what Kotlin is. Just say, "Build me an app that takes a photo of each page in a storybook and reads it to a child in an engaging way," and Claude will create a plan and even recommend which language to use.

Even though I know nothing about Kotlin, Kotlin-based code gets written, and every tool needed for building and deployment gets installed as long as I approve Claude's requests along the way.

## Basic Workflow

Claude Code follows this workflow:

Plan → Generate code → Write tests → Review and revise code → Build → Write PR summary

Another noteworthy point is that the Claude Code desktop app I currently use presents several options and asks for my opinion whenever an important decision needs to be made. Even if a prompt is somewhat vague, Claude asks precise questions first about anything that must be clarified.

## Model Strategy — How to Save Tokens

This is the workflow I currently use:

"Plan creation: Opus 4.8 (top-tier model)"

"Each implementation task: delegated to Sonnet 4.6 (general-purpose model)"

Running the entire process with Opus 4.8 consumes tokens far too quickly. Based on GitHub Copilot, if Sonnet costs 1x tokens, Opus 4.6 costs 3x, while Opus 4.8 costs as much as 7x - 16x (based on GitHub Copilot).

"Token management tip: Combining agents, skills, and Claude.md files appropriately can greatly reduce token usage."

## Parallel Agents — Faster and More Efficient

Claude Code can process tasks in parallel thanks to its agent-based architecture. Instead of handling a single task sequentially, splitting it into parallel work whenever possible produces results much faster.

Using parallel agents does not significantly change the total number of tokens consumed. The key, however, is that you can specify in advance which model each agent will use. For example, you can create a dedicated coding agent and lock it to Sonnet 4.6.

Wondering how to create this agent? Just ask Claude, of course.

"Create a Kotlin coder agent. Use the Sonnet 4.6 model."

Then give it this instruction:

"When a plan is written for this project, run the code agent to write the code."

That alone lays the foundation for running parallel agents and lets you create code while using tokens efficiently.

## Unit Tests — A Protective Barrier Built as a Skill

Whatever the development field, unit tests are essential for future maintenance and code verification. They protect existing behavior from breaking when the code is modified later.

You can turn this into a skill as well.

"Among the uncommitted modified code, write tests where unit tests are needed. Skip overly obvious tests and focus on tests that are essential to this feature. Call the coder agent to write the code."

This prompt creates a skill with a name such as /unitTest. From then on, whether you enter /unitTest

or say, "Write unit tests," test code is automatically written with the Sonnet 4.6 model in the same context.

## Code Review — An Agent Becomes a Fellow Developer

Even in real production development environments, code review is still a process in which multiple developers read and verify modified code line by line. Various opinions about bugs, code style, and logic emerge during this process.

Automating this process with an agent means that code reaches fellow developers in a much cleaner and more organized state from the outset.

Create review agents and Markdown-writing agents based on Sonnet 4.6 in advance, and create a code review skill as well.

"Review and revise the uncommitted modified code. Follow clean code guidelines and avoid code duplication. Use the reviewer agent for the task."

## Build & Phone Installation — One Cable Is Enough

It is best to implement a feature as the smallest functional unit, install it on an actual phone, and test it immediately.

Is installing it on a phone complicated? Not at all. Connect the phone with a cable and simply tell Claude:

"Build it and install it on my phone."

It installs the necessary tools, builds the APK, and puts it on the phone. You do need to enable developer options and debugging on the phone beforehand, but Claude kindly guides you through that as well.

## PR and Branch Management — A Safety Net Against Collapse

Once you complete a feature, it is a good idea to create a Pull Request (PR), summarize what was added, and merge it into the Main branch before developing the next feature.

Vibe coding often involves quickly implementing different ideas and then rolling them back. Without branch management, code that worked well can suddenly become so tangled that it is difficult to repair.

With well-managed branches, however, you can always return to a specific point in the past — the point where everything worked up to a certain feature. Make active use of version control systems such as GitHub.

## Session Management — Always Start Fresh

Once one feature is wrapped up, always open a new Claude Code session before starting the next one. In fact, it is best to start each stage — writing tests, reviewing, building, and creating a PR — in a new session whenever possible.

The lighter the context, the fewer tokens are consumed and the better Claude can focus. Always open a new session or

run /clear.

## Claude.md — A Project Briefing for Claude

Every time you open a new session, Claude consumes tokens by opening code and documents to understand the entire project. To prevent this, create and maintain Claude.md files. You can ask Claude Code to do this too.

"Write Claude.md files for this project. Do not put everything in a single document; break it down into multiple detailed files. Use the Markdown-writing skill to write them."

Here, the skill is a Markdown-writing skill, and it calls a Markdown-writing agent.

With detailed Claude.md files, Claude can quickly read only the documents needed for a particular feature and start the session with a light context. As more features are added, it is a good idea to update Claude.md as well.

Ultimately, using Claude Code well means knowing what to ask Claude to do.

And Claude is also the one that teaches you how.

#ClaudeCode #VibeCoding #AICoding #AIDevelopment #GenerativeAI #AppDevelopment #AndroidDevelopment #AndroidAppDevelopment #Kotlin #SideProject #SoloDevelopment #DeveloperProductivity #DevelopmentAutomation #UnitTesting #CodeReview #GitHub #PRManagement #DevelopmentLog #AppLaunch #PlayStore #ClaudeMD #AgentDevelopment
