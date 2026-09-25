---
title: Array Fill
slug: array-fill
order: 10
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use fill(value, start, end) to replace only part of the array."
  - "Copy the original array before filling it if you want to preserve the source values."
summary: Practice array fill with a focused Starline Awards programming mission.
seo_title: Array Fill | Introduction to JavaScript
seo_description: Learn array fill through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, array fill, beginner javascript, programming practice
---

# Array Fill

## Mission: Setlist Vault

You are the programmer for the Starline Awards, a live showcase for a rising superstar. This stage helps you organize a superstar's songs, venues, and tour moments as ordered collections. Keep the work in `script.js`: this course is about JavaScript programming, not changing page elements.

Run the code and use the Console as your checkpoint. Read the example, make one focused change, then complete the task.

The fill() method is small but useful. It lets learners replace a range of values in one step and makes a good transition from simple indexing to array methods.

## Example

```javascript
const weeklySlots = Array(5).fill("open");
weeklySlots.fill("closed", 3);
console.log(weeklySlots);
```

## Your Task

1. Create filledSeats from ['A', 'B', 'C', 'D', 'E'] so the middle three values become X.
2. Log ["A","X","X","X","E"] with `console.log()`.
