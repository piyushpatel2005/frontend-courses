---
title: For Loops
slug: for-loops
order: 7
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "A standard for loop: `for (let i = 0; i < arr.length; i++)`."
  - "Use `for...of` to iterate values directly: `for (const item of arr)`."
  - "Accumulate a sum by adding each element to a total variable."
summary: Practice for loops with a focused Starline Awards programming mission.
seo_title: For Loops | Introduction to JavaScript
seo_description: Learn for loops through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, for loops, beginner javascript, programming practice
---

# For Loops

## Mission: Decision Desk

You are the programmer for the Starline Awards, a live showcase for a rising superstar. This stage helps you teach the Starline Awards engine how to choose the next action. Keep the work in `script.js`: this course is about JavaScript programming, not changing page elements.

Run the code and use the Console as your checkpoint. Read the example, make one focused change, then complete the task.

Loops let you repeat a block of code. JavaScript offers several loop styles.

## Traditional `for` loop

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
}
```

Iterating an array:

```javascript
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

## `for...of` — iterate values

Cleaner syntax when you only need the value, not the index:

```javascript
for (const fruit of fruits) {
    console.log(fruit);
}
```

## `for...in` — iterate object keys

```javascript
const person = { name: "Alice", age: 30 };
for (const key in person) {
    console.log(key, person[key]); // name Alice / age 30
}
```

## Your Task

1. Write a function `sumArray(numbers)` that returns the sum of all numbers in the array using a `for` loop.
2. Write a function `reverseArray(arr)` that returns a new array with the elements in reverse order.
3. Call `sumArray([1, 2, 3, 4, 5])` and log with `console.log()` as `"Sum: 15"`.
4. Verify the program behavior: reverseArray returns reversed array.
5. Verify the program behavior: logs the mission result.
