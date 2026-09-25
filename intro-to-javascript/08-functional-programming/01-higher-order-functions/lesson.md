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

## Mission: Chart Analytics

You are the programmer for the Starline Awards, a live showcase for a rising superstar. This stage helps you transform chart data with focused functions instead of tangled steps. Keep the work in `script.js`: this course is about JavaScript programming, not changing page elements.

Run the code and use the Console as your checkpoint. Read the example, make one focused change, then complete the task.

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

## Your Task

1. Write makeMultiplier(multiplier) so it returns a new function that multiplies a value by multiplier.
2. Log 21 with `console.log()`. by using a multiplier of 3 on the value 7.
