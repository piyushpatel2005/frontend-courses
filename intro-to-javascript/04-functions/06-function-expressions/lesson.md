---
title: Function Expressions
slug: function-expressions
order: 6
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Store the function in a const variable."
  - "Return the greeting text from the function expression the same way you would from a normal function."
summary: Practice function expressions with a focused Starline Awards programming mission.
seo_title: Function Expressions | Introduction to JavaScript
seo_description: Learn function expressions through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, function expressions, beginner javascript, programming practice
---

# Function Expressions

## Mission: Backstage Toolkit

A welcome helper can also be stored in a variable as a function expression. Call it from `script.js` and check the Console for the greeting.

Not every function is declared with the function name() form. Function expressions are common in callbacks and assigned helpers, so beginners should practice that syntax too.

## Example

```javascript
const formatParcel = function (recipient, zone) {
  return `${recipient} — zone ${zone}`;
};

console.log(formatParcel("Mina", "B"));
```

## Your Tasks

1. Assign a function expression to `greetStudent` returning `Welcome, <name>!`.
2. Log `Welcome, Maya!` from a call to that function.
