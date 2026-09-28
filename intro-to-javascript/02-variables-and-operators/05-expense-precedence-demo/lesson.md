---
title: Group and Convert Expense Inputs
slug: expense-precedence-demo
order: 5
language: javascript
lesson_type: interactive
summary: Convert numeric text and group a per-unit fee before multiplying.
seo_title: Group and Convert Expense Inputs | JavaScript Console Practice
seo_description: Run a worked expense total with Number conversion, parentheses, and a one-time charge.
seo_keywords: javascript expense total, Number conversion, operator precedence
---

# Group and Convert Expense Inputs

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

The parentheses matter: without them, only cleaning is multiplied. In the next exercise, apply this model to a different expense report.
