---
title: "Demo: Rainfall Routing Walkthrough"
slug: rainfall-routing
order: 12
language: javascript
lesson_type: interactive
summary: "Compare two rainfall thresholds while keeping the readings unchanged."
seo_title: "Rainfall Routing Walkthrough | JavaScript Console Demo"
seo_description: "Compare two rainfall thresholds while keeping the readings unchanged."
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

The first block counts 18 and 23 as alert days. This second example raises the threshold to 20; predict which reading changes category:

```javascript run
const rainMm = [4, 18, 0, 23, 12];
let alertDays = 0;
for (const mm of rainMm) {
  if (mm >= 20) {
    alertDays += 1;
    console.log(`Alert: ${mm} mm`);
  } else {
    console.log(`Normal: ${mm} mm`);
  }
}
console.log(`Alert days: ${alertDays}`);
```

`alertDays` starts outside the loop so its value survives each iteration; the `if` chooses which message to log. In the next lesson, use this pattern on a different batch of values.
