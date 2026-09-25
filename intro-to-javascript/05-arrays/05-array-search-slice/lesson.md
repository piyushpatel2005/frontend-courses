---
title: Array Search and Slice
slug: array-search-slice
order: 5
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use slice(1, 4) to get the middle three values from a five-item array."
  - "Use concat() to join the sliced array with [10, 11]."
summary: Practice array search and slice with a focused Starline Awards programming mission.
seo_title: Array Search and Slice | Introduction to JavaScript
seo_description: Learn array search and slice through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, array search and slice, beginner javascript, programming practice
---

# Array Search and Slice

## Mission: Setlist Vault

You are the programmer for the Starline Awards, a live showcase for a rising superstar. This stage helps you organize a superstar's songs, venues, and tour moments as ordered collections. Keep the work in `script.js`: this course is about JavaScript programming, not changing page elements.

Run the code and use the Console as your checkpoint. Read the example, make one focused change, then complete the task.

Some array methods return new arrays instead of changing the original. This lesson uses slice() and concat() to practice that non-mutating pattern.

## Example

```javascript
const temperatures = [12, 14, 15, 17, 16, 13, 11];
const warmStretch = temperatures.slice(2, 5);
console.log(warmStretch);
```

## Your Task

1. Create middleNumbers by slicing [1, 2, 3, 4, 5] so it contains [2, 3, 4].
2. Create combinedNumbers by concatenating [10, 11] and display [2,3,4,10,11] in #output.
