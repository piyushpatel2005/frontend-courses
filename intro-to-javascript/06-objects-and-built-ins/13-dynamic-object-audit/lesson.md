---
title: "Dynamic Object Audit"
slug: dynamic-object-audit
order: 13
language: javascript
lesson_type: interactive
summary: Inspect a computed property lookup and Object.entries audit of a supply count record.
seo_title: Supply Bin Object Audit Demo | Introduction to JavaScript
seo_description: Run a JavaScript object audit using bracket notation for dynamic keys and Object.entries for low counts.
seo_keywords: javascript object entries, bracket notation, dynamic object keys
---


The crew labels supply bins by code. A variable holds the code someone requests; bracket notation uses that variable's value as the lookup key.

`bins[requestedCode]` reads the selected bin. `bins.requestedCode` would instead look for a property literally named `requestedCode`.

```javascript run
const bins = { cable: 2, adapter: 7, clip: 1 };
const requestedCode = "adapter";
const lowCodes = Object.entries(bins)
  .filter(([code, count]) => count < 3)
  .map(([code]) => code);
console.log(`${bins[requestedCode]} | ${lowCodes.join(", ")}`);
```

`Object.entries(bins)` creates pairs such as `["cable", 2]`. The callback parameter `[code, count]` destructures one pair into two names. `filter()` keeps pairs whose count is below three; `map()` then keeps only their codes. `join(", ")` formats the resulting array for the Console.

Before running, predict the selected count and the two low-bin names. Check your prediction against `7 | cable, clip`. If the requested code were `clip`, only the first part would change to `1`; the low-bin list is a separate calculation.

The next exercise uses this lookup-and-scan pattern for volunteer shifts, including a missing key and a present count of zero.
