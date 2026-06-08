---
title: While Loop
slug: while-loop
order: 4
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "A while loop keeps running as long as its condition is true."
  - "Always update the variable inside the loop to avoid infinite loops."
  - "A do-while loop always runs at least once."
---

# While Loop

Use `while` when you do not know ahead of time how many iterations you need.

## `while` loop

```javascript
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}
```

The condition is checked **before** each iteration. If `count` starts at 5, the loop body never runs.

## `do...while` loop

The condition is checked **after** each iteration — so the body always runs at least once:

```javascript
let num = 0;
do {
    console.log(num);
    num++;
} while (num < 3);
```

## Your Task

1. Write a function `countdown(n)` that returns an array containing numbers from `n` down to `1`, using a `while` loop. For example, `countdown(5)` → `[5, 4, 3, 2, 1]`.
2. Write a function `collatz(n)` that returns the number of steps to reach `1` using the Collatz sequence:
   - If `n` is even: `n = n / 2`
   - If `n` is odd: `n = 3 * n + 1`
3. Display in `#output`: `"Countdown from 5: 5,4,3,2,1"`.
