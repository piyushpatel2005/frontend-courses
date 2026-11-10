---
title: "Build a Score Batch Report"
slug: score-batch-report
order: 16
language: javascript
lesson_type: coding
summary: "Count passing and honors scores independently, then format a batch report."
seo_title: "Score Batch Report Exercise | Introduction to JavaScript"
seo_description: "Count passing and honors scores independently, then format a batch report."
seo_keywords: [javascript, "exercise score batch", programming exercise]
hints:
  - "Start each counter at zero inside its helper, and return after the loop."
---


Turn the rain-routing loop from the demo into a score report for an after-school workshop. A score of 60 or more passes; a score of 90 or more also earns honors. Visit every score to count both categories, then return one summary string. Work only in `script.js`; Run shows your checkpoints in the Console.

## A different example

A separate loop over library returns shows the same visit-and-decide rhythm without giving away the score report:

```javascript run
const daysLate = [0, 3, 1];
let overdue = 0;
for (const days of daysLate) {
  if (days > 0) overdue += 1;
}
console.log(`Overdue books: ${overdue}`);
```

The starter separates the two counts so you can finish and check one outcome at a time. Each helper takes the score list, starts a counter at 0, visits every entry, and returns the counter after the loop. `summarizeScores` then formats the two returned counts. Calling a helper from another function uses the same parentheses as calling it in `console.log`.

Honors scores also count as passes. The categories overlap; do not remove a score from one count because it belongs to the other. These helpers each scan the list once. You could combine the two checks in a single loop later, but keeping them separate here lets you test them independently.

A score exactly at a cutoff qualifies. An empty list should return a count of 0 because the loop has no entries to visit. Keep the report formatting in `summarizeScores`, rather than having the counting helpers print it.

Edit `script.js`, Run to inspect the supplied probes, and Submit to check the tasks.

## Your Tasks

1. Implement `countPassed(scores)` with a loop that counts scores at least 60. The supplied `Passed counts` line should show `3,0,2`.
2. Implement `countHonors(scores)` with a loop that counts scores at least 90. The supplied `Honors counts` line should show `1,0,2`.
3. Implement `summarizeScores(scores)` to return `Passed: N | Honors: N` using both helpers. The supplied report probes cover the workshop, an empty batch, and the thresholds.

## Section complete

You can now classify individual values and scan a batch without stopping at its first entry. The next section explains function inputs, results, and scope in more detail.
