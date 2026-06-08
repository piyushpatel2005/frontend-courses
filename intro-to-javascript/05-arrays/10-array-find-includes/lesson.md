---
title: Array Find and Includes
slug: array-find-includes
order: 10
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use find() when you want the matching value itself."
  - "Use includes() when you only need a true-or-false answer."
---

# Array Find and Includes

Search methods answer slightly different questions. This lesson pairs find() with includes() so learners practice both finding a matching item and checking simple membership.

## Example

```javascript
const prices = [15, 40, 75, 20];
const firstLargePrice = prices.find((price) => price > 50);
const hasForty = prices.includes(40);
```

## Your Task

1. Create firstLargePrice from [15, 40, 75, 20] using find() so it stores 75.
2. Create hasForty with includes() and display 75 | true in #output.
