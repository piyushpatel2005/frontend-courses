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
summary: "A welcome helper can be stored in a variable using the `function` keyword too. You saw an unnamed function returned from a closure; here you will assign one directly."
seo_title: Function Expressions | Introduction to JavaScript
seo_description: "A welcome helper can be stored in a variable using the `function` keyword too. You saw an unnamed function returned from a closure; here you will assign one directly."
seo_keywords: javascript, function expressions, beginner javascript, programming practice
---


A welcome helper can be stored in a variable using the `function` keyword too. You saw an unnamed function returned from a closure; here you will assign one directly.

```javascript run
const formatParcel = function (recipient, zone) {
  return `${recipient} - zone ${zone}`;
};
console.log(formatParcel("Mina", "B"));
```

This is a **function expression**: the function is the value on the right of `=`. `formatParcel` is the variable used to call it. As with an arrow assigned to `const`, initialize the variable before calling it.

A declaration such as `function formatParcel(...) { ... }` names the function directly. Both forms can accept parameters and return values. A function declaration is available earlier in its enclosing scope (often called hoisting). A `const` function expression is unavailable until its declaration runs; calling it earlier throws a `ReferenceError`. Define helpers before their first call while learning so the order is easy to follow. The expression above uses braces, so it needs `return`; it does not have the arrow shorthand's automatic expression return.

Run the parcel example. Then complete the supplied welcome expression for student names without changing the two jobs: return a string first, print a call's result afterward.

## Your Tasks

1. Complete the function expression assigned to `greetStudent` so it returns `Welcome, <name>!`.
2. Log `Welcome, Maya!` by calling `greetStudent("Maya")`.

Edit `script.js`, then Run after each step. The supplied probes show the values being checked; leave them in place. Submit checks the numbered tasks in order. You do not need to write extra checkpoint logs.
