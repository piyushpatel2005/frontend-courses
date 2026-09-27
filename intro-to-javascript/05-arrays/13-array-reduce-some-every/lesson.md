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

The crew needs three quick summaries of its numbers: a total, whether any match a condition, and whether all match one. Use `reduce()`, `some()`, and `every()` in `script.js`.

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

1. Create `total` with `reduce()` on `[5, 10, 15]`.
2. Create `hasAdult` with `some()` for an age of at least 18 in `[12, 17, 21]`.
3. Create `allPositive` with `every()` for values above zero in `[1, 2, 3]`.
4. Log `30 | true | true` on its own line in the Console.

Next, combine those array methods into a restock report before the section quiz.
