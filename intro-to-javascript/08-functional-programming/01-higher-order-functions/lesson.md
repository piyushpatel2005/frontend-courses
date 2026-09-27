---
title: Higher-Order Functions
slug: higher-order-functions
order: 1
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Return an inner function that multiplies its input by multiplier."
  - "Call the returned function with 7 after creating it with 3."
summary: Practice higher-order functions with a focused Starline Awards programming mission.
seo_title: Higher-Order Functions | Introduction to JavaScript
seo_description: Learn higher-order functions through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, higher-order functions, beginner javascript, programming practice
---

# Higher-Order Functions

You have already passed functions to array methods and returned functions from closures. Here you will make a reusable multiplier in `script.js`, then inspect the Console result.

A higher-order function either accepts a function or returns one. Returning a multiplier function is a clean beginner example because it shows functions as reusable values.

## Example

```javascript
function makeDiscount(percent) {
  return function (price) {
    return price * (1 - percent);
  };
}

console.log(makeDiscount(0.2)(50));
```

## Your Tasks

1. Complete `makeMultiplier(multiplier)` so it returns a function that multiplies its input by the captured multiplier.
2. Log `makeMultiplier(3)(7)` as its own Console line.
