---
title: Data Types
slug: data-types
order: 3
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use a string for the name, a number for the age, and a boolean for the student flag."
  - "Use typeof value to get the type label for each variable."
summary: "Distinguish text, numbers, and booleans with visible type checkpoints."
seo_title: Data Types | Introduction to JavaScript
seo_description: "Distinguish text, numbers, and booleans with visible type checkpoints."
seo_keywords: javascript, data types, beginner javascript, programming practice
---

# Data Types


A check-in record has text, a number, and a true/false flag. Compare the types before formatting a summary.

A string holds text and needs quotes. A number can participate in arithmetic without conversion. A boolean is one of the two unquoted values `true` and `false`; it records a yes/no fact. `"true"` would be a string instead.

`typeof value` produces a text label such as `"number"`. The starter prints this label beside each value, so `14` and `"14"` are visibly different even though their digits look the same. Keep the supplied logs and replace only the placeholder values for the first three tasks.

For the final summary, insert each value and its `typeof` result into a backtick string. The colon and ` | ` separators are ordinary text inside that string.

## Example

```javascript
const petName = "Nori";
const petAge = 2;
const isAdopted = false;
console.log(typeof petName, typeof petAge, typeof isAdopted);
```

Edit `script.js`, Run to inspect each checkpoint, then Submit to check the completed tasks. The supplied probes do not need rewriting.

## Your Task

1. Set `studentName` to `"Mia"`; the provided probe will log `name: Mia (string)`.
2. Set `studentAge` to `14`; the provided probe will log `age: 14 (number)`.
3. Set `isStudent` to `true`; the provided probe will log `student: true (boolean)`.
4. Log the typed summary `Mia:string | 14:number | true:boolean` on its own line.
