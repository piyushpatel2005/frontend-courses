---
title: Defining Functions
slug: defining-functions
order: 1
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Your function should accept a name parameter and return a string."
  - "Call the function twice and join the results with |."
---

# Defining Functions

Functions package logic into a reusable block. This lesson keeps the goal small: write one greeting function and prove that it works for two different names.

## Example

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('Alice'));
```

## Your Task

1. Write a function greet(name) that returns Hello, <name>!.
2. Display Hello, Alice! | Hello, Bob! in #output by calling the function twice.
