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

Use a condition to decide whether another iteration is needed, and update the value each time.

Use `while` when you repeat until a condition changes. The countdown task has a known starting value; the later Collatz task repeats until the value reaches 1. Both need an update inside the loop or they would keep running.

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

## Your Tasks

1. Implement `countdown(n)` using `while` to return the integers from n to 1 in an array. The provided one-item probe should print `Countdown one: 1`.
2. Implement `collatz(n)` using `while` to count steps until 1 (even: halve; odd: triple and add 1). The provided one-item probe should print `Collatz one: 0`.
3. Log `Countdown three: 3,2,1` using `countdown(3)`.
4. Log `Collatz six: 8` using `collatz(6)`.
5. Log `Countdown from 5: 5,4,3,2,1`.
