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

You are the programmer for the Starline Awards, a live showcase for a rising superstar. This stage helps you turn the Starline Awards scoreboard from a static page into a program that can report its own score. Keep the work in `script.js`: this course is about JavaScript programming, not changing page elements.

Run the code and use the Console as your checkpoint. Read the example, make one focused change, then complete the task.

Beginners quickly notice that typeof [] is not as useful as they expect. This lesson teaches the practical pair: typeof for primitives and Array.isArray() for arrays.

## Example

```javascript
const status = "queued";
const route = ["map", "compass"];
console.log(typeof status);
console.log(Array.isArray(route));
```

## Your Task

1. Create messageType from typeof 'hello' and isList from Array.isArray([1, 2, 3]).
2. Log string | true with `console.log()`.

## Signal Launch complete

You can now connect a page to a script and inspect JavaScript values. Take the section quiz to lock in the basics, then move to the Scoreboard Engine.
