---
title: Inspect Values in the Console
slug: console-value-inspection
order: 6
language: javascript
lesson_type: interactive
summary: "Compare the value and type of text and numeric check-in fields."
seo_title: Inspect Values in the Console | JavaScript Console Practice
seo_description: "Compare the value and type of text and numeric check-in fields."
seo_keywords: javascript console inspection, typeof values, debugging input
---

# Inspect Values in the Console

The check-in desk has two fields that look like counts. Before adding anything, inspect what JavaScript actually received. `console.log()` can print a label beside a value; `typeof` tells you its primitive type. A quoted digit is still text.

Run this first checkpoint:

```javascript run
const aisle = "C";
const seats = 12;
console.log("aisle:", aisle, typeof aisle);
console.log("seats:", seats, typeof seats);
```

The Console shows the field, its value, and its type. Now compare two values that look alike but are not interchangeable:

```javascript run
const scannedCount = "12";
const verifiedCount = 12;
console.log("scanned:", scannedCount, typeof scannedCount);
console.log("verified:", verifiedCount, typeof verifiedCount);
console.log("same type:", typeof scannedCount === typeof verifiedCount);
```

The `===` operator asks whether two values are exactly equal without converting their types. Here it compares the two type labels, `"string"` and `"number"`, rather than adding the counts. The last line is `false`. You have not changed either value; you have diagnosed the mismatch. In the next exercise you will inspect a different set of check-in fields before reporting them.
