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

You are the programmer for the Starline Awards, a live showcase for a rising superstar. This stage helps you model an artist profile and use JavaScript's built-in tools to keep it current. Keep the work in `script.js`: this course is about JavaScript programming, not changing page elements.

Run the code and use the Console as your checkpoint. Read the example, make one focused change, then complete the task.

Dates can feel noisy at first, so this lesson keeps them deterministic. A fixed UTC date lets beginners practice reading the year, month, and day without timezone surprises.

## Example

```javascript
const deliveryDate = new Date("2025-11-03T00:00:00Z");
console.log(deliveryDate.getUTCMonth() + 1);
```

## Your Task

1. Create launchDate from 2024-05-06T00:00:00Z and read the UTC year, month, and day into separate variables.
2. Log 2024-05-06 with `console.log()`.

## Artist Profile Lab complete

You can model related facts and use JavaScript helpers for common jobs. Take the section quiz, then work precisely with text.
