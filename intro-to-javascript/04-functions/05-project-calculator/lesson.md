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
summary: Practice project - calculator with a focused Starline Awards programming mission.
seo_title: Project - Calculator | Introduction to JavaScript
seo_description: Learn project - calculator through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, project - calculator, beginner javascript, programming practice
---

# Project — Calculator

## Mission: Backstage Toolkit

You are the programmer for the Starline Awards, a live showcase for a rising superstar. This stage helps you package repeatable backstage jobs into small, dependable functions. Keep the work in `script.js`: this course is about JavaScript programming, not changing page elements.

Run the code and use the Console as your checkpoint. Read the example, make one focused change, then complete the task.

Put your functions, arrow functions, and conditionals knowledge together to build a simple calculator engine.

## Requirements

Build the following pure functions in `script.js`:

1. `add(a, b)` — returns `a + b`
2. `subtract(a, b)` — returns `a - b`
3. `multiply(a, b)` — returns `a * b`
4. `divide(a, b)` — returns `a / b`; if `b` is `0` return `null`
5. `calculate(a, op, b)` — delegates to the right function based on the `op` string (`"+"`, `"-"`, `"*"`, `"/"`); returns `null` for an unknown operator.

Then:

6. Compute the result of `calculate(10, "+", 5)` and log with `console.log()` as `"10 + 5 = 15"`.
7. Compute `calculate(8, "/", 0)` and log with `console.log()` as `"8 / 0 = Error: Division by zero"`.

## Starter structure
