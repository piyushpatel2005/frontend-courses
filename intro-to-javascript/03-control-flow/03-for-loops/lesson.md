---
title: For Loops
slug: for-loops
order: 3
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "A standard for loop: `for (let i = 0; i < arr.length; i++)`."
  - "Use `for...of` to iterate values directly: `for (const item of arr)`."
  - "Accumulate a sum by adding each element to a total variable."
---

# For Loops

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
3. Call `sumArray([1, 2, 3, 4, 5])` and display in `#output` as `"Sum: 15"`.
