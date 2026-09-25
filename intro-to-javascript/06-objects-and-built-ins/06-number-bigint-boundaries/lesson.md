---
title: Number and BigInt Boundaries
slug: number-bigint-boundaries
order: 6
language: javascript
lesson_type: interactive
summary: Learn when Number conversion is useful and why BigInt exists for very large integer values.
seo_title: Number and BigInt Boundaries | Introduction to JavaScript
seo_description: Run a focused JavaScript walkthrough of Number conversion, invalid numeric input, and BigInt precision.
seo_keywords: javascript number, javascript bigint, numeric conversion, integer precision
---

# Number and BigInt Boundaries

Most everyday calculations use `Number`. `Number("42.5")` converts numeric text into a number. `BigInt` represents whole integers beyond the range where ordinary Number values can safely distinguish every integer.

```javascript run
const parsedScore = Number("42.5");
const invalidScore = Number("north");
const largeTicket = 9007199254740993n;

console.log(parsedScore);
console.log(Number.isNaN(invalidScore));
console.log(largeTicket > 9007199254740992n);
```

## Checkpoint

`Number("north")` is not a usable number, so `Number.isNaN()` reports `true`. BigInt literals end with `n`; do not mix a BigInt and a Number in arithmetic without an explicit conversion.

## Learn more

MDN's references for [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) and [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) cover conversion, safe integer limits, and BigInt operations.