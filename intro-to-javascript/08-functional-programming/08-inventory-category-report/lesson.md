---
title: "Inventory Category Report"
slug: inventory-category-report
order: 8
language: javascript
lesson_type: coding
summary: Extend the completed inventory project with category counts while preserving its earlier behavior.
seo_title: Inventory Category Report | Introduction to JavaScript
seo_description: Reuse completed inventory helpers to produce a category count report without resetting earlier project work.
seo_keywords: [javascript, cumulative project, object entries, category report]
hints:
  - Object.entries(byCategory(items)) supplies each category and its record array.
---

# Extend the inventory report

Your inventory project already selects stock, orders expensive products, totals value, and groups records by category. This starter retains that completed state. Add a category summary rather than rebuilding the earlier helpers.

The grouping helper returns an object whose keys are categories and whose values are arrays of records. `Object.entries()` gives you one `[category, records]` pair at a time. Read `records.length` to count each group; do not add the stock quantities, which answer a different question.

```javascript run
const clubs = { art: ["Ari", "Bea"], music: ["Chen"] };
const labels = Object.entries(clubs).map(
  ([club, members]) => `${club}: ${members.length}`
);
console.log(labels.join(" | "));
```

For your inventory, preserve the category's first-seen order. Each label is `Category: COUNT`. Empty input gives an empty array, and the reporter should still log the prefix `Category totals: ` followed by no labels.

Keep the previous project's code and checkpoint logs. If you carried over personalized product names, keep them too: these new checks use their own records instead of depending on a fixed catalog. Edit only the two marked functions. Run to see the earlier report alongside the new category line; Submit checks the two additions.

## Your Tasks

1. Complete `categoryLabels(items)` by calling `byCategory(items)`, then mapping its entries to `Category: COUNT` strings without changing the input.
2. Complete `reportCategories(items)` to log `Category totals: ` followed by those labels joined with `" | "`. The startup calls are supplied, including an empty input.
