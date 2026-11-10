---
title: "Math And Date"
slug: math-and-date
order: 11
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Math.ceil moves toward positive infinity."
  - "Use the explicit timestamp and getUTCFullYear, not the current date."
summary: "Round a quantity upward and read the UTC year of a fixed timestamp."
seo_title: Math and Date | Introduction to JavaScript
seo_description: "Use Math.ceil and Date.getUTCFullYear for predictable JavaScript output."
seo_keywords: javascript, math and date, beginner javascript, programming practice
---


A crew rounds a supply quantity upward and reads the year of a fixed launch date. Both operations have built-in helpers.

`Math.round()` chooses the nearest integer. `Math.ceil()` moves upward toward positive infinity: `Math.ceil(4.2)` is `5`, while `Math.ceil(-4.2)` is `-4`. `Math.floor()` moves downward. Math is already available; you do not create it with `new`.

```javascript run
const cafeBill = 12.4;
const roundedBill = Math.round(cafeBill);
const eventDate = new Date("2025-11-03T00:00:00Z");
console.log(roundedBill, eventDate.getUTCFullYear());
```

`new Date(timestamp)` creates a Date for a particular instant. In this timestamp, `T` separates the date and time, and `Z` means UTC. UTC gives everyone the same time reference, independent of the computer's local timezone. `getUTCFullYear()` reads the year in that reference.

Using `new Date()` without an argument would read the current time. That is useful for a clock, but not for this exercise: the expected result should stay the same tomorrow and in another timezone.

Edit `script.js` and leave the supplied checks in place. Run after each change; Submit checks these outcomes in order.

## Your Tasks

1. Set `roundedUp` with `Math.ceil(4.2)`.
2. Set `launchYear` to the UTC year of `new Date("2024-05-06T00:00:00Z")`.
3. Log `5 | 2024` on its own line using the two computed values.
