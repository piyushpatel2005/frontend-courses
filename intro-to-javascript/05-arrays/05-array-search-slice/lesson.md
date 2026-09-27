---
title: Array Slice and Concat
slug: array-search-slice
order: 5
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use slice(1, 4) to get the middle three values from a five-item array."
  - "Use concat() to join the sliced array with [10, 11]."
summary: Practice copying a range and combining arrays with slice and concat.
seo_title: Array Slice and Concat | Introduction to JavaScript
seo_description: Copy an array range with slice and combine it with new values using concat.
seo_keywords: javascript, array slice, array concat, beginner javascript
---

# Array Slice and Concat

## Mission: Setlist Vault

A schedule sometimes needs a short middle segment, then a few extra entries. Use `slice()` and `concat()` without changing the source array; inspect the result in the Console.

Unlike `push()` and `pop()`, `slice(start, end)` returns a new array without changing the original. It includes `start` but excludes `end`; `concat()` also returns a new array. Here you will use both.

## Example

```javascript
const temperatures = [12, 14, 15, 17, 16, 13, 11];
const warmStretch = temperatures.slice(2, 5);
console.log(warmStretch);
```

## Your Task

1. Create middleNumbers by slicing [1, 2, 3, 4, 5] so it contains [2, 3, 4].
2. Create `combinedNumbers` by concatenating `[10, 11]` to `middleNumbers`, producing `[2,3,4,10,11]` in the supplied probe.
