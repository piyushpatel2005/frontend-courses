---
title: Project - Calculator
slug: project-calculator
order: 5
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Each operation is a separate function: add, subtract, multiply, divide."
  - "The `calculate(a, op, b)` function calls the right operation using an if/else or switch."
  - "Guard against division by zero: return null (or a special message) when b is 0."
---

# Project — Calculator

Put your functions, arrow functions, and conditionals knowledge together to build a simple calculator engine.

## Requirements

Build the following pure functions in `script.js`:

1. `add(a, b)` — returns `a + b`
2. `subtract(a, b)` — returns `a - b`
3. `multiply(a, b)` — returns `a * b`
4. `divide(a, b)` — returns `a / b`; if `b` is `0` return `null`
5. `calculate(a, op, b)` — delegates to the right function based on the `op` string (`"+"`, `"-"`, `"*"`, `"/"`); returns `null` for an unknown operator.

Then:

6. Compute the result of `calculate(10, "+", 5)` and display in `#result` as `"10 + 5 = 15"`.
7. Compute `calculate(8, "/", 0)` and display in `#zero-result` as `"8 / 0 = Error: Division by zero"`.

## Starter structure

The `index.html` already has `<p id="result">` and `<p id="zero-result">` ready for you.
