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

The awards desk needs one calculator that delegates each operation to a small helper. Build it in `script.js` and check its results in the Console.

Put your function declarations and conditionals knowledge together to build a simple calculator engine. Function expressions are introduced in the next lesson; they are not required here.

## Worked example

One function can hand work to another. This separate postage example returns a value without changing the page:

```javascript
function basePostage(weight) {
  return weight * 2;
}

function postage(weight, express) {
  if (express) return basePostage(weight) + 5;
  return basePostage(weight);
}

console.log(postage(3, true)); // 11
```

## Your Tasks

1. Implement `add(a,b)`.
2. Implement `subtract(a,b)`.
3. Implement `multiply(a,b)`.
4. Implement `divide(a,b)`, returning `null` on zero divisor.
5. Implement `calculate(a,op,b)` for +, -, *, / (calling helpers), returning `null` for unknown operator.
6. Log `10 + 5 = 15` using `calculate(10,"+",5)`.
7. Log `8 / 0 = Error: Division by zero` using `calculate(8,"/",0)`.
