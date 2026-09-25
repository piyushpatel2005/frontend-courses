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

You are the programmer for the Starline Awards, a live showcase for a rising superstar. This stage helps you package repeatable backstage jobs into small, dependable functions. Keep the work in `script.js`: this course is about JavaScript programming, not changing page elements.

Run the code and use the Console as your checkpoint. Read the example, make one focused change, then complete the task.

Functions package logic into a reusable block. This lesson keeps the goal small: write one greeting function and prove that it works for two different names.

## Example

```javascript
function makeBadge(name) {
  return `Visitor: ${name}`;
}

console.log(makeBadge("Ari"));
```

## Your Task

1. Write a function greet(name) that returns Hello, <name>!.
2. Log Hello, Alice! | Hello, Bob! with `console.log()`. by calling the function twice.
