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
summary: Practice data types with a focused Starline Awards programming mission.
seo_title: Data Types | Introduction to JavaScript
seo_description: Learn data types through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, data types, beginner javascript, programming practice
---

# Data Types

## Mission: Signal Launch

A check-in record has text, a number, and a true/false flag. Compare the types before formatting a summary.

JavaScript values have types, and beginners need to see that a string, number, and boolean behave differently. This lesson turns that idea into a small typed summary.

## Example

```javascript
const petName = "Nori";
const petAge = 2;
const isAdopted = false;
console.log(typeof petName, typeof petAge, typeof isAdopted);
```

## Your Task

1. Set `studentName` to `"Mia"`; the provided probe will log `name: Mia (string)`.
2. Set `studentAge` to `14`; the provided probe will log `age: 14 (number)`.
3. Set `isStudent` to `true`; the provided probe will log `student: true (boolean)`.
4. Log the typed summary `Mia:string | 14:number | true:boolean` on its own line.
