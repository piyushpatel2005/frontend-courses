---
title: 'Demo: Retry a Local Delivery'
slug: retry-local-delivery
order: 9
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Retry a deterministic offline delivery until it succeeds or its budget runs
  out.
seo_title: 'Demo: Retry a Local Delivery | Introduction to JavaScript'
seo_description: Retry a deterministic offline delivery until it succeeds or its budget
  runs out.
seo_keywords:
- javascript
- retry-local-delivery
- async programming
---

# Demo: Retry a Local Delivery

A rehearsal courier temporarily fails on the first handoff. Run this script: `sendCue` rejects once, then succeeds, so the Console prints `Delivered: rehearsal cue | attempts: 2`. The `catch` retries only while the attempt budget remains; it never swallows a permanent failure.

Change `maxAttempts` to `1` and inspect the logged failure, then restore it. The final project applies this pattern to an offline score upload that may keep failing after the retry budget runs out.
