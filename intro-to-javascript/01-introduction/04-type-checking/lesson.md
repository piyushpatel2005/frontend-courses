---
title: Type Checking
slug: type-checking
order: 4
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use typeof for primitive values like strings."
  - "Use Array.isArray() when you specifically want to detect an array."
summary: "Use typeof and Array.isArray to distinguish a primitive value from a list."
seo_title: Type Checking | Introduction to JavaScript
seo_description: "Use typeof and Array.isArray to distinguish a primitive value from a list."
seo_keywords: javascript, type checking, beginner javascript, programming practice
---


An incoming value might be a single label or an entire list. Check what it is before treating it as either.

`typeof` reports `"object"` for an array, so it cannot distinguish an array from other objects. An array is an ordered list written with square brackets, such as `[1, 2, 3]`. Use `typeof` for primitive values and `Array.isArray()` when you need to recognize a list; the Arrays module will explore lists in depth.

`typeof` is an operator: write it before a value without quoting the value's name. `Array.isArray(...)` is a built-in function: put the value you want to inspect between its parentheses. It returns a boolean, not the word `"array"`.

Read the two example outputs as separate answers: the status is a string, and the route is an array. The exercise checks different values using those same two tools.

## Example

```javascript run
const status = "queued";
const route = ["map", "compass"];
console.log(typeof status);
console.log(Array.isArray(route));
```

Edit `script.js`, Run to inspect each checkpoint, then Submit to check the completed tasks. The supplied probes do not need rewriting.

## Your Task

1. Set `messageType` to `typeof "hello"`; the provided probe will log `messageType: string`.
2. Set `isList` with `Array.isArray([1, 2, 3])`; the provided probe will log `isList: true`.
3. Log `string | true` on a separate line using the two results.
