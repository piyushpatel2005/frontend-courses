---
title: Project - Data Transform Pipeline
slug: project-data-transform
order: 5
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Chain: `data.filter(...).map(...).reduce(...)` for clean pipelines."
  - "Use `sort()` with a comparator to sort by a numeric field."
  - "Group using `reduce`: accumulate into an object keyed by category."
---

# Project — Data Transform Pipeline

Apply your functional programming skills to analyze a product inventory dataset.

## Dataset

```javascript
const inventory = [
    { id: 1, name: "Laptop",     category: "Electronics", price: 999,  stock: 15 },
    { id: 2, name: "Desk Chair", category: "Furniture",   price: 299,  stock: 8  },
    { id: 3, name: "Headphones", category: "Electronics", price: 149,  stock: 0  },
    { id: 4, name: "Bookshelf",  category: "Furniture",   price: 189,  stock: 12 },
    { id: 5, name: "Webcam",     category: "Electronics", price: 79,   stock: 25 },
    { id: 6, name: "Monitor",    category: "Electronics", price: 549,  stock: 6  }
];
```

## Your Task

1. `inStockItems` — array of items with `stock > 0`.
2. `expensiveItems` — array of item names with `price >= 300`, sorted by price descending.
3. `totalValue(items)` — returns the total inventory value: `sum of (price * stock)` for all items.
4. `byCategory(items)` — returns an object grouping items by category: `{ Electronics: [...], Furniture: [...] }`.
5. Render to `#output`:
   - `<p id="in-stock-count">X items in stock</p>`
   - `<p id="top-products">Top products: Laptop, Monitor</p>` (expensive items by name)
   - `<p id="total-value">Total value: $X</p>`
