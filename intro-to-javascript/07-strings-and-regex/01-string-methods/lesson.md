---
title: String Methods
slug: string-methods
order: 1
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use toUpperCase() to create the uppercase version."
  - "Use includes() to check whether the original string contains world."
summary: Practice string methods with a focused Starline Awards programming mission.
seo_title: String Methods | Introduction to JavaScript
seo_description: Learn string methods through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, string methods, beginner javascript, programming practice
---

# String Methods

## Mission: Lyrics Studio

You are the programmer for the Starline Awards, a live showcase for a rising superstar. This stage helps you shape captions, lyric snippets, and input patterns without changing the original message by accident. Keep the work in `script.js`: this course is about JavaScript programming, not changing page elements.

Run the code and use the Console as your checkpoint. Read the example, make one focused change, then complete the task.

Strings are values with built-in helper methods. This lesson keeps the practice focused on one transformation and one membership check.

## See string slicing as positions

![Diagram showing `STARLINE`.slice(1, 5) selecting positions 1 through 4 and stopping before 5.](string-slice-positions.svg)

A string has numbered character positions starting at `0`. `slice(start, end)` includes the character at `start` and stops before `end`.

```javascript
const trailName = "river loop";
console.log(trailName.toUpperCase());
console.log(trailName.includes("loop"));
```

This does not change `label`; it returns a new string. Use the console to test another pair of positions before moving on.

## Example

```javascript
const phrase = 'hello world';
const upperPhrase = phrase.toUpperCase();
const hasWorld = phrase.includes('world');
```

## Your Task

1. Create upperPhrase from hello world using toUpperCase() and hasWorld using includes('world').
2. Log HELLO WORLD | true with `console.log()`.
