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
summary: Practice arrow functions with a focused Starline Awards programming mission.
seo_title: Arrow Functions | Introduction to JavaScript
seo_description: Learn arrow functions through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, arrow functions, beginner javascript, programming practice
---

# Arrow Functions

## Mission: Backstage Toolkit

A backstage calculation can be written as an arrow function instead of a function declaration. Try three short calculations in `script.js` and check their results in the Console.

An arrow function is another way to store a function in a variable. For a single expression, the expression's value is returned automatically. You will meet function expressions and callbacks in more detail later; for now, compare this with the function declaration you just used.

## Syntax variations

```javascript
// Function declaration from the previous lesson
function traditionalAdd(a, b) { return a + b; }

// Arrow function — same result, stored in a variable
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
console.log(add(2, 3), double(4)); // 5 8
```

For this exercise, use an arrow function for each calculation. Arrow functions also differ in how they handle `this` and constructors; those details matter later when you learn objects and classes.

For temperature conversion, `Math.round(value * 10) / 10` rounds to one decimal place: scaling by ten makes the first decimal a whole number before rounding. You will explore `Math` in the built-ins module.

## Your Tasks

1. Declare `square` as an arrow function.
2. Return `n * n` from `square(n)`.
3. Declare `celsius` as an arrow function.
4. Convert Fahrenheit with `(f - 32) * 5 / 9`, rounded to one decimal via `Math.round(value * 10) / 10`.
5. Declare `isEven` as an arrow function.
6. Return boolean parity from `isEven`.
7. Log `5² = 25 | 98°F = 36.7°C | 4 is even: true` using all three functions.
