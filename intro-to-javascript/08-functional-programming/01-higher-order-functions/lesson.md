---
title: "Higher Order Functions"
slug: higher-order-functions
order: 1
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Return an inner function that multiplies its input by multiplier."
  - "Call the returned function with 7 after creating it with 3."
summary: "A multiplier has two inputs that arrive at different times: first the factor, then the value to multiply. You will return a function that remembers the factor."
seo_title: Higher-Order Functions | Introduction to JavaScript
seo_description: "A multiplier has two inputs that arrive at different times: first the factor, then the value to multiply. You will return a function that remembers the factor."
seo_keywords: javascript, higher-order functions, beginner javascript, programming practice
---

# Higher-Order Functions

A multiplier has two inputs that arrive at different times: first the factor, then the value to multiply. You will return a function that remembers the factor.

A higher-order function accepts a function, returns a function, or does both. In the discount example, `makeDiscount(0.2)` returns the inner function; it does not calculate a price yet. Saving that result as `const discount = makeDiscount(0.2)` and then calling `discount(50)` produces 40. The shorter `makeDiscount(0.2)(50)` makes those same two calls. The inner function still has access to `percent` after the outer call has finished. That retained access is a closure. The supplied `?.(7)` probe calls the returned function only if one exists, so the unfinished starter can run.

## Example

```javascript run
function makeDiscount(percent) {
  return function (price) {
    return price * (1 - percent);
  };
}

console.log(makeDiscount(0.2)(50));
```

Edit `script.js`, then use **Run** to inspect the supplied checkpoints. Use **Submit** to check your tasks in order. Keep the supplied probes; change only the requested definitions and final logs.

## Your Tasks

1. Return a function from `makeMultiplier(multiplier)` that multiplies its argument by the remembered factor.
2. Log `makeMultiplier(3)(7)` on its own line.
