---
title: let and const in Practice
slug: let-and-const
order: 2
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use `const` when the value should not change, `let` when it will."
  - "Declare `greeting` with `const` since it's a fixed message."
  - "Use `let` for `score` because you will increment it."
summary: Practice let and const in practice with a focused Starline Awards programming mission.
seo_title: let and const in Practice | Introduction to JavaScript
seo_description: Learn let and const in practice through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, let and const in practice, beginner javascript, programming practice
---

# let and const in Practice

## Mission: Scoreboard Engine

Keep a greeting fixed while changing a score. The Console will show both the intermediate values and the finished message.

In this exercise you will declare variables using `const` and `let` following best practices. Remember:

- **`const`** for values that should not be reassigned.
- **`let`** for values that will change.

## Worked example

A different counter shows why the label stays fixed while a value changes:

```javascript
const station = "Harbor";
let visitors = 3;
visitors += 2;
console.log(`${station}: ${visitors}`); // Harbor: 5
```

## Your Task

1. Set the existing `const greeting` to `"Hello, JavaScript!"`; the provided probe will show `greeting: Hello, JavaScript!`.
2. Set the initial value of the existing `let score` to `0`; its probe will show `initial score: 0`.
3. Increase `score` with `+= 10`; the provided probe will show `score: 10`.
4. Log `Hello, JavaScript! Score: 10` using both variables.
