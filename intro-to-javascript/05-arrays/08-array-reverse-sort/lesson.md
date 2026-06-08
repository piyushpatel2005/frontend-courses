---
title: Array Reverse and Sort
slug: array-reverse-sort
order: 8
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use a copy like [...numbers] before sorting so you do not lose the original array."
  - "Call reverse() after sorting if you want descending order."
---

# Array Reverse and Sort

Sorting and reversing are two common array operations that beginners often use together. This lesson keeps the data small and the output explicit so the order is easy to verify.

## Example

```javascript
const numbers = [3, 1, 4, 2];
const sortedNumbers = [...numbers].sort((a, b) => a - b);
const reversedNumbers = [...sortedNumbers].reverse();
```

## Your Task

1. Create sortedNumbers from [3, 1, 4, 2] so it becomes [1, 2, 3, 4].
2. Create reversedNumbers from the sorted array and display [1,2,3,4] | [4,3,2,1] in #output.
