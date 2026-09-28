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

The reporting desk needs to summarize employee records. Run `script.js` and inspect the Console; the three array methods here accept callback functions, building on the previous lessons.

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

## Your Tasks

1. Compute `engineeringNames` with `filter` and `map` to retain the Engineering names.
2. Compute `avgEngineerSalary` with `filter` and `reduce`, rounded to the nearest integer.
3. Compute `salaryReport` for all employees with `map` and `toLocaleString()` for salaries.
4. Log the standalone Engineering names and rounded average summary from the computed values.
