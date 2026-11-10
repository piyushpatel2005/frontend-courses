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
summary: "A seating row needs several adjacent seats marked unavailable. `fill(value, start, end)` replaces existing entries from the start index up to, but not including, the end index."
seo_title: Array Fill | Introduction to JavaScript
seo_description: "A seating row needs several adjacent seats marked unavailable. `fill(value, start, end)` replaces existing entries from the start index up to, but not including, the end index."
seo_keywords: javascript, array fill, beginner javascript, programming practice
---


A seating row needs several adjacent seats marked unavailable. `fill(value, start, end)` replaces existing entries from the start index up to, but not including, the end index.

```javascript run
const weeklySlots = ["open", "open", "open", "open", "open"];
const updated = weeklySlots.slice();
updated.fill("closed", 3);
console.log(JSON.stringify(updated));
console.log(JSON.stringify(weeklySlots));
```

When the end is omitted, filling continues to the array's end. Omitting both indices fills the whole array. `fill()` changes the array it is called on and returns that same array, so copy first to preserve the source.

Run the example: indices 3 and 4 change, while `weeklySlots` stays untouched. For the editor task, indices 1 through 3 are the middle three positions; the end argument must therefore be 4.

Use a string for the replacement here. Filling with an array would place the same nested array reference in every filled position, not create separate nested copies.

## Your Tasks

1. Set `filledSeats` to a copy of `seats` with indices 1, 2, and 3 replaced by `"X"`, using `fill("X", 1, 4)`. Keep `seats` unchanged.
2. Log `JSON.stringify(filledSeats)` on its own line to show `["A","X","X","X","E"]`.

Edit `script.js`, then Run after each step. The supplied probes show the values being checked; leave them in place. Submit checks the numbered tasks in order. You do not need to write extra checkpoint logs.
