---
title: "Exercise: Score Batch Report"
slug: exercise-score-batch
order: 13
language: javascript
lesson_type: coding
summary: "Practice score batch report with a script-only JavaScript challenge."
seo_title: "Score Batch Report Exercise | Introduction to JavaScript"
seo_description: "Build and test score batch report using JavaScript functions and console checkpoints."
seo_keywords: [javascript, "exercise score batch", programming exercise]
hints:
  - "Read each expected Console line, then build it from your function calls."
---

# Score Batch Report

Turn the rain-routing loop from the demo into a score report for an after-school workshop. A score of 60 or more passes; a score of 90 or more also earns honors. Visit **every** score and count both categories before returning one summary string. Work only in `script.js`; Run shows your checkpoints in the Console.

## A different example

A separate loop over library returns shows the same visit-and-decide rhythm without giving away the score report:

```javascript
const daysLate = [0, 3, 1];
let overdue = 0;
for (const days of daysLate) {
  if (days > 0) overdue += 1;
}
console.log(`Overdue books: ${overdue}`); // Overdue books: 2
```

## Your Tasks

1. Implement `summarizeScores(scores)` to count scores at least 60 as passed and at least 90 as honors, returning `Passed: N | Honors: N`. The provided single-score probe should print `Single score: Passed: 1 | Honors: 0`.
2. Log `Workshop: Passed: 3 | Honors: 1` from `[38,74,91,60]`.
3. Log `Empty batch: Passed: 0 | Honors: 0` from `[]`.
4. Log `Boundaries: Passed: 2 | Honors: 1` from `[59,60,90]` (thresholds are inclusive).

## Section complete

You have finished Decision Desk: a loop handles each entry and a branch decides what it contributes. Try the control-flow quiz, then reuse these decisions inside functions.
