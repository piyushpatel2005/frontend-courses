---
title: Repair the Score Calculation
slug: exercise-repair-score
order: 8
language: javascript
lesson_type: coding
summary: Find and repair a multiplier bug in a score report.
seo_title: Repair the Score Calculation | JavaScript Coding Exercise
seo_description: Use console checkpoints to debug a bonus score that should be multiplied along with base points.
seo_keywords: javascript score debugging, arithmetic grouping, console output
hints:
  - Inspect the intermediate values in the Console before changing the final line.
---

# Repair the Score Calculation

In the preceding trace demo, a fixed fee was accidentally multiplied. Here the opposite happened: the awards scoreboard applies a multiplier to base points but **forgets the bonus**. The base is 12, the bonus is 3, and the multiplier is 2; the corrected score is 30.

For comparison, a separate practice score could be grouped like this:

```javascript
const laps = 4;
const finishBonus = 2;
const doubled = (laps + finishBonus) * 2;
console.log(doubled); // 12
```

## Your Tasks

1. Correct `subtotal` to add the two point values; the provided probe will log `subtotal: 15`.
2. Correct `finalScore` to multiply `subtotal` by `multiplier`; the provided probe will log `final: 30`.

## Signal Launch complete

You can inspect types, trace intermediate results, and repair a faulty calculation. Check your understanding in the section quiz.
