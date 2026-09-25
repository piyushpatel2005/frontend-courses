---
title: "Demo: Number Guess Loop"
slug: guessing-loop
order: 10
language: javascript
lesson_type: interactive
summary: Run a worked JavaScript demo before attempting the related practical challenge.
seo_title: "Demo: Number Guess Loop | Introduction to JavaScript"
seo_description: Inspect a runnable JavaScript demonstration before the practical coding challenge.
seo_keywords: javascript, interactive demo, practical programming
---

# Demo: Number Guess Loop

This is the worked run before your practical challenge. A loop can inspect guesses one at a time. `break` stops immediately once the program has found the answer.

```javascript run
const secret = 7;
const guesses = [3, 9, 7, 5];

for (const guess of guesses) {
  if (guess === secret) {
    console.log("Correct: 7");
    break;
  }
  console.log(`Try again: ${guess}`);
}
```

## What to notice

Run the example once, then trace the first two steps by hand. The next lesson gives you the same idea with a fresh problem to solve.
