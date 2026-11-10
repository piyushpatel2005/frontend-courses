---
title: "Array Search Slice"
slug: array-search-slice
order: 5
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use slice(1, 4) to get the middle three values from a five-item array."
  - "Use concat() to join the sliced array with [10, 11]."
summary: "A schedule may need a short middle segment followed by extra entries. `slice(start, end)` copies a range: it includes the start index and stops before the end index."
seo_title: Array Slice and Concat | Introduction to JavaScript
seo_description: "A schedule may need a short middle segment followed by extra entries. `slice(start, end)` copies a range: it includes the start index and stops before the end index."
seo_keywords: javascript, array slice, array concat, beginner javascript
---


A schedule may need a short middle segment followed by extra entries. `slice(start, end)` copies a range: it includes the start index and stops before the end index.

```javascript run
const temperatures = [12, 14, 15, 17, 16, 13, 11];
const warmStretch = temperatures.slice(2, 5);
const extended = warmStretch.concat([18, 19]);
console.log(JSON.stringify(warmStretch));
console.log(JSON.stringify(extended));
console.log(JSON.stringify(temperatures));
```

Run the block. Indices 2, 3, and 4 give `[15,17,16]`; index 5 is excluded. `concat()` returns a new array with the additional values. Neither operation changes its source.

Calling `slice()` with no arguments copies the whole array. It is a **shallow copy**: it creates a new outer array, but any nested arrays remain shared. That distinction will matter when you work with pairs later. For these number lists, a copy gives you independent positions to replace.

## Your Tasks

1. Set `middleNumbers` to `baseNumbers.slice(1, 4)` to copy `[2,3,4]` without changing `baseNumbers`.
2. Set `combinedNumbers` to `middleNumbers.concat([10, 11])`, preserving the middle array.

Edit `script.js`, then Run after each step. The supplied probes show the values being checked; leave them in place. Submit checks the numbered tasks in order. You do not need to write extra checkpoint logs.
