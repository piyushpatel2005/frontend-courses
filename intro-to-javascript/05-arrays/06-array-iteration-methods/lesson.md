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
summary: "You can pass a function to an array method. That passed function is a callback; the method calls it for each item and supplies the item as its argument."
seo_title: Array Iteration Methods | Introduction to JavaScript
seo_description: "You can pass a function to an array method. That passed function is a callback; the method calls it for each item and supplies the item as its argument."
seo_keywords: javascript, array iteration methods, beginner javascript, programming practice
---

# Array iteration methods

You can pass a function to an array method. That passed function is a **callback**; the method calls it for each item and supplies the item as its argument.

```javascript run
const books = ["Dune", "Kindred", "Beloved"];
const notes = [];
books.forEach(book => {
  notes.push(`Read: ${book}`);
});
const labels = books.map(book => `Shelf: ${book}`);
console.log(notes.join(" | "));
console.log(labels.join(" | "));
```

Passing `formatItem` gives a method a function to call; passing `formatItem()` calls it now and supplies its result instead. In the arrow callback above, the arrow creates the callback without calling it.

`forEach()` performs an action for each item. Here the action pushes a note into an existing array; the method itself returns `undefined`.

`map()` collects each callback's returned value into a new array of the same length. Its callback may also receive the index as a second parameter: `(item, index) => ...`. If you use a braced callback body, remember `return` or the mapped entries become `undefined`.

Run the book example. Neither method automatically changes the source array, although a callback can mutate shared data if you write it to do so. In your number exercise, keep the source unchanged.

## Your Tasks

1. Use `numbers.forEach()` to push `Number: <value>` into `labels` for each number.
2. Set `doubledNumbers` to a `numbers.map()` call that returns each number multiplied by two.

Edit `script.js`, then Run after each step. The supplied probes show the values being checked; leave them in place. Submit checks the numbered tasks in order. You do not need to write extra checkpoint logs.
