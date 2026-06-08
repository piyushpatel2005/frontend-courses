---
title: Object Methods and Destructuring
slug: object-methods
order: 2
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Object destructuring: `const { name, age } = person;`"
  - "Rename while destructuring: `const { name: fullName } = person;`"
  - "Use `Object.entries()` to loop over key-value pairs."
---

# Object Methods and Destructuring

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

Given:

```javascript
const student = {
    firstName: "Jordan",
    lastName: "Lee",
    scores: [88, 92, 79, 95, 85]
};
```

1. Destructure `firstName` and `lastName` from `student`.
2. Write a function `fullName(student)` that returns `"Jordan Lee"`.
3. Write a function `averageScore(student)` that returns the average of `student.scores` (rounded to 1 decimal).
4. Display in `#output`: `"Jordan Lee — avg: 87.8"`.
