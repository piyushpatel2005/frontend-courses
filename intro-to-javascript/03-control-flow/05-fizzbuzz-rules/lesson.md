---
title: "Combined Conditions Before FizzBuzz"
slug: fizzbuzz-rules
order: 5
language: javascript
lesson_type: interactive
summary: "Test a combined divisibility rule before its individual cases."
seo_title: "Combined Conditions Before FizzBuzz | Introduction to JavaScript"
seo_description: "Test a combined divisibility rule before its individual cases."
seo_keywords: javascript, interactive demo, practical programming
---

# Combined Conditions Before FizzBuzz

Before you classify many numbers, classify **one** shipment count. `%` gives the remainder after division: `12 % 4` is `0`, so 12 is divisible by 4. `=== 0` checks whether that remainder is exactly zero. Check the combined case before either single case; otherwise a number divisible by both would stop at the first matching branch.

```javascript run
const cartons = 12;
if (cartons % 12 === 0) {
  console.log("Pack in fours and threes");
} else if (cartons % 4 === 0) {
  console.log("Pack in fours");
} else if (cartons % 3 === 0) {
  console.log("Pack in threes");
} else {
  console.log("Pack individually");
}
```

The first block takes the combined branch. Predict the result for 8 cartons, then run this separate comparison:

```javascript run
const cartons = 8;
if (cartons % 12 === 0) {
  console.log("Pack in fours and threes");
} else if (cartons % 4 === 0) {
  console.log("Pack in fours");
} else if (cartons % 3 === 0) {
  console.log("Pack in threes");
} else {
  console.log("Pack individually");
}
```

In the next lesson, apply the combined-case-first rule to FizzBuzz; no loop is required yet.
