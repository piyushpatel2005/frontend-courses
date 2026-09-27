---
title: "Demo: Charging Rack Restock Report"
slug: demo-charging-rack-restock
order: 14
language: javascript
lesson_type: interactive
summary: Trace filtering, numeric sorting, and totaling in a script-only array restock report.
seo_title: Charging Rack Restock Report Demo | Introduction to JavaScript
seo_description: Run an array-of-pairs restock report that filters low supplies, sorts by quantity, and totals missing units.
seo_keywords: javascript array filter sort reduce, array of pairs, restock report
---

# Demo: Charging Rack Restock Report

The stage crew keeps an ordered list of charging racks. Each inner array is a `[label, units]` pair. Find the racks below five units so they can be refilled first.

```javascript run
const racks = [["East", 4], ["West", 8], ["Balcony", 1]];
const target = 5;
const lowRacks = racks.filter((rack) => rack[1] < target);
const fewestFirst = lowRacks.slice().sort((a, b) => a[1] - b[1]);
const labels = fewestFirst.map((rack) => rack[0]);
const unitsToAdd = fewestFirst.reduce((total, rack) => total + target - rack[1], 0);
console.log(`${labels.join(", ")} | ${unitsToAdd}`);
```

`filter()` keeps only racks below the target. The numeric comparator sorts by quantity rather than converting quantities to strings. `slice()` copies the filtered array before `sort()` mutates it; the original `racks` list stays in its original order. `reduce()` starts at zero, so it also handles a day when nothing needs refilling.

## Checkpoint

Run the example and check that Balcony comes before East and that their deficits add to five. The next lesson transfers this pattern to a different stock list; it does not require objects or a web page.
