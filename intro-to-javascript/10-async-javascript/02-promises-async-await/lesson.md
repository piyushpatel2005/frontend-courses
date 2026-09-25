---
title: Promises and Async Await
slug: promises-async-await
order: 2
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "A Promise has 3 states: pending, fulfilled, rejected."
  - "Use `resolve(value)` for success and `reject(error)` for failure."
  - "`await` can only be used inside `async` functions."
summary: Practice promises and async await with a focused Starline Awards programming mission.
seo_title: Promises and Async Await | Introduction to JavaScript
seo_description: Learn promises and async await through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, promises and async await, beginner javascript, programming practice
---

# Promises and async/await

## Mission: Live Broadcast

You are the programmer for the Starline Awards, a live showcase for a rising superstar. This stage helps you coordinate delayed score updates without freezing the show. Keep the work in `script.js`: this course is about JavaScript programming, not changing page elements.

Run the code and use the Console as your checkpoint. Read the example, make one focused change, then complete the task.

A **Promise** represents a value that may be available now, later, or never.

## Creating a Promise

```javascript
function getTrailCondition() {
  return Promise.resolve("dry");
}

async function reportCondition() {
  const condition = await getTrailCondition();
  console.log(`Trail: ${condition}`);
}

reportCondition();
```

## Consuming with `.then/.catch`

```javascript
promise
  .then(result => console.log(result))
  .catch(error => console.error(error.message));
```

## `async` and `await`

`async` functions always return a Promise. `await` pauses inside async functions until a Promise settles:

```javascript
async function run() {
    try {
        const result = await promise;
        console.log(result);
    } catch (err) {
        console.error(err.message);
    }
}
```

## Your Task

1. Write a function `delay(ms, value)` that returns a Promise resolving with `value` after `ms` milliseconds.
2. Write an async function `loadMessage()` that:
3. Write an async function `safeDivide(a, b)` that:
4. Run `loadMessage()` and `safeDivide(10, 2)`, then log with `console.log()`: `"HELLO ASYNC | 10/2 = 5"`.
5. Verify the program behavior: logs the mission result.
