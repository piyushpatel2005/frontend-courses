---
title: "Plan a Pantry Restock"
slug: plan-pantry-restock
order: 15
language: javascript
lesson_type: coding
summary: "Use the charging-rack pattern to plan an event-pantry refill. Each pair is `[name, count]`. The plan itself is `[names, missingTotal]`, an array containing a name list and a number."
seo_title: Pantry Restock Plan Exercise | Introduction to JavaScript
seo_description: "Use the charging-rack pattern to plan an event-pantry refill. Each pair is `[name, count]`. The plan itself is `[names, missingTotal]`, an array containing a name list and a number."
seo_keywords: javascript array exercise, filter sort reduce, stock planning
hints:
  - "Each pair is [name, count]; compare pair[1] with target."
  - "Sort a copy with (a, b) => a[1] - b[1], then sum target - pair[1]."
---


Use the charging-rack pattern to plan an event-pantry refill. Each pair is `[name, count]`. The plan itself is `[names, missingTotal]`, an array containing a name list and a number.

A parking kiosk could use the same shape for its coin tubes:

```javascript run
const tubes = [["quarters", 3], ["dimes", 9]];
const target = 5;
const low = tubes.filter(pair => pair[1] < target);
console.log(low[0][0], target - low[0][1]);
```

That tube needs two coins. Your pantry uses different data, and its plan may include several items. Split the work into helpers so you can inspect each transformation before combining them.

Use a numeric comparator for counts and sort a copy. Read the inner pairs without editing them. `map()` already returns an empty array for no matches; a `reduce()` with initial value 0 supplies the corresponding zero total. You do not need a special empty-result branch if your helpers already handle it.

The probes call helpers with separate fixtures. Keep them in place: they check counts at the target boundary, multi-digit sorting, empty inputs, and preservation of the original order. Assume nonnegative counts, a positive target, and distinct counts when sorting in this exercise.

## Your Tasks

1. Implement `lowStock(stock, target)` to return only pairs whose count is strictly below the target; keep each `[name, count]` pair intact.
2. Implement `orderLowStock(low)` to sort a copy by ascending count, leaving `low` unchanged.
3. Implement `refillNames(ordered)` to return the names in the same order, or `[]` for an empty list.
4. Implement `missingUnits(ordered, target)` to total `target - count` for each pair. Start the reduction at 0 so an empty list totals 0.
5. Implement `planRefills(stock, target)` by combining the four helpers into `[names, missingTotal]`. Full stock returns `[[], 0]`; keep the input unchanged.
6. Log `Tea, Napkins | 6` from `planRefills(pantry, 6)` on its own line.

Edit `script.js`, then Run after each step. The supplied probes show the values being checked; leave them in place. Submit checks the numbered tasks in order. You do not need to write extra checkpoint logs.


## Arrays complete

You can now turn a stock list into a refill plan without changing its input. Take the section quiz, then use objects to give related facts names.
