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

The awards desk needs a readable caption and a quick check for a word in the original text. Work in `script.js` and inspect the Console; there are no page elements to edit.

Strings are values with built-in helper methods. This lesson keeps the practice focused on one transformation and one membership check.

## See string slicing as positions

![Diagram showing `STARLINE`.slice(1, 5) selecting positions 1 through 4 and stopping before 5.](string-slice-positions.svg)

A string has numbered character positions starting at `0`. `slice(start, end)` includes the character at `start` and stops before `end`.

```javascript
const trailName = "river loop";
console.log(trailName.toUpperCase());
console.log(trailName.includes("loop"));
```

`slice()` also returns a new string; it does not change the original. Try `"STARLINE".slice(1, 5)` in the Console to check the diagram. The task below practices two other methods.

## Your Tasks

1. Compute `upperPhrase` from `phrase` with `toUpperCase()`; inspect the supplied uppercase checkpoint.
2. Compute `hasWorld` from `phrase` with `includes("world")`; inspect the supplied membership checkpoint.
3. Log a separate `HELLO WORLD | true` line using the computed values.
