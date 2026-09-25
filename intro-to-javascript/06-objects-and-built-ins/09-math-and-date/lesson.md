---
title: Math and Date
slug: math-and-date
order: 9
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use Math.ceil(4.2) for the rounded-up value."
  - "Use a fixed date string so the year is deterministic in tests."
summary: Practice math and date with a focused Starline Awards programming mission.
seo_title: Math and Date | Introduction to JavaScript
seo_description: Learn math and date through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, math and date, beginner javascript, programming practice
---

# Math and Date

## Mission: Artist Profile Lab

You are the programmer for the Starline Awards, a live showcase for a rising superstar. This stage helps you model an artist profile and use JavaScript's built-in tools to keep it current. Keep the work in `script.js`: this course is about JavaScript programming, not changing page elements.

Run the code and use the Console as your checkpoint. Read the example, make one focused change, then complete the task.

Built-in objects save you from rewriting common utilities. This lesson combines one Math method with one Date method and keeps the output predictable for beginners.

## Example

```javascript
const cafeBill = 12.4;
const roundedBill = Math.round(cafeBill);
const eventDate = new Date("2025-11-03T00:00:00Z");
console.log(roundedBill, eventDate.getUTCFullYear());
```

## Your Task

1. Create roundedUp with Math.ceil(4.2) and launchYear from new Date('2024-05-06T00:00:00Z').
2. Log 5 | 2024 with `console.log()`.
