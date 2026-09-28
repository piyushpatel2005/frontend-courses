---
title: Calculate the Event Expense Total
slug: exercise-expense-total
order: 6
language: javascript
lesson_type: coding
summary: Convert text prices and calculate grouped per-person costs.
seo_title: Calculate the Event Expense Total | JavaScript Coding Exercise
seo_description: Compute a grouped event expense from numeric strings and a one-time fee without string concatenation.
seo_keywords: javascript expense exercise, Number strings, arithmetic precedence
hints:
  - Inspect the intermediate values in the Console before changing the final line.
---

# Calculate the Event Expense Total

The preceding expense demo converted text prices and separated per-night costs from a one-time fee. Now an event team must price three guests: admission is `"18"` per guest, refreshments are `"4"` per guest, and a one-time service fee is `"6"`. The total should be 72.

A different supply order follows the same shape:

```javascript
const pens = Number("3");
const folders = Number("2");
const kits = 4;
const delivery = Number("5");
console.log((pens + folders) * kits + delivery); // 25
```

## Your Tasks

1. Convert `admissionText` with `Number()` into `admission`; the provided probe will log `admission: 18 (number)`.
2. Convert `refreshmentText` with `Number()` into `refreshment`; the provided probe will log `refreshment: 4 (number)`.
3. Convert `feeText` with `Number()` into `fee`; the provided probe will log `fee: 6 (number)`.
4. Log the per-guest sum of `admission` and `refreshment` as `per guest: 22`.
5. Calculate numeric `totalExpense` by multiplying the grouped per-guest sum by `guests`, then adding `fee`; the provided probe will log `expense total: 72`.
