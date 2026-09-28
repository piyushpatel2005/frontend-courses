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

This section teaches a script to choose between outcomes. Keep the work in `script.js` and check results in the Console.

Conditional statements let your program make decisions. `score >= 90` asks whether a number is at least 90 and yields `true` or `false`. JavaScript tests branches from top to bottom; only the first matching branch runs. Put the highest threshold first so 95 does not get classified by a lower one.

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

## A named calculation

The task asks for a function even though the dedicated Functions module comes next. For now, read `function name(input) { ... }` as a reusable calculation: the input takes a different value on each call, and `return` sends back its result. This separate example uses a different rule:

```javascript
function accessLevel(age) {
  if (age >= 18) return "adult";
  return "minor";
}
console.log(accessLevel(20)); // adult
```

Use the same function shape to classify scores, but use `else if` for the intermediate grade thresholds. The shorthand `? :` appears later; you do not need it here.

## Your Tasks

1. Implement `getGrade(score)` to return A, B, C, D, or F for the 90/80/70/60 cutoffs (otherwise F). The provided `Grade 95` probe should print `Grade 95: A`.
2. Log `Grade set: A,B,C,D,F` by calling `getGrade` for 95, 85, 75, 65, and 50.
3. Log `Grade boundaries: A,B,D` by calling `getGrade` for 90, 80, and 60.
4. Log `Grade: B` by calling `getGrade(85)`.
