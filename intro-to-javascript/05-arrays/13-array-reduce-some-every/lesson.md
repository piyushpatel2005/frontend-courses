---
title: Array Reduce, Some, and Every
slug: array-reduce-some-every
order: 13
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use reduce() to total the numbers into one value."
  - "Use some() and every() to answer yes-or-no questions about the array."
summary: "The crew needs a total and two yes-or-no answers. These methods summarize a list rather than building a same-length transformed list."
seo_title: Array Reduce, Some, and Every | Introduction to JavaScript
seo_description: "The crew needs a total and two yes-or-no answers. These methods summarize a list rather than building a same-length transformed list."
seo_keywords: javascript, array reduce, some, and every, beginner javascript, programming practice
---

# Array reduce, some, and every

The crew needs a total and two yes-or-no answers. These methods summarize a list rather than building a same-length transformed list.

```javascript run
const waterUse = [18, 22, 15];
const totalUse = waterUse.reduce(
  (sum, value) => sum + value,
  0
);
const hasLowTank = waterUse.some(
  value => value < 16
);
const allValid = waterUse.every(
  value => value >= 0
);
console.log(totalUse, hasLowTank, allValid);
```

In `reduce(callback, 0)`, zero is the initial accumulated result. The callback receives that result and the next item; its return becomes the next accumulated result. Above, `sum` moves through 0, 18, 40, and 55. Supplying an initial value also makes an empty sum return zero.

`some()` returns true as soon as one item passes its condition. `every()` returns false as soon as one item fails. For an empty array, `some()` is false and `every()` is true: there is no matching item and no failing item.

Run the example. For the editor, "adult" includes 18, while "positive" excludes zero. Write those boundaries explicitly in your callbacks. Next you will combine array methods into a restock report.

## Your Tasks

1. Set `total` using `[5, 10, 15].reduce()`, starting from 0 and adding each number.
2. Set `hasAdult` using `[12, 17, 21].some()` to check for an age of at least 18.
3. Set `allPositive` using `[1, 2, 3].every()` to check that each number is above zero.
4. Log `30 | true | true` using `total`, `hasAdult`, and `allPositive`.

Edit `script.js`, then Run after each step. The supplied probes show the values being checked; leave them in place. Submit checks the numbered tasks in order. You do not need to write extra checkpoint logs.
