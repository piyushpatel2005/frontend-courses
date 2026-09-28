---
title: Array Reverse and Sort
slug: array-reverse-sort
order: 9
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use a copy like [...numbers] before sorting so you do not lose the original array."
  - "Call reverse() after sorting if you want descending order."
summary: Practice array reverse and sort with a focused Starline Awards programming mission.
seo_title: Array Reverse and Sort | Introduction to JavaScript
seo_description: Learn array reverse and sort through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, array reverse and sort, beginner javascript, programming practice
---

# Array Reverse and Sort

## Mission: Setlist Vault

A leaderboard needs numeric order, but the incoming scores should stay untouched. Sort a copy and reverse another copy in `script.js`; compare both in the Console.

Sorting and reversing are two common array operations that beginners often use together. This lesson keeps the data small and the output explicit so the order is easy to verify.

## Example

```javascript
const raceTimes = [48, 42, 55, 45];
const leaderboard = [...raceTimes].sort((a, b) => a - b);
console.log(leaderboard);
```

## Your Task

1. Create sortedNumbers from [3, 1, 4, 2] so it becomes [1, 2, 3, 4].
2. Create `reversedNumbers` by reversing a copy of `sortedNumbers`, leaving the original sorted; the supplied probe prints both arrays.
