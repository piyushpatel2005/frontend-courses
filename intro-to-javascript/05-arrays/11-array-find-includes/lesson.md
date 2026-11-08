---
title: "Array Find Includes"
slug: array-find-includes
order: 11
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use find() when you want the matching value itself."
  - "Use includes() when you only need a true-or-false answer."
summary: "A ticket-price list raises two different questions: which price first passes a threshold, and is a particular price present?"
seo_title: Array Find and Includes | Introduction to JavaScript
seo_description: "A ticket-price list raises two different questions: which price first passes a threshold, and is a particular price present?"
seo_keywords: javascript, array find and includes, beginner javascript, programming practice
---

# Array find and includes

A ticket-price list raises two different questions: which price first passes a threshold, and is a particular price present?

```javascript run
const loans = ["on time", "overdue", "returned"];
const catalog = ["North Wind", "Sunset", "Rain"];
console.log(loans.find(loan => loan === "overdue"));
console.log(loans.find(loan => loan === "lost"));
console.log(catalog.includes("Sunset"));
console.log(catalog.includes("Snow"));
```

`find()` calls a condition callback and returns the first item for which it returns true. It returns `undefined` if nothing matches. It does not return every match or the item's index.

`includes(value)` answers membership directly with `true` or `false`; it takes a value, not a callback. Neither method changes the array.

Run the block to compare successful and unsuccessful searches. In your editor, "large" means strictly above 50, so 50 itself would not qualify.

## Your Tasks

1. Set `firstLargePrice` using `prices.find()` to select the first price strictly above 50.
2. Set `hasForty` to `prices.includes(40)`.

Edit `script.js`, then Run after each step. The supplied probes show the values being checked; leave them in place. Submit checks the numbered tasks in order. You do not need to write extra checkpoint logs.
