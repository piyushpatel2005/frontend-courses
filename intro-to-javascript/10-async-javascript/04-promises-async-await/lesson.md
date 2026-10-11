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

# Exercise: Promises and async/await

Build a delayed broadcast message, then add a division helper that can reject invalid input. The rehearsal demo showed both the successful cue and its rejected empty-cue case.

`delay(ms, value)` must return a Promise. Inside its executor, register a timer whose callback calls `resolve(value)`. Treat `ms` as a nonnegative number in this exercise. The delay is a minimum wait, not an exact appointment.

Use `await` inside an `async` function to obtain a fulfilled value. If the Promise rejects, `await` throws that reason where it appears; a surrounding `try`/`catch` can handle it. Throwing inside `safeDivide` rejects the Promise returned by that async function. It does not throw synchronously to the caller.

The supplied `globalThis` assignments make each helper available to the preview checks. Keep them. Use `globalThis.delay`, `globalThis.loadMessage`, and `globalThis.safeDivide` for the calls shown in the task contracts so the checks can provide controlled inputs independently.

## Your Tasks

1. Implement `delay(ms, value)` to fulfill with `value` only when its `ms` timer runs.
2. Implement async `loadMessage()` to await `globalThis.delay(10, "Hello Async")` and return the received text in uppercase.
3. In async `safeDivide(a, b)`, return the quotient for a nonzero divisor.
4. In the same function, reject zero divisors with `Error("Division by zero")`.
5. Implement `reportBroadcast()` to await `globalThis.loadMessage()` and `globalThis.safeDivide(10, 2)`, then log their results as `HELLO ASYNC | 10/2 = 5`.

Edit `script.js`, **Run** to inspect the Console, then **Submit**. The startup call is supplied and catches errors while you work. Earlier helpers can pass without the final reporting function. Try `safeDivide(9, 0).catch(error => console.log(error.message))` after finishing to observe the rejected path without an unhandled rejection.
