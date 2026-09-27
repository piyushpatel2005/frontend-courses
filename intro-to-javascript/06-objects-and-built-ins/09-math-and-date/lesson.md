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

For a fixed event date, the crew needs one rounded quantity and one calendar year. Use built-in `Math` and `Date` methods and check both in the Console.

Built-in objects save you from rewriting common utilities. This lesson combines one Math method with one Date method and keeps the output predictable for beginners.

## Example

```javascript
const cafeBill = 12.4;
const roundedBill = Math.round(cafeBill);
const eventDate = new Date("2025-11-03T00:00:00Z");
console.log(roundedBill, eventDate.getUTCFullYear());
```

## Your Task

1. Create `roundedUp` with `Math.ceil(4.2)`.
2. Create `launchYear` using the UTC year of `new Date('2024-05-06T00:00:00Z')`.
3. Log `5 | 2024` on its own Console line.
