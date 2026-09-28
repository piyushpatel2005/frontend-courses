---
title: 'Project: Reliable Score Delivery'
slug: exercise-retry-delivery
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

# Project: Reliable Score Delivery

The preceding demo retried a courier once. Here the score service is a **local deterministic fake API**: `createScoreApi(failures)` returns a function that rejects a chosen number of times before accepting a score. It never sends a request.

## Worked example

A separate retry loop stops once a local operation succeeds:

```javascript
async function repeatUntilReady(action, limit) {
  for (let attempt = 1; attempt <= limit; attempt++) {
    try { return await action(); }
    catch (error) { if (attempt === limit) throw error; }
  }
}
// An action that rejects once then succeeds would be called twice.
```

## Your Tasks

1. Write async `deliverScore(api, score, maxAttempts)` to return `api(score)`’s result on success. Assume a whole-number attempt budget.
2. Retry rejected calls sequentially, stopping at the first success or after `maxAttempts` calls.
3. After all attempts fail, throw the last original error without calling the API again.
4. Reject a zero attempt budget with `Error("No attempts allowed")` without calling the API.
5. Implement `reportDelivery()` with `createScoreApi(2)`, score `87`, and three attempts. Log `Score 87 saved after 3 attempts`. The starter calls it.

## Broadcast complete

You can coordinate dependent requests, preserve partial results, and stop retries safely. The quiz checks these decisions.
