---
title: "Demo: Combined Conditions Before FizzBuzz"
slug: fizzbuzz-rules
order: 2
language: javascript
lesson_type: interactive
summary: Classify a shipment count by testing the combined divisibility case first.
seo_title: "Combined Conditions Before FizzBuzz | Introduction to JavaScript"
seo_description: Practice ordered if branches and the remainder operator before implementing FizzBuzz.
seo_keywords: javascript, interactive demo, practical programming
---

# Demo: Combined Conditions Before FizzBuzz

Before you classify many numbers, classify **one** shipment count. `%` gives the remainder after division: `12 % 4` is `0`, so 12 is divisible by 4. Check the combined case before either single case; otherwise a number divisible by both would stop at the first matching branch.

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

Run it, then try `cartons = 8` and predict the branch before running again. In the next lesson, apply the combined-case-first rule to FizzBuzz; no loop is required yet.
