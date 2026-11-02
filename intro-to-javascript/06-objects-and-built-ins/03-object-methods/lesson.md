---
title: Object Methods and Destructuring
slug: object-methods
order: 3
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Destructure the two name properties from student."
  - "Add the scores, divide by their count, and round the result to one decimal."
summary: "Read a student record with destructuring and calculate a rounded average."
seo_title: Object Methods and Destructuring | Introduction to JavaScript
seo_description: "Read JavaScript object properties with destructuring and build reusable full-name and average-score helpers."
seo_keywords: javascript, object methods and destructuring, beginner javascript, programming practice
---

# Object methods and destructuring

Jordan's record stores a name and several scores. Read the name into local variables, then write helpers that can also handle another student's record.

## Read properties into variables

```javascript run
const book = { title: "Dune", author: "Herbert" };
const { title, author } = book;
console.log(title, author);
```

The braces on the left are **destructuring**: read the named properties from `book` and create variables with those names. `const { title: bookTitle } = book` reads the same property but names the new variable `bookTitle`. It does not rename the property in the object.

A function can read properties through its parameter. If its parameter is named `s`, use `s.firstName`, not the outer `student.firstName`; that lets the function work with other records.

## Calculate an average

Add the scores with a loop or the array method `reduce()`, then divide by the array's length. For a nonempty array, `values.reduce((total, value) => total + value, 0)` starts at zero and adds each value. To round a number `n` to one decimal place, use `Math.round(n * 10) / 10`. `Math.round()` returns the nearest integer; multiplying first moves the tenths digit into the rounding position.

`Object.entries(record)` is another built-in method. It returns an array of `[key, value]` pairs, useful when you need to visit every property. You will use it in the shift audit later in this section.

Edit `script.js`. The name check also tries Ari Chen, and the average check tries a different score list. Run after each change, then Submit. Scores in this exercise are always nonempty numeric arrays.

## Your Tasks

1. Destructure `firstName` and `lastName` from `student`.
2. Complete `fullName(s)` to return the given record's first and last names separated by a space.
3. Complete `averageScore(s)` to return the mean of its scores, rounded to one decimal place.
4. Log `Jordan Lee — avg: 87.8` on a separate line using both helpers and `student`.
