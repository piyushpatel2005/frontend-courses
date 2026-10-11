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
summary: "The backstage desk needs three small calculations. An arrow function is a function value you can assign to a variable and call by that variable's name."
seo_title: Arrow Functions | Introduction to JavaScript
seo_description: "The backstage desk needs three small calculations. An arrow function is a function value you can assign to a variable and call by that variable's name."
seo_keywords: javascript, arrow functions, beginner javascript, programming practice
---

# Arrow functions

The backstage desk needs three small calculations. An arrow function is a function value you can assign to a variable and call by that variable's name.

```javascript run
const triple = (n) => n * 3;
const ticketTotal = (price, count) => price * count;
console.log(triple(4));
console.log(ticketTotal(7, 2));
```

The parameters go before `=>`; the expression after it supplies the return value. Parentheses are optional for one parameter, but required for zero or several. Define the variable before calling it.

Braces change the rule: a body such as `n => { return n * 3; }` needs an explicit `return`. Writing `n => { n * 3; }` returns `undefined`.

For the temperature helper, `Math.round(x)` rounds a number to its nearest integer. `Math.round(value * 10) / 10` therefore rounds to one decimal place. This is the only `Math` tool needed here; the built-ins section covers more. For parity, `% 2` is the remainder after division by two, so a remainder of zero means even.

Run the example, then use the same return pattern for your different calculations. Use an expression body for the arithmetic helpers, or a braced body with `return`.

## Your Tasks

1. Replace `null` in `square` with an arrow function that returns its number multiplied by itself.
2. Replace `null` in `celsius` with an arrow function that converts Fahrenheit using `(f - 32) * 5 / 9`, rounded to one decimal place.
3. Replace `null` in `isEven` with an arrow function returning whether `n % 2 === 0`.
4. Log `5² = 25 | 98°F = 36.7°C | 4 is even: true` using the three functions.

Edit `script.js`, then Run after each step. The supplied probes show the values being checked; leave them in place. Submit checks the numbered tasks in order. You do not need to write extra checkpoint logs.
