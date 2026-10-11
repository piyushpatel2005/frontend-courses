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
summary: "A leaderboard needs numeric order, but the incoming scores should stay untouched. Both `sort()` and `reverse()` mutate the array on which you call them. Copy first when you need to keep an earlier order."
seo_title: Array Reverse and Sort | Introduction to JavaScript
seo_description: "A leaderboard needs numeric order, but the incoming scores should stay untouched. Both `sort()` and `reverse()` mutate the array on which you call them. Copy first when you need to keep an earlier order."
seo_keywords: javascript, array reverse and sort, beginner javascript, programming practice
---

# Array reverse and sort

A leaderboard needs numeric order, but the incoming scores should stay untouched. Both `sort()` and `reverse()` mutate the array on which you call them. Copy first when you need to keep an earlier order.

```javascript run
const raceTimes = [8, 42, 15];
const alphabetical = raceTimes.slice().sort();
const leaderboard = raceTimes.slice().sort((a, b) => a - b);
console.log(JSON.stringify(alphabetical));
console.log(JSON.stringify(leaderboard));
console.log(JSON.stringify(leaderboard.slice().reverse()));
console.log(JSON.stringify(raceTimes));
```

Without a comparator, `sort()` compares string spellings, so 15 comes before 8. The numeric comparator `(a, b) => a - b` returns a negative number when `a` should come first, zero when they tie, and a positive number when `b` should come first.

Run the block and compare the two sorts. `reverse()` flips the current order; it does not decide which numbers are greater. Reversing a numerically sorted copy produces descending order.

`slice()` is the copy operation you already know. You may also see `[...numbers]`: inside an array literal, spread inserts each source item into a new array. This differs from the destructuring rest pattern, which collects values into a variable.

## Your Tasks

1. Set `sortedNumbers` to a copy of `numbers` sorted numerically with `(a, b) => a - b`. Keep `numbers` unchanged.
2. Set `reversedNumbers` to a reversed copy of `sortedNumbers`; leave `sortedNumbers` in ascending order.

Edit `script.js`, then Run after each step. The supplied probes show the values being checked; leave them in place. Submit checks the numbered tasks in order. You do not need to write extra checkpoint logs.
