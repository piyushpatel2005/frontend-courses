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
---

# map, filter, and reduce

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

Given:

```javascript
const employees = [
    { name: "Alice",  dept: "Engineering", salary: 95000 },
    { name: "Bob",    dept: "Marketing",   salary: 72000 },
    { name: "Carol",  dept: "Engineering", salary: 108000 },
    { name: "Dave",   dept: "Marketing",   salary: 68000 },
    { name: "Eve",    dept: "Engineering", salary: 120000 }
];
```

1. `engineeringNames` — an array of names of employees in `"Engineering"` (use `filter` + `map`).
2. `avgEngineerSalary` — the average salary of Engineering employees (use `filter` + `reduce`), rounded to the nearest integer.
3. `salaryReport` — an array of strings like `"Alice: $95,000"` for all employees (use `map` + `toLocaleString`).
4. Display in `#output`: `"Engineers: Alice,Carol,Eve | Avg salary: $107,667"`.
