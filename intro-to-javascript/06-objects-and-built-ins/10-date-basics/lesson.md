---
title: Date Basics
slug: date-basics
order: 10
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use getUTCFullYear(), getUTCMonth() + 1, and getUTCDate() for stable results."
  - "Pad the month and day with a leading zero if needed."
summary: Practice date basics with a focused Starline Awards programming mission.
seo_title: Date Basics | Introduction to JavaScript
seo_description: Learn date basics through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, date basics, beginner javascript, programming practice
---

# Date Basics

## Mission: Artist Profile Lab

The event calendar needs the year, month, and day from one fixed timestamp. Extract its UTC parts in `script.js` and inspect the formatted date in the Console.

The previous lesson read a UTC year. Now extract all three UTC calendar parts. `getUTCMonth()` counts January as 0, so add 1 before formatting; a fixed timestamp avoids timezone-dependent results.

## Example

```javascript
const deliveryDate = new Date("2025-11-03T00:00:00Z");
console.log(deliveryDate.getUTCMonth() + 1);
```

## Your Task

1. Create launchDate from 2024-05-06T00:00:00Z and read the UTC year, month, and day into separate variables.
2. Log 2024-05-06 with `console.log()`.

Next, apply objects and built-ins to two real data-processing jobs before the section quiz.
