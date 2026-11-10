---
title: "Expense Precedence"
slug: expense-precedence
order: 5
language: javascript
lesson_type: interactive
summary: "Convert text prices and separate repeated charges from a one-time fee."
seo_title: Group and Convert Expense Inputs | JavaScript Console Practice
seo_description: "Convert text prices and separate repeated charges from a one-time fee."
seo_keywords: javascript expense total, Number conversion, operator precedence
---


The travel desk sends prices as strings. Adding raw text can join digits rather than calculate a bill. Run the faulty version first:

```javascript run
const nightlyRate = "40";
const cleaningPerNight = "5";
console.log("raw add:", nightlyRate + cleaningPerNight);
```

`405` is concatenated text, not a price. Convert **each** input, then group the per-night charges before multiplying. Add the one-time booking fee afterwards:

```javascript run
const nightlyRate = Number("40");
const cleaningPerNight = Number("5");
const nights = 2;
const bookingFee = Number("3");
const total = (nightlyRate + cleaningPerNight) * nights + bookingFee;
console.log("nightly:", nightlyRate + cleaningPerNight);
console.log("total:", total);
```

The corrected block prints `nightly: 45` before `total: 93`, so you can check the per-night amount separately from the whole bill. The parentheses matter: without them, only cleaning is multiplied. The booking fee stays outside the grouped product because it is paid once. In the next exercise, apply this model to a different expense report.
