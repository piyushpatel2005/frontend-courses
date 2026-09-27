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
summary: Practice type checking with a focused Starline Awards programming mission.
seo_title: Type Checking | Introduction to JavaScript
seo_description: Learn type checking through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, type checking, beginner javascript, programming practice
---

# Type Checking

## Mission: Signal Launch

An incoming value might be a single label or an entire list. Check what it is before treating it as either.

`typeof` reports `"object"` for an array, so it cannot distinguish an array from other objects. An array is an ordered list written with square brackets, such as `[1, 2, 3]`. Use `typeof` for primitive values and `Array.isArray()` when you need to recognize a list; the Arrays module will explore lists in depth.

## Example

```javascript
const status = "queued";
const route = ["map", "compass"];
console.log(typeof status);
console.log(Array.isArray(route));
```

## Your Task

1. Set `messageType` to `typeof "hello"`; the provided probe will log `messageType: string`.
2. Set `isList` with `Array.isArray([1, 2, 3])`; the provided probe will log `isList: true`.
3. Log `string | true` on a separate line using the two results.
