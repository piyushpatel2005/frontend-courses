---
title: "Exercise: Summarize Delivered Parcels"
slug: exercise-delivery-summary
order: 11
language: javascript
lesson_type: coding
summary: "The ride demo produced one total. The parcel desk needs a count and a weight total, so you will build the summary in small steps before formatting it."
seo_title: "Delivery Summary Map Filter Reduce Exercise | Introduction to JavaScript"
seo_description: "The ride demo produced one total. The parcel desk needs a count and a weight total, so you will build the summary in small steps before formatting it."
seo_keywords: [javascript array pipeline exercise, filter map reduce, delivery report]
hints:
  - "Filter for delivered records; map each weightGrams to kilograms by dividing by 1000."
  - "Reduce from 0 so there is a numeric total even when nothing was delivered."
---

# Prepare a delivery summary

The ride demo produced one total. The parcel desk needs a count and a weight total, so you will build the summary in small steps before formatting it.

Filter for `status === "delivered"`, then map `weightGrams` to kilograms by dividing by 1000. Reduce those kilograms from 0. Keep the input records unchanged. After those helpers work, connect them in `summaryFor` and return `{ count, totalKg }`; the braces create an object with two named results.

## Worked example

This unrelated activity report composes the same filter → map → reduce pattern:

```javascript
const readings = [{ active: true, minutes: 20 }, { active: false, minutes: 40 }];
const minutes = readings.filter(item => item.active)
  .map(item => item.minutes)
  .reduce((total, value) => total + value, 0);
console.log(minutes); // 20
```

Edit `script.js`, then use **Run** to inspect the supplied checkpoints. Use **Submit** to check your tasks in order. Keep the supplied probes; change only the requested definitions and final logs.

## Your Tasks

1. Use `filter` in `deliveredOnly(deliveries)` to return only delivered records without changing the input.
2. Use `map` in `weightsInKg(deliveries)` to return their weights in kilograms.
3. Use `reduce` in `sumWeights(weights)` to total the numbers, starting from 0.
4. Compose the three helpers in `summaryFor(deliveries)` to return `{ count, totalKg }`, with zeros for empty input.
5. Return `Delivered COUNT parcels weighing WEIGHT kg` from `formatSummary(summary)`, inserting its `count` and `totalKg`.
6. Log `formatSummary(summaryFor(deliveries))` on its own line.

## Functional programming complete

You can now compose callbacks and array transformations into reports. Take the section quiz to review the patterns.
