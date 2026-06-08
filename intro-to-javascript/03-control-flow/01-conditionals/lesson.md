---
title: Conditionals
slug: conditionals
order: 1
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use `if (score >= 90)` to check for grade A."
  - "Chain `else if` for each grade boundary."
  - "The final `else` covers any score below 60."
---

# Conditionals

Conditional statements let your program make decisions. JavaScript provides `if`, `else if`, and `else` for branching logic.

## Syntax

```javascript
if (condition) {
    // runs when condition is true
} else if (anotherCondition) {
    // runs when first was false but this is true
} else {
    // runs when none of the above matched
}
```

## Ternary operator — compact one-liner

For a simple true/false choice:

```javascript
let age = 20;
let status = age >= 18 ? "adult" : "minor";
```

## Your Task

1. Write a function `getGrade(score)` that returns a letter grade:
   - `"A"` for score ≥ 90
   - `"B"` for score ≥ 80
   - `"C"` for score ≥ 70
   - `"D"` for score ≥ 60
   - `"F"` for anything below 60
2. Call `getGrade(85)` and display the result in `#output` as `"Grade: B"`.
