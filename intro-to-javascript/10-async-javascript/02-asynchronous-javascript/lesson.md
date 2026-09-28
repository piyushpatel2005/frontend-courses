---
title: 'Exercise: Asynchronous JavaScript'
slug: asynchronous-javascript
order: 2
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Schedule a callback that records broadcast cues in actual execution order.
seo_title: 'Exercise: Asynchronous JavaScript | Introduction to JavaScript'
seo_description: Schedule a callback that records broadcast cues in actual execution order.
seo_keywords: javascript, asynchronous, javascript, asynchronous programming
---

# Exercise: Asynchronous JavaScript

The preceding demo showed the timer cue after the immediate cue. Build a separate broadcast sequence. `setTimeout(callback, 0)` schedules work; it cannot interrupt the current script. Return a `Promise` so callers can wait for the timer: `new Promise(resolve => { ...; resolve(value); })` creates a value that completes when `resolve` is called. The next demo unpacks Promises and `await` further. This script-only offline preview captures delayed Console logs without a DOM task or network.

## Worked example

A separate event schedule demonstrates why immediate code finishes before a timer:

```javascript
const cues = ["Open"];
setTimeout(() => {
  cues.push("Bell");
  console.log(cues.join(" → ")); // Open → Close → Bell
}, 0);
cues.push("Close");
```

## Your Tasks

1. Return a Promise from `runBroadcast()`. After synchronous `Start` and `End`, append `Delayed` in a zero-delay timer and resolve with the array.
2. Inside that callback, log `Start | End | Delayed` with `console.log()`.
