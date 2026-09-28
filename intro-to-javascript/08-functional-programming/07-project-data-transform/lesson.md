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

Analyze a product inventory dataset in `script.js` by selecting in-stock items, sorting expensive ones, and totaling inventory value. The previous lesson used recursion for nested inputs; this flat list is a better fit for array methods.

## Worked example

```javascript
const books = [
  { title: "Orbit", available: true },
  { title: "Harbor", available: false }
];
const labels = books.filter((book) => book.available).map((book) => book.title);
console.log(labels);
```

## Your Tasks

1. Compute `inStockItems` by filtering for positive stock.
2. Compute `expensiveItems` as names priced at least $300, in descending price order.
3. Complete `totalValue(items)` to sum each price multiplied by stock.
4. Complete `byCategory(items)` to group all records into category-keyed arrays.
5. Log the standalone in-stock count from `inStockItems`.
6. Log the standalone top-products line from `expensiveItems`.
7. Log the standalone total-value line from `totalValue(inventory)`.
