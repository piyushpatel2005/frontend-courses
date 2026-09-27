---
title: 'Project: Resilient Awards Feed'
slug: exercise-settled-bulletin
order: 8
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Aggregate independent offline award feeds with Promise.allSettled despite
  partial failures.
seo_title: 'Project: Resilient Awards Feed | Introduction to JavaScript'
seo_description: Aggregate independent offline award feeds with Promise.allSettled
  despite partial failures.
seo_keywords:
- javascript
- exercise-settled-bulletin
- async programming
---

# Project: Resilient Awards Feed

The preceding demo kept successful rehearsal desks even when one failed. The award feed must do the same with independent offline providers. `getFeed(name)` is a deterministic local fixture; it never calls a network endpoint. Keep the provider input order in the final report.

## Worked example

A small independent check shows how allSettled keeps successes even when a task rejects:

```javascript
async function checkTasks() {
  const outcomes = await Promise.allSettled([
    Promise.resolve("poster ready"),
    Promise.reject(new Error("printer offline"))
  ]);
  console.log(outcomes.map(item => item.status).join(", ")); // fulfilled, rejected
}
checkTasks();
```

## Your Tasks

1. Write async `compileFeeds(names)` to start every `getFeed` request together and await all outcomes with `Promise.allSettled`.
2. Return `{ headlines, failed }`, collecting fulfilled headline strings in input order and rejected provider names in input order.
3. Implement `reportFeeds()` to log `Headlines: Stage ready, Votes counted | failed: press` for stage, press, and voting. The starter calls it on startup.
