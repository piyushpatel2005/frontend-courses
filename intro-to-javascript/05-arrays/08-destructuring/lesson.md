---
title: Destructuring
slug: destructuring
order: 8
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Array destructuring: `const [a, b, c] = myArray;`"
  - "Skip elements with commas: `const [first, , third] = arr;`"
  - "Use rest: `const [head, ...tail] = arr;`"
summary: Practice destructuring with a focused Starline Awards programming mission.
seo_title: Destructuring | Introduction to JavaScript
seo_description: Learn destructuring through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, destructuring, beginner javascript, programming practice
---

# Destructuring

## Mission: Setlist Vault

You are the programmer for the Starline Awards, a live showcase for a rising superstar. This stage helps you organize a superstar's songs, venues, and tour moments as ordered collections. Keep the work in `script.js`: this course is about JavaScript programming, not changing page elements.

Run the code and use the Console as your checkpoint. Read the example, make one focused change, then complete the task.

**Destructuring** is a concise syntax for unpacking values from arrays (or properties from objects) into distinct variables.

## Array destructuring

```javascript
const point = [3, 7];
const [x, y] = point;
console.log(x); // 3
console.log(y); // 7
```

### Skipping elements

```javascript
const [first, , third] = [10, 20, 30];
console.log(first); // 10
console.log(third); // 30
```

### Rest pattern

```javascript
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]
```

### Swapping variables

```javascript
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b); // 2 1
```

### Default values

```javascript
const [x = 0, y = 0, z = 0] = [10, 20];
console.log(z); // 0 — default applied
```

## Object destructuring

```javascript
const person = { name: "Alice", age: 30, city: "NYC" };
const { name, age } = person;
console.log(name); // "Alice"
console.log(age);  // 30
```

### Renaming

```javascript
const { name: fullName } = person;
console.log(fullName); // "Alice"
```

### Nested destructuring

```javascript
const user = { id: 1, address: { city: "London", zip: "EC1A" } };
const { address: { city } } = user;
console.log(city); // "London"
```

## Your Task

1. Given `const coords = [40.7128, -74.0060]`, use array destructuring to extract `latitude` and `longitude`.
2. Given `const product = { name: "Laptop", price: 999, brand: "TechCo" }`, destructure `name` and `price`.
3. Write a function `swapPair([a, b])` that takes a two-element array and returns it with elements swapped: `swapPair([1, 2])` → `[2, 1]`.
4. log with `console.log()`: `"Laptop costs $999 | lat: 40.7128"`.
