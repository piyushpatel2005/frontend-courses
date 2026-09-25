---
title: Break and Continue
slug: break-continue
order: 9
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use `break` to exit the loop immediately when the condition is met."
  - "Use `continue` to skip the current iteration and move to the next."
  - "`continue` is useful for filtering values while looping."
summary: Practice break and continue with a focused Starline Awards programming mission.
seo_title: Break and Continue | Introduction to JavaScript
seo_description: Learn break and continue through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, break and continue, beginner javascript, programming practice
---

# Break and Continue

## Mission: Decision Desk

You are the programmer for the Starline Awards, a live showcase for a rising superstar. This stage helps you teach the Starline Awards engine how to choose the next action. Keep the work in `script.js`: this course is about JavaScript programming, not changing page elements.

Run the code and use the Console as your checkpoint. Read the example, make one focused change, then complete the task.

Two special statements let you control loop execution mid-flight.

## `break` — exit the loop early

```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i); // 0 1 2 3 4
}
```

Useful when you have found what you were looking for and don't need to continue.

## `continue` — skip to the next iteration

```javascript
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i); // 0 1 3 4
}
```

## Your Task

1. Write a function `firstNegative(numbers)` that returns the **first negative number** in the array, or `null` if there isn't one. Use `break` to stop as soon as you find it.
2. Write a function `positiveOnly(numbers)` that returns a new array containing only positive numbers (> 0). Use `continue` to skip non-positive values.
3. Call both with `[-5, 3, -2, 8, -1]` and log with `console.log()`: `"First negative: -5 | Positives: 3,8"`.
4. Verify the program behavior: positiveOnly returns only positive numbers.
5. Verify the program behavior: logs the mission result.
