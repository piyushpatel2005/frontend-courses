---
title: Array Reduce, Some, and Every
slug: array-reduce-some-every
order: 12
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use reduce() to total the numbers into one value."
  - "Use some() and every() to answer yes-or-no questions about the array."
---

# Array Reduce, Some, and Every

Some array methods return one combined answer instead of a new array. This lesson uses reduce(), some(), and every() together to show three different kinds of summary.

## Example

```javascript
const total = [5, 10, 15].reduce((sum, value) => sum + value, 0);
const hasAdult = [12, 17, 21].some((age) => age >= 18);
const allPositive = [1, 2, 3].every((n) => n > 0);
```

## Your Task

1. Create total, hasAdult, and allPositive using reduce(), some(), and every() on the example arrays.
2. Display 30 | true | true in #output.
