---
title: "Build a Resilient Awards Bulletin"
slug: build-resilient-bulletin
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


An awards bulletin combines independent providers. `getFeed(name)` is a supplied offline fixture that settles on a timer. It never contacts an endpoint. `stage`, `voting`, and `weather` succeed; `press` and unknown names reject.

Start the requests with `names.map(name => globalThis.getFeed(name))`. Pass that array of Promises straight to `Promise.allSettled`, then await its outcome array. Avoid awaiting each request inside a loop: that would prevent their waiting periods from overlapping.

When reading outcomes, index `i` still refers to `names[i]`, even when a later request finishes first. A fulfilled outcome supplies its headline through `value`; a rejected outcome tells you which input name to record. Empty input should return two empty arrays.

## Your Tasks

1. In async `compileFeeds(names)`, start every fixture call together and await all outcomes with `Promise.allSettled`, including rejections.
2. Return a report with a `headlines` array containing every fulfilled headline in input order.
3. Add a `failed` array to that report containing every rejected provider name in input order.
4. Implement `reportFeeds()` to await `globalThis.compileFeeds(["stage", "press", "voting"])` and log the returned arrays as `Headlines: Stage ready, Votes counted | failed: press`.

Edit `script.js`, **Run** to inspect the Console, then **Submit**. The reporter's startup call is supplied. Task 1 can pass before you return a report; tasks 2 and 3 check the report without requiring any log. The final check supplies its own report to test your formatting separately.

This policy keeps partial successes but does not retry failures. The next pair adds a bounded retry loop for a single operation.
