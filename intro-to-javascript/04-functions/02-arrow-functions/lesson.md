---
title: Arrow Functions
slug: arrow-functions
order: 2
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Arrow function: `const fn = (params) => expression;`"
  - "Omit `{}` and `return` for single-expression arrow functions."
  - "Arrow functions with one parameter don't need parentheses: `n => n * 2`."
---

# Arrow Functions

Arrow functions are a concise syntax for writing functions introduced in ES6. They are especially popular for short one-liners and callbacks.

## Syntax variations

```javascript
// Traditional function expression
const add = function(a, b) { return a + b; };

// Arrow function — same result
const add = (a, b) => a + b;

// Single parameter — parentheses optional
const double = n => n * 2;

// No parameters — empty parentheses required
const greet = () => "Hello!";

// Multi-line body — needs {} and explicit return
const classify = n => {
    if (n > 0) return "positive";
    if (n < 0) return "negative";
    return "zero";
};
```

## Key differences from regular functions

- Arrow functions do **not** have their own `this` — they inherit `this` from the surrounding scope (important in OOP, covered later).
- Arrow functions cannot be used as constructors.
- Arrow functions do not have an `arguments` object.

## Your Task

1. Write an arrow function `square(n)` that returns `n * n`.
2. Write an arrow function `celsius(f)` that converts Fahrenheit to Celsius: `(f - 32) * 5/9`, rounded to 1 decimal place (`Math.round(value * 10) / 10`).
3. Write an arrow function `isEven(n)` that returns `true` if `n` is even, `false` otherwise.
4. Display in `#output`: `"5² = 25 | 98°F = 36.7°C | 4 is even: true"`.
