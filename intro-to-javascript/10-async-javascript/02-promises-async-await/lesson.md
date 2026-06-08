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
---

# Promises and async/await

A **Promise** represents a value that may be available now, later, or never.

## Creating a Promise

```javascript
const promise = new Promise((resolve, reject) => {
    const success = true;
    if (success) resolve("Done");
    else reject(new Error("Failed"));
});
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
   - awaits `delay(10, "Hello Async")`
   - returns the message in uppercase.
3. Write an async function `safeDivide(a, b)` that:
   - returns a rejected Promise with `Error("Division by zero")` when `b === 0`
   - otherwise resolves to `a / b`
4. Run `loadMessage()` and `safeDivide(10, 2)`, then display in `#output`: `"HELLO ASYNC | 10/2 = 5"`.
