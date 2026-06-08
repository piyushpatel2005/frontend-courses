---
title: Array Search and Slice
slug: array-search-slice
order: 3
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use slice(1, 4) to get the middle three values from a five-item array."
  - "Use concat() to join the sliced array with [10, 11]."
---

# Array Search and Slice

Some array methods return new arrays instead of changing the original. This lesson uses slice() and concat() to practice that non-mutating pattern.

## Example

```javascript
const numbers = [1, 2, 3, 4, 5];
const middle = numbers.slice(1, 4);
const combined = middle.concat([10, 11]);
```

## Your Task

1. Create middleNumbers by slicing [1, 2, 3, 4, 5] so it contains [2, 3, 4].
2. Create combinedNumbers by concatenating [10, 11] and display [2,3,4,10,11] in #output.
