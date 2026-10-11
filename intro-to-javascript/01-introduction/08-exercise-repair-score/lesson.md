---
title: Repair the Score Calculation
slug: exercise-repair-score
order: 8
language: javascript
lesson_type: coding
summary: "Repair a score subtotal before applying its multiplier."
seo_title: Repair the Score Calculation | JavaScript Coding Exercise
seo_description: "Repair a score subtotal before applying its multiplier."
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

Read the starter's two checkpoint lines before editing. `subtotal` should describe the points before the multiplier; `finalScore` should use that subtotal rather than repeating a different formula. Fix one assignment, Run, and compare its line with the task below. The second line stays wrong until you repair its assignment too.

Edit `script.js`, Run to inspect each checkpoint, then Submit to check the completed tasks. The supplied probes do not need rewriting.

## Your Tasks

1. Correct `subtotal` to add the two point values; the provided probe will log `subtotal: 15`.
2. Correct `finalScore` to multiply `subtotal` by `multiplier`; the provided probe will log `final: 30`.

## Introduction complete

You can inspect types, trace intermediate results, and repair a faulty calculation. Check your understanding in the section quiz.
