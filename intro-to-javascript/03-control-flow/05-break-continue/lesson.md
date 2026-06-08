---
title: Break and Continue
slug: break-continue
order: 5
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use `break` to exit the loop immediately when the condition is met."
  - "Use `continue` to skip the current iteration and move to the next."
  - "`continue` is useful for filtering values while looping."
---

# Break and Continue

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
3. Call both with `[-5, 3, -2, 8, -1]` and display in `#output`: `"First negative: -5 | Positives: 3,8"`.
