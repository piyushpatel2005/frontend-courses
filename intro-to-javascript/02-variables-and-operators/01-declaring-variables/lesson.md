---
title: Declaring Variables
slug: declaring-variables
order: 1
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use const for the food because it does not change."
  - "Use let for the number because you need to reassign it."
summary: Practice declaring variables with a focused Starline Awards programming mission.
seo_title: Declaring Variables | Introduction to JavaScript
seo_description: Learn declaring variables through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, declaring variables, beginner javascript, programming practice
---

# Declaring Variables

## Mission: Scoreboard Engine

Start by naming a fixed value and a value you can update. This task uses a food label and a favorite number rather than a scoreboard.

Variables give names to values so you can reuse them. `const` prevents reassignment of a name; `let` permits it. The example's `+= 2` is shorthand for `returnedBooks = returnedBooks + 2`. In your task, start at 5 and then assign 8 rather than adding 8.

## Example

```javascript
const sectionLabel = "History";
let returnedBooks = 4;
returnedBooks += 2;
console.log(`${sectionLabel}: ${returnedBooks}`);
```

## Your Task

1. Set `favoriteFood` to `"tacos"`; the provided probe will log `food: tacos`.
2. Set the initial `favoriteNumber` to `5`; the provided probe will log `initial number: 5`.
3. Update `favoriteNumber` to `8`; the provided probe will log `updated number: 8`.
4. Log `tacos | 8` on its own line using both variables.
