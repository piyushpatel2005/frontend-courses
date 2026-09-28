---
title: "Exercise: Pantry Restock Plan"
slug: exercise-pantry-restock
order: 15
language: javascript
lesson_type: coding
summary: Build an array-of-pairs pantry restock plan without changing the incoming list.
seo_title: Pantry Restock Plan Exercise | Introduction to JavaScript
seo_description: Practice filtering, numeric sorting, mapping, and reducing arrays to prioritize a pantry refill.
seo_keywords: javascript array exercise, filter sort reduce, stock planning
hints:
  - "Each pair is [name, count]; compare pair[1] with target."
  - "Sort a copy with (a, b) => a[1] - b[1], then sum target - pair[1]."
---

# Exercise: Pantry Restock Plan

The charging-rack demo selected understocked racks, put the lowest count first, and added up the missing units. Now make a plan for the event pantry using only arrays in `script.js`.

For example, a **parking kiosk** could represent coin tubes as `[["quarters", 3], ["dimes", 9]]`. With a target of five, its plan would be `[["quarters"], 2]`: the names to refill, then the total missing coins. Your pantry data below is different.

## Worked example

A smaller coin-tube example shows the pair structure and one missing amount:

```javascript
const tubes = [["quarters", 3], ["dimes", 9]];
const target = 5;
const low = tubes.filter(([, count]) => count < target);
console.log(low[0][0], target - low[0][1]); // quarters 2
```

## Your Tasks

1. Write `lowStock(stock, target)` to return only `[name, count]` pairs below the target.
2. Write `orderLowStock(low)` to return a new array sorted by ascending count.
3. Write `refillNames(ordered)` to extract the names in order.
4. Write `missingUnits(ordered, target)` to total each pair's deficit.
5. Write `planRefills(stock, target)` to combine those helpers and return `[names, missingTotal]`.
6. Make `planRefills()` return `[[], 0]` when nothing needs refilling.
7. Keep the input array in its original order after calling `planRefills()`.
8. Log `Tea, Napkins | 6` from `planRefills(pantry, 6)` on its own Console line.

## Arrays complete

You can now turn an ordered stock list into a prioritized, checkable action plan. Take the section quiz, then add named facts with objects.
