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
summary: "Coordinates and route stops arrive in a fixed order. Array destructuring names values by position without writing a separate indexed assignment for each one."
seo_title: Destructuring | Introduction to JavaScript
seo_description: "Coordinates and route stops arrive in a fixed order. Array destructuring names values by position without writing a separate indexed assignment for each one."
seo_keywords: javascript, destructuring, beginner javascript, programming practice
---


Coordinates and route stops arrive in a fixed order. **Array destructuring** names values by position without writing a separate indexed assignment for each one.

```javascript run
const point = [3, 7];
const [x, y] = point;
const [first, , third] = ["North", "East", "South"];
console.log(x, y);
console.log(first, third);
```

A blank position between commas skips a value. The chosen variable names do not have to match anything in the array.

```javascript run
const [head, ...tail] = [10, 20, 30];
const [width = 0, height = 0] = [12];
console.log(head, JSON.stringify(tail));
console.log(width, height);
```

The rest pattern `...tail` collects remaining values into a new array and must come last. A default applies when a position is missing or contains `undefined`.

A function parameter can destructure too: `function describe([left, right]) { ... }` receives one array argument, then names its first two items. Your `swapPair` should use that form and return a new array in the opposite order. This does not swap the caller's original array in place.

## Your Tasks

1. Destructure `coords` into `latitude` and `longitude`.
2. Destructure `stops` into `firstStop` and `lastStop`, skipping its middle value.
3. Change the parameter of `swapPair` to `[a, b]` and return `[b, a]`.
4. Log `Harbor to Library | lat: 40.7128` using the destructured values.

Edit `script.js`, then Run after each step. The supplied probes show the values being checked; leave them in place. Submit checks the numbered tasks in order. You do not need to write extra checkpoint logs.
