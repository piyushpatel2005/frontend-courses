---
title: "Number BigInt Boundaries"
slug: number-bigint-boundaries
order: 7
language: javascript
lesson_type: interactive
summary: Learn when Number conversion is useful and why BigInt exists for very large integer values.
seo_title: Number and BigInt Boundaries | Introduction to JavaScript
seo_description: Run a focused JavaScript walkthrough of Number conversion, invalid numeric input, and BigInt precision.
seo_keywords: javascript number, javascript bigint, numeric conversion, integer precision
---


Numeric text and a number are different values. `Number("42.5")` converts text so you can calculate with it. If conversion fails, the result is `NaN`, short for "not a number"; use `Number.isNaN(value)` to check for that result.

```javascript run
const parsedScore = Number("42.5");
const invalidScore = Number("north");
const largeTicket = 9007199254740993n;
console.log(parsedScore);
console.log(Number.isNaN(invalidScore));
console.log(largeTicket > 9007199254740992n);
```

Run the example. The score becomes `42.5`, the failed conversion is detected, and the two large IDs remain distinct.

Conversion is not complete input validation: `Number("")` and `Number("   ")` both produce zero. Reject blank input separately when a blank field should mean "missing". A converted value can also be infinite; `Number.isFinite(value)` checks that it is neither infinite nor `NaN`.

## Keep large integers exact

Number uses floating-point storage. It cannot represent every decimal fraction exactly, and beyond `Number.MAX_SAFE_INTEGER` (9007199254740991), it cannot reliably distinguish every adjacent integer. BigInt stores whole integers exactly. The `n` suffix creates a BigInt literal; `BigInt("9007199254740993")` converts an integer string without first rounding it as a Number.

Do not write a large ID as a Number and then convert it to BigInt: any lost precision is already gone. Converting a large BigInt to Number can lose precision too. In the next exercise you will convert only a small ticket count, never the identifier.

The safe-integer limit also applies to negative values: use the range from `Number.MIN_SAFE_INTEGER` through `Number.MAX_SAFE_INTEGER` when every integer must remain distinguishable.

BigInt does not hold fractional values. Arithmetic operands must have matching numeric types: `3n * 2n` works, but `3n * 2` throws. Convert deliberately when the value is safely within the other type's range.

## Learn more

MDN's [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) and [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) references explain conversion and precision limits.
