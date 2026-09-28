---
title: "Demo: Supply Bin Audit"
slug: demo-supply-bin-audit
order: 11
language: javascript
lesson_type: interactive
summary: Inspect a computed property lookup and Object.entries audit of a supply count record.
seo_title: Supply Bin Object Audit Demo | Introduction to JavaScript
seo_description: Run a JavaScript object audit using bracket notation for dynamic keys and Object.entries for low counts.
seo_keywords: javascript object entries, bracket notation, dynamic object keys
---

# Demo: Supply Bin Audit

The crew labels supply bins by code. An object associates each code with a count, so a requested code can be looked up without searching an array.

```javascript run
const bins = { cable: 2, adapter: 7, clip: 1 };
const requestedCode = "adapter";
const lowCodes = Object.entries(bins)
  .filter(([code, count]) => count < 3)
  .map(([code]) => code);
console.log(`${bins[requestedCode]} | ${lowCodes.join(", ")}`);
```

`bins[requestedCode]` uses the value of the variable as its property key; `bins.requestedCode` would look for a literal key with that spelling. `Object.entries(bins)` turns the record into `[key, value]` pairs so `filter()` and `map()` can find bins below three.

## Checkpoint

Run this code, then change `requestedCode` to `clip` and run again. The count changes, while the low-bin list stays the same. In the exercise you will audit a separate volunteer schedule.
