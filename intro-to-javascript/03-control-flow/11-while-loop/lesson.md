---
title: While Loop
slug: while-loop
order: 11
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "A while loop keeps running as long as its condition is true."
  - "Always update the variable inside the loop to avoid infinite loops."
  - "A do-while loop always runs at least once."
summary: "Trace a countdown and count Collatz changes with while loops."
seo_title: While Loop | Introduction to JavaScript
seo_description: "Trace a countdown and count Collatz changes with while loops."
seo_keywords: javascript, while loop, beginner javascript, programming practice
---

# While Loop


Use a condition to decide whether another iteration is needed, and update the value each time.

Use `while` when you repeat until a condition changes. The countdown task has a known starting value; the later Collatz task repeats until the value reaches 1. Both need an update inside the loop or they would keep running.

## `while` loop

```javascript run
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}
```

The condition is checked **before** each iteration. If `count` starts at 5, the loop body never runs.

## `do...while` loop

The condition is checked **after** each iteration — so the body always runs at least once:

```javascript run
let num = 0;
do {
    console.log(num);
    num++;
} while (num < 3);
```

Here n is the input value local to this function call; you can update it while the loop works. For the countdown, append the current number with `result.push(n)` before decreasing n. Stop before appending 0. A start of 0 should skip the body entirely and return the empty result array.

For Collatz, use positive whole-number inputs; this exercise tests only 1, 2, and 6. Starting at 6 gives `6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1`. Count the eight changes, not the nine values. A start of 1 needs zero changes. This exercise does not claim that every possible starting number finishes.

`n !== 1` means “n is not exactly 1.” Inside the loop, `n % 2 === 0` selects the even case. Use the `if / else` you already know, and increment the step counter once after either branch. Avoid testing zero or negative Collatz inputs: they are outside this function's intended input range and may not finish.

Edit `script.js`, Run to inspect the supplied probes, and Submit to check the tasks.

## Your Tasks

1. Implement `countdown(n)` with `while`, collecting integers from n down to 1. Return an empty array for 0; the supplied line should show `Countdowns: 3,2,1 | 1 | []`.
2. Implement `collatz(n)` with `while`, counting each change until n reaches 1. Halve even n; otherwise triple n and add 1. The supplied step counts should be `0,1,8`.
3. Log `Countdown from 5: 5,4,3,2,1` from a call to `countdown(5)`.
