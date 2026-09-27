---
title: "Exercise: Summarize Delivered Parcels"
slug: exercise-delivery-summary
order: 11
language: javascript
lesson_type: coding
summary: Compose filter, map, and reduce into a reusable delivered-parcel summary.
seo_title: "Delivery Summary Map Filter Reduce Exercise | Introduction to JavaScript"
seo_description: Build a JavaScript parcel summary that filters delivered records, maps grams to kilograms, and reduces to a total.
seo_keywords: [javascript array pipeline exercise, filter map reduce, delivery report]
hints:
  - "Filter for delivered records; map each weightGrams to kilograms by dividing by 1000."
  - "Reduce from 0 so there is a numeric total even when nothing was delivered."
---

# Prepare a delivery summary

The bike-ride demo produced a single total. A parcel desk needs a reusable report of **count and kilograms delivered**, ignoring parcels that are still in transit.

`summaryFor(deliveries)` must return `{ count, totalKg }` without changing the input array. Use `filter`, `map`, and `reduce` to compose the calculation. `formatSummary(summary)` turns that result into one Console-friendly sentence.

## Worked example

This unrelated activity report composes the same filter → map → reduce pattern:

```javascript
const readings = [{ active: true, minutes: 20 }, { active: false, minutes: 40 }];
const minutes = readings.filter(item => item.active)
  .map(item => item.minutes)
  .reduce((total, value) => total + value, 0);
console.log(minutes); // 20
```

## Your Tasks

1. Complete `summaryFor(deliveries)` with `filter`, `map`, and `reduce` (initial sum 0) to count delivered parcels and total their kilograms; empty input yields `{ count: 0, totalKg: 0 }`.
2. Complete `formatSummary(summary)` to return a sentence using the supplied `count` and `totalKg` fields.
3. Log `formatSummary(summaryFor(deliveries))` on its own line.

## Functional programming complete

You can now compose callbacks and array transformations into reports. Take the section quiz to review the patterns.
