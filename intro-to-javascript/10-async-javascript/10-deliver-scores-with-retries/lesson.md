---
title: "Deliver Scores with Retries"
slug: deliver-scores-with-retries
order: 10
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Retry offline score uploads and surface persistent errors without endless attempts.
seo_title: 'Project: Reliable Score Delivery | Introduction to JavaScript'
seo_description: Retry offline score uploads and surface persistent errors without endless attempts.
seo_keywords:
- javascript
- exercise-retry-delivery
- async programming
---


Save a score through a local service that may reject several attempts. `createScoreApi(failures)` returns a fresh offline fixture: it rejects the chosen number of calls, then fulfills with `{ score, attempts }`. Its `calls()` method lets you inspect how often it ran. It never sends a request.

Reuse the demo's sequential loop. `maxAttempts` counts every call, including the first. Return immediately after success. Use `return await api(score)` inside `try` so a rejection reaches your `catch` before you decide whether another attempt is allowed.

Keep the supplied `globalThis` assignments. The reporter calls `globalThis.deliverScore` so its check can provide a result without depending on earlier tasks.

## Your Tasks

1. In async `deliverScore(api, score, maxAttempts)`, return the API's fulfilled result unchanged on the first successful call.
2. Retry rejected calls one at a time, stopping as soon as a call succeeds and never exceeding `maxAttempts` calls.
3. If every allowed call fails, reject with the last original error object.
4. Reject an invalid budget with `Error("No attempts allowed")` before calling the API. A valid budget is a positive integer; use `Number.isInteger(maxAttempts)` and a positive-value check.
5. Implement `reportDelivery()` using `createScoreApi(2)`, score `87`, and three total attempts. Await `globalThis.deliverScore(...)`, then log the returned fields as `Score 87 saved after 3 attempts`.

Edit `script.js`, **Run**, then **Submit**. The supplied startup call handles a rejection while you work. For task 2 you can temporarily leave the exhausted path without a final throw; task 3 adds that behavior. The tests check each milestone separately.

## Broadcast complete

You have scheduled delayed work, awaited dependent results, kept partial successes, and limited retries. All services in this section were offline fixtures. The quiz asks when to choose each pattern.
