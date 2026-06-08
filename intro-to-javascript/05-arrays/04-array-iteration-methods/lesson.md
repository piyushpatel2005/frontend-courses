---
title: Array Iteration Methods
slug: array-iteration-methods
order: 4
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use forEach() to push formatted labels into an existing array."
  - "Use map() to create a new doubled array in one expression."
---

# Array Iteration Methods

Iteration methods let you work with every item in an array. This lesson pairs forEach() and map() so learners can compare a side-effect loop with a transformation method.

## Example

```javascript
const numbers = [1, 2, 3];
const labels = [];
numbers.forEach((n) => labels.push(`Number: ${n}`));
const doubled = numbers.map((n) => n * 2);
```

## Your Task

1. Use forEach() on [1, 2, 3] to build labels with Number: 1, Number: 2, and Number: 3.
2. Use map() to create doubledNumbers and display Number: 1, Number: 2, Number: 3 | [2,4,6] in #output.
