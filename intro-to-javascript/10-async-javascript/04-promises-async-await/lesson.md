---
title: 'Exercise: Promises and Async Await'
slug: promises-async-await
order: 4
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Create a delayed Promise, await an uppercase message, and reject division by zero.
seo_title: 'Exercise: Promises and Async Await | Introduction to JavaScript'
seo_description: Create a delayed Promise, await an uppercase message, and reject division by zero.
seo_keywords: javascript, promises, async, await, asynchronous programming
---

# Exercise: Promises and Async Await

The preceding rehearsal demo awaited a cue. Build a different broadcast message and division guard. An `async` function always returns a Promise: returning `a / b` fulfills it; `throw new Error("Division by zero")` rejects it. A caller can `await` a fulfillment and catch a rejection. The single `script.js` tab runs in an offline preview and captures delayed Console logs.

## Worked example

A different delayed value can be awaited before changing its text:

```javascript
async function readLabel() {
  const label = await Promise.resolve("garden");
  return label.toUpperCase();
}
readLabel().then(console.log); // GARDEN
```

## Your Tasks

1. Write `delay(ms, value)` returning a Promise that resolves to `value` after `ms` milliseconds.
2. Write `loadMessage()` that awaits `delay(10, "Hello Async")` and returns uppercase text.
3. Write async `safeDivide(a, b)` that resolves to `a / b` when `b` is nonzero.
4. When `b` is zero, reject with `Error("Division by zero")`.
5. Write async `reportBroadcast()` that calls both successful functions and logs `HELLO ASYNC | 10/2 = 5`; call it on startup.
