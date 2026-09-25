---
title: Array Reduce, Some, and Every
slug: array-reduce-some-every
order: 13
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use reduce() to total the numbers into one value."
  - "Use some() and every() to answer yes-or-no questions about the array."
summary: Practice array reduce, some, and every with a focused Starline Awards programming mission.
seo_title: Array Reduce, Some, and Every | Introduction to JavaScript
seo_description: Learn array reduce, some, and every through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, array reduce, some, and every, beginner javascript, programming practice
---

# Array Reduce, Some, and Every

## Mission: Setlist Vault

You are the programmer for the Starline Awards, a live showcase for a rising superstar. This stage helps you organize a superstar's songs, venues, and tour moments as ordered collections. Keep the work in `script.js`: this course is about JavaScript programming, not changing page elements.

Run the code and use the Console as your checkpoint. Read the example, make one focused change, then complete the task.

Some array methods return one combined answer instead of a new array. This lesson uses reduce(), some(), and every() together to show three different kinds of summary.

## Example

```javascript
const waterUse = [18, 22, 15];
const totalUse = waterUse.reduce((sum, value) => sum + value, 0);
const hasLowTank = waterUse.some((value) => value < 16);
const allValid = waterUse.every((value) => value >= 0);
console.log(totalUse, hasLowTank, allValid);
```

## Your Task

1. Create total, hasAdult, and allPositive using reduce(), some(), and every() on the example arrays.
2. Log 30 | true | true with `console.log()`.

## Setlist Vault complete

You can store, search, transform, and reshape ordered data. Take the section quiz, then add named facts with objects.
