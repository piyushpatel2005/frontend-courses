---
title: Array Fill
slug: array-fill
order: 9
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use fill(value, start, end) to replace only part of the array."
  - "Copy the original array before filling it if you want to preserve the source values."
---

# Array Fill

The fill() method is small but useful. It lets learners replace a range of values in one step and makes a good transition from simple indexing to array methods.

## Example

```javascript
const seats = ['A', 'B', 'C', 'D', 'E'];
const filledSeats = [...seats].fill('X', 1, 4);
```

## Your Task

1. Create filledSeats from ['A', 'B', 'C', 'D', 'E'] so the middle three values become X.
2. Display ["A","X","X","X","E"] in #output.
