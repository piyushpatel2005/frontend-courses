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
---

# Higher-Order Functions

A higher-order function either accepts a function or returns one. Returning a multiplier function is a clean beginner example because it shows functions as reusable values.

## Example

```javascript
function makeMultiplier(multiplier) {
  return function (value) {
    return value * multiplier;
  };
}
```

## Your Task

1. Write makeMultiplier(multiplier) so it returns a new function that multiplies a value by multiplier.
2. Display 21 in #output by using a multiplier of 3 on the value 7.
