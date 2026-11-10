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
summary: "Name a fixed food label and update a favorite number in order."
seo_title: Declaring Variables | Introduction to JavaScript
seo_description: "Name a fixed food label and update a favorite number in order."
seo_keywords: javascript, declaring variables, beginner javascript, programming practice
---


Start by naming a fixed value and a value you can update. This task uses a food label and a favorite number rather than a scoreboard.

Variables give names to values so you can reuse them. `const` prevents reassignment of a name; `let` permits it. The example's `+= 2` is shorthand for `returnedBooks = returnedBooks + 2`. In your task, start at 5 and then assign 8 rather than adding 8.

A declaration introduces a name once. A later assignment uses that name without repeating `let`: writing `returnedBooks = 9` replaces its current value. By contrast, `returnedBooks += 2` reads the old value, adds 2, then stores the result.

The initial and updated probes sit on opposite sides of your assignment. They record the value at those two moments; changing the number later does not rewrite an earlier Console line.

## Example

```javascript run
const sectionLabel = "History";
let returnedBooks = 4;
returnedBooks += 2;
console.log(`${sectionLabel}: ${returnedBooks}`);
```

Edit `script.js`, Run to inspect each checkpoint, then Submit to check the completed tasks. The supplied probes do not need rewriting.

## Your Task

1. Set `favoriteFood` to `"tacos"`; the provided probe will log `food: tacos`.
2. Set the initial `favoriteNumber` to `5`; the provided probe will log `initial number: 5`.
3. Update `favoriteNumber` to `8`; the provided probe will log `updated number: 8`.
4. Log `tacos | 8` on its own line using both variables.
