---
title: map, filter, and reduce
slug: map-filter-reduce
order: 3
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "`map` transforms — returns a new array of the same length."
  - "`filter` selects — returns a new array that is shorter or equal."
  - "`reduce` folds — returns a single value (not an array)."
summary: Practice map, filter, and reduce with a focused Starline Awards programming mission.
seo_title: map, filter, and reduce | Introduction to JavaScript
seo_description: Learn map, filter, and reduce through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, map, filter, and reduce, beginner javascript, programming practice
---

# map, filter, and reduce

## Mission: Chart Analytics

You are the programmer for the Starline Awards, a live showcase for a rising superstar. This stage helps you transform chart data with focused functions instead of tangled steps. Keep the work in `script.js`: this course is about JavaScript programming, not changing page elements.

Run the code and use the Console as your checkpoint. Read the example, make one focused change, then complete the task.

These three methods are the workhorses of functional JavaScript. Chain them together for expressive data pipelines.

## Combining all three

```javascript
const orders = [
    { product: "Book", price: 12, qty: 2 },
    { product: "Pen",  price: 1,  qty: 10 },
    { product: "Bag",  price: 35, qty: 1 }
];

const total = orders
    .filter(o => o.qty > 1)                   // keep multiple-quantity orders
    .map(o => o.price * o.qty)                // calculate line total
    .reduce((sum, lineTotal) => sum + lineTotal, 0); // sum up

console.log(total); // 34 (12*2 + 1*10 = 24 + 10)
```

## Your Task

1. `engineeringNames` — an array of names of employees in `"Engineering"` (use `filter` + `map`).
2. `avgEngineerSalary` — the average salary of Engineering employees (use `filter` + `reduce`), rounded to the nearest integer.
3. `salaryReport` — an array of strings like `"Alice: $95,000"` for all employees (use `map` + `toLocaleString`).
4. log with `console.log()`: `"Engineers: Alice,Carol,Eve | Avg salary: $107,667"`.
