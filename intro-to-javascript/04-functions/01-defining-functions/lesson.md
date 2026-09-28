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
summary: Practice defining functions with a focused Starline Awards programming mission.
seo_title: Defining Functions | Introduction to JavaScript
seo_description: Learn defining functions through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, defining functions, beginner javascript, programming practice
---

# Defining Functions

## Mission: Backstage Toolkit

The Starline Awards desk needs the same greeting for every guest. Write it once as a function, then call it with different names. Work in `script.js` and check your output in the Console.

Functions package logic into a reusable block. This lesson keeps the goal small: write one greeting function and prove that it works for two different names.

## Example

```javascript
function makeBadge(name) {
  return `Visitor: ${name}`;
}

console.log(makeBadge("Ari"));
```

## Your Tasks

1. Define `greet(name)` returning `Hello, <name>!`.
2. Log `Hello, Alice! | Hello, Bob!` by calling `greet` twice.
