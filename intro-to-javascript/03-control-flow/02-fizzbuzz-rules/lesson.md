---
title: "Demo: FizzBuzz Decisions"
slug: fizzbuzz-rules
order: 2
language: javascript
lesson_type: interactive
summary: Run a worked JavaScript demo before attempting the related practical challenge.
seo_title: "Demo: FizzBuzz Decisions | Introduction to JavaScript"
seo_description: Inspect a runnable JavaScript demonstration before the practical coding challenge.
seo_keywords: javascript, interactive demo, practical programming
---

# Demo: FizzBuzz Decisions

This is the worked run before your practical challenge. The order matters: check divisibility by both 3 and 5 before either individual rule.

```javascript run
for (let number = 1; number <= 15; number++) {
  if (number % 15 === 0) {
    console.log("FizzBuzz");
  } else if (number % 3 === 0) {
    console.log("Fizz");
  } else if (number % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(number);
  }
}
```

## What to notice

Run the example once, then trace the first two steps by hand. The next lesson gives you the same idea with a fresh problem to solve.
