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
summary: "Turn the supplied inventory into a short report. This is a flat list, so array methods are a better fit than the recursion you just practiced."
seo_title: Project - Data Transform Pipeline | Introduction to JavaScript
seo_description: "Turn the supplied inventory into a short report. This is a flat list, so array methods are a better fit than the recursion you just practiced."
seo_keywords: javascript, project - data transform pipeline, beginner javascript, programming practice
---

# Project — Data Transform Pipeline

Turn the supplied inventory into a short report. This is a flat list, so array methods are a better fit than the recursion you just practiced.

For expensive products, filter first, sort the retained objects, then map them to names. A numeric sort callback receives two items. Returning `b.price - a.price` puts larger prices first. `sort` changes the array it sorts; sorting the new array returned by `filter` leaves the original inventory order alone.

Grouping uses an object as the reduce accumulator instead of a number. Start from `{}`. For each record, create an array at `groups[item.category]` if it does not exist, push the record into it, and return `groups` for the next callback. Group every record, including out-of-stock products. Total value also uses all records; an item with zero stock contributes zero.

## Worked example

```javascript run
const books = [
  { title: "Orbit", available: true },
  { title: "Harbor", available: false }
];
const labels = books.filter((book) => book.available).map((book) => book.title);
console.log(labels);
```

Edit `script.js`, then use **Run** to inspect the supplied checkpoints. Use **Submit** to check your tasks in order. Keep the supplied probes; change only the requested definitions and final logs.

## Your Tasks

1. Filter `inventory` into `inStockItems`, keeping positive stock.
2. Build `expensiveItems` as names priced at least $300, sorted by descending price.
3. Use `reduce` in `totalValue(items)` to sum price times stock, starting from 0.
4. Group every record in `byCategory(items)` into arrays keyed by category, using an object accumulator.
5. Log the in-stock count as `5 items in stock`, using `inStockItems.length`.
6. Log `Top products: Laptop, Monitor` from `expensiveItems`.
7. Log `Total value: $24,914` from `totalValue(inventory)`, using `toLocaleString("en-US")`.
