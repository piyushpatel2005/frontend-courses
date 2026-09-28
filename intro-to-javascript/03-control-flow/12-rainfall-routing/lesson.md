---
title: "Demo: Rainfall Routing Walkthrough"
slug: rainfall-routing
order: 12
language: javascript
lesson_type: interactive
summary: "Run a worked example of rainfall routing walkthrough before the practical exercise."
seo_title: "Rainfall Routing Walkthrough | JavaScript Console Demo"
seo_description: "Trace rainfall routing walkthrough step by step with runnable JavaScript console output."
seo_keywords: [javascript, "rainfall routing", interactive example]
---

# Rainfall Routing Walkthrough

A weather desk receives daily rainfall readings. Trace a **loop plus a branch**: every reading is visited once, but only days at or above the warning threshold add to the alert count.

```javascript run
const rainMm = [4, 18, 0, 23, 12];
let alertDays = 0;

for (const mm of rainMm) {
  if (mm >= 15) {
    alertDays += 1;
    console.log(`Alert: ${mm} mm`);
  } else {
    console.log(`Normal: ${mm} mm`);
  }
}
console.log(`Alert days: ${alertDays}`);
```

Run it, then change the threshold from 15 to 20. Predict which day changes category before you run again. `alertDays` starts outside the loop so its value survives each iteration; the `if` chooses which message to log. In the next lesson, use this pattern on a different batch of values.
