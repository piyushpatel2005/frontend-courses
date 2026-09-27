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

When a pair of values arrives together, destructuring names its parts by position. Try it with coordinates in `script.js`, then read the Console checkpoints.

**Destructuring** unpacks array values into variables based on their positions. The next module applies a similar idea to named object properties.

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

## Your Task

1. Given `const coords = [40.7128, -74.0060]`, use array destructuring to extract `latitude` and `longitude`.
2. Given `const stops = ["Harbor", "Museum", "Library"]`, destructure its first and third stops while skipping the middle.
3. Write a function `swapPair([a, b])` that takes a two-element array and returns it with elements swapped: `swapPair([1, 2])` → `[2, 1]`.
4. Log `Harbor to Library | lat: 40.7128` using the destructured values.
