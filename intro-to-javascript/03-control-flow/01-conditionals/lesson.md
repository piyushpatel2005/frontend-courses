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
summary: Practice conditionals with a focused Starline Awards programming mission.
seo_title: Conditionals | Introduction to JavaScript
seo_description: Learn conditionals through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, conditionals, beginner javascript, programming practice
---

# Conditionals

## Mission: Decision Desk

You are the programmer for the Starline Awards, a live showcase for a rising superstar. This stage helps you teach the Starline Awards engine how to choose the next action. Keep the work in `script.js`: this course is about JavaScript programming, not changing page elements.

Run the code and use the Console as your checkpoint. Read the example, make one focused change, then complete the task.

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
2. Call `getGrade(85)` and display the result in `#output` as `"Grade: B"`.
3. Verify the program behavior: boundary values are handled correctly.
4. Verify the program behavior: logs the mission result.
