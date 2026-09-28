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

A list scan can stop at the first match or skip entries that should not be collected.

Two statements change a loop while it runs: `break` exits the loop, while `continue` skips only the current iteration. The task uses an array as an input list and a new array as output; use `result.push(value)` to collect accepted numbers. When none is found, return `null` rather than a made-up number.

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

## Your Tasks

1. Implement `firstNegative(numbers)` to return the first negative (using `break`) or `null` when none is found. The provided first-negative probe should print `First from -5,3: -5`.
2. Implement `positiveOnly(numbers)` to return a new array of positive values (skip non-positive values with `continue`). The provided positive probe should print `Positive one: 5`.
3. Log `First cases: -2,null` from `[3,8,-2,-1]` and `[1,2,3]`.
4. Log `Positive cases: 3,8 | empty` from `[-5,3,-2,8,-1]` and `[-1,-2]`.
5. Log `First negative: -5 | Positives: 3,8` using both functions.
