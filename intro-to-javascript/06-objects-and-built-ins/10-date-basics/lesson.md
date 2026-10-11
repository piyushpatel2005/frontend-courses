---
title: Date Basics
slug: date-basics
order: 10
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "getUTCMonth starts at zero; getUTCDate starts at one."
  - "String(month).padStart(2, \"0\") pads a one-digit month."
summary: "Read separate UTC date parts and format a padded calendar label."
seo_title: Date Basics | Introduction to JavaScript
seo_description: "Extract a fixed timestamp's UTC year, month, and day and format them as YYYY-MM-DD in JavaScript."
seo_keywords: javascript, date basics, beginner javascript, programming practice
---

# Date basics

Turn one fixed timestamp into the calendar label `2024-05-06`. The starter already creates `launchDate`; your job is to read its UTC parts and format them.

```javascript
const deliveryDate = new Date("2025-11-03T00:00:00Z");
console.log(deliveryDate.getUTCMonth() + 1); // 11
console.log(deliveryDate.getUTCDate()); // 3
```

`getUTCFullYear()` returns the year. `getUTCMonth()` returns a zero-based month: January is `0` and December is `11`, so add one for a calendar label. `getUTCDate()` returns the day of the month, starting at `1`. It is different from `getUTCDay()`, which returns the day of the week.

Use UTC getters together with the explicit `Z` timestamp. Local getters such as `getMonth()` may describe a different calendar day depending on the computer's timezone. Avoid locale-dependent date text for this fixed result.

To make a two-digit part, convert it to text and pad on the left: `String(3).padStart(2, "0")` returns `"03"`. A part already two characters long, such as `"11"`, stays unchanged. This small string method will help you format the final line.

Edit `script.js`. Each date part has its own supplied check. Run to inspect progress, then Submit.

## Your Tasks

1. Read `launchDate`'s UTC year into `year`.
2. Read its UTC month into `month`, adding one to make it a calendar month.
3. Read its UTC day of the month into `day`.
4. Log `2024-05-06` using the computed parts, padding the month and day to two digits.

Next, combine object lookups and collections in two data-processing exercises.
