---
title: While Loop
slug: while-loop
order: 8
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "A while loop keeps running as long as its condition is true."
  - "Always update the variable inside the loop to avoid infinite loops."
  - "A do-while loop always runs at least once."
summary: Practice while loop with a focused Starline Awards programming mission.
seo_title: While Loop | Introduction to JavaScript
seo_description: Learn while loop through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, while loop, beginner javascript, programming practice
---

# While Loop

## Mission: Decision Desk

You are the programmer for the Starline Awards, a live showcase for a rising superstar. This stage helps you teach the Starline Awards engine how to choose the next action. Keep the work in `script.js`: this course is about JavaScript programming, not changing page elements.

Run the code and use the Console as your checkpoint. Read the example, make one focused change, then complete the task.

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
3. log with `console.log()`: `"Countdown from 5: 5,4,3,2,1"`.
4. Verify the program behavior: collatz returns correct step count.
5. Verify the program behavior: logs the mission result.
