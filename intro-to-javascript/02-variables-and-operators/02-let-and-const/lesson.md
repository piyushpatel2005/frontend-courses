---
title: "Let And Const"
slug: let-and-const
order: 2
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use `const` when the value should not change, `let` when it will."
  - "Declare `greeting` with `const` since it's a fixed message."
  - "Use `let` for `score` because you will increment it."
summary: "Keep a greeting fixed while increasing a mutable score."
seo_title: let and const in Practice | Introduction to JavaScript
seo_description: "Keep a greeting fixed while increasing a mutable score."
seo_keywords: javascript, let and const in practice, beginner javascript, programming practice
---


Keep a greeting fixed while changing a score. The Console will show both the intermediate values and the finished message.

The declarations are already in the starter. Fill their initial values, then add the update where the comment points. Keep `greeting` as `const` because its binding does not need another value. Keep `score` as `let` because the next statement changes it.

`score += 10` means `score = score + 10`. It does not mean “set the score to 10” for every starting value. With the requested starting score of 0, the result happens to be 10. Initializing the score and applying the increase are separate tasks, with a probe after each.

## Worked example

A different counter shows why the label stays fixed while a value changes:

```javascript run
const station = "Harbor";
let visitors = 3;
visitors += 2;
console.log(`${station}: ${visitors}`);
```

Edit `script.js`, Run to inspect each checkpoint, then Submit to check the completed tasks. The supplied probes do not need rewriting.

## Your Task

1. Set the existing `const greeting` to `"Hello, JavaScript!"`; the provided probe will show `greeting: Hello, JavaScript!`.
2. Set the initial value of the existing `let score` to `0`; its probe will show `initial score: 0`.
3. Increase `score` with `+= 10`; the provided probe will show `score: 10`.
4. Log `Hello, JavaScript! Score: 10` using both variables.
