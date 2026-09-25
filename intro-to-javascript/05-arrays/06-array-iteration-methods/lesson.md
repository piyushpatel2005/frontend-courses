---
title: Array Iteration Methods
slug: array-iteration-methods
order: 6
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use forEach() to push formatted labels into an existing array."
  - "Use map() to create a new doubled array in one expression."
summary: Practice array iteration methods with a focused Starline Awards programming mission.
seo_title: Array Iteration Methods | Introduction to JavaScript
seo_description: Learn array iteration methods through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, array iteration methods, beginner javascript, programming practice
---

# Array Iteration Methods

## Mission: Setlist Vault

You are the programmer for the Starline Awards, a live showcase for a rising superstar. This stage helps you organize a superstar's songs, venues, and tour moments as ordered collections. Keep the work in `script.js`: this course is about JavaScript programming, not changing page elements.

Run the code and use the Console as your checkpoint. Read the example, make one focused change, then complete the task.

Iteration methods let you work with every item in an array. This lesson pairs forEach() and map() so learners can compare a side-effect loop with a transformation method.

## Example

```javascript
const books = ["Dune", "Kindred", "Beloved"];
const labels = books.map((book) => `Read: ${book}`);
console.log(labels);
```

## Your Task

1. Use forEach() on [1, 2, 3] to build labels with Number: 1, Number: 2, and Number: 3.
2. Use map() to create doubledNumbers and display Number: 1, Number: 2, Number: 3 | [2,4,6] in #output.
