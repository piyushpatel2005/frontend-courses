---
title: "Project Calculator"
slug: project-calculator
order: 5
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Each operation is a separate function: add, subtract, multiply, divide."
  - "The `calculate(a, op, b)` function calls the right operation using an if/else or switch."
  - "Guard against division by zero: return null when b is 0."
summary: "The awards desk needs a calculator that delegates work to small helpers. Each helper returns a number; `calculate` chooses which helper to call."
seo_title: Project - Calculator | Introduction to JavaScript
seo_description: "The awards desk needs a calculator that delegates work to small helpers. Each helper returns a number; `calculate` chooses which helper to call."
seo_keywords: javascript, project - calculator, beginner javascript, programming practice
---


The awards desk needs a calculator that delegates work to small helpers. Each helper returns a number; `calculate` chooses which helper to call.

This postage example uses the same pattern with different rules:

```javascript run
function basePostage(weight) {
  return weight * 2;
}
function postage(weight, express) {
  if (express) return basePostage(weight) + 5;
  return basePostage(weight);
}
console.log(postage(3, true));
console.log(postage(3, false));
```

When `postage` calls `basePostage`, the returned number becomes part of the surrounding expression. `calculate` will do the same with your arithmetic helpers.

Use `null` to mean "no valid calculation" for division by zero or an unknown operator. Zero itself can be a valid result, so check `result === null` rather than `if (!result)` when choosing an error message. Return `null` consistently; the display code supplies the words.

The starter includes empty declarations and guarded probes. Work on one helper at a time; a later unfinished helper will not prevent an earlier checkpoint from running.

## Your Tasks

1. Implement `add(a, b)` to return their sum.
2. Implement `subtract(a, b)` to return `a - b`.
3. Implement `multiply(a, b)` to return their product.
4. Implement `divide(a, b)` to return `a / b`, or `null` when `b` is zero.
5. Complete `calculate(a, op, b)` by calling the matching helper for `+`, `-`, `*`, or `/`; return `null` for another operator.
6. Log `10 + 5 = 15` using the result of `calculate(10, "+", 5)`.
7. Log `8 / 0 = Error: Division by zero`, choosing the error text when `calculate(8, "/", 0)` returns `null`.

Edit `script.js`, then Run after each step. The supplied probes show the values being checked; leave them in place. Submit checks the numbered tasks in order. You do not need to write extra checkpoint logs.
