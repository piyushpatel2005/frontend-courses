---
title: Project - Data Transform Pipeline
slug: project-data-transform
order: 7
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Chain: `data.filter(...).map(...).reduce(...)` for clean pipelines."
  - "Use `sort()` with a comparator to sort by a numeric field."
  - "Group using `reduce`: accumulate into an object keyed by category."
summary: Practice project - data transform pipeline with a focused Starline Awards programming mission.
seo_title: Project - Data Transform Pipeline | Introduction to JavaScript
seo_description: Learn project - data transform pipeline through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, project - data transform pipeline, beginner javascript, programming practice
---

# Project — Data Transform Pipeline

## Mission: Chart Analytics

You are the programmer for the Starline Awards, a live showcase for a rising superstar. This stage helps you transform chart data with focused functions instead of tangled steps. Keep the work in `script.js`: this course is about JavaScript programming, not changing page elements.

Run the code and use the Console as your checkpoint. Read the example, make one focused change, then complete the task.

Apply your functional programming skills to analyze a product inventory dataset.

## Dataset

```javascript
const books = [
  { title: "Orbit", available: true },
  { title: "Harbor", available: false }
];
const labels = books.filter((book) => book.available).map((book) => book.title);
console.log(labels);
```

## Your Task

1. `inStockItems` — array of items with `stock > 0`.
2. `expensiveItems` — array of item names with `price >= 300`, sorted by price descending.
3. `totalValue(items)` — returns the total inventory value: `sum of (price * stock)` for all items.
4. `byCategory(items)` — returns an object grouping items by category: `{ Electronics: [...], Furniture: [...] }`.
5. Render to `#output`:
6. Verify the program behavior: logs the mission result.
7. Verify the program behavior: logs the mission result.

## Chart Analytics complete

You can build predictable data pipelines from small transformations. Take the section quiz, then turn those ideas into reusable object blueprints.
