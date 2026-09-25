---
title: Object Methods and Destructuring
slug: object-methods
order: 3
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Object destructuring: `const { name, age } = person;`"
  - "Rename while destructuring: `const { name: fullName } = person;`"
  - "Use `Object.entries()` to loop over key-value pairs."
summary: Practice object methods and destructuring with a focused Starline Awards programming mission.
seo_title: Object Methods and Destructuring | Introduction to JavaScript
seo_description: Learn object methods and destructuring through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, object methods and destructuring, beginner javascript, programming practice
---

# Object Methods and Destructuring

## Mission: Artist Profile Lab

You are the programmer for the Starline Awards, a live showcase for a rising superstar. This stage helps you model an artist profile and use JavaScript's built-in tools to keep it current. Keep the work in `script.js`: this course is about JavaScript programming, not changing page elements.

Run the code and use the Console as your checkpoint. Read the example, make one focused change, then complete the task.

## Object destructuring

Extract properties into variables directly:

```javascript
const book = { title: "Dune", author: "Herbert", year: 1965 };
const { title, author } = book;
```

### With renaming

```javascript
const { title: bookTitle } = book;
```

### In function parameters

```javascript
function displayBook({ title, author, year }) {
    return `${title} by ${author} (${year})`;
}
displayBook(book); // "Dune by Herbert (1965)"
```

## Iterating an object

```javascript
const scores = { Alice: 95, Bob: 82, Carol: 91 };

for (const [name, score] of Object.entries(scores)) {
    console.log(`${name}: ${score}`);
}
```

## Your Task

1. Destructure `firstName` and `lastName` from `student`.
2. Write a function `fullName(student)` that returns `"Jordan Lee"`.
3. Write a function `averageScore(student)` that returns the average of `student.scores` (rounded to 1 decimal).
4. log with `console.log()`: `"Jordan Lee — avg: 87.8"`.
