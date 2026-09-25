---
title: "Demo: Choose a Power with switch"
slug: power-selection
order: 5
language: javascript
lesson_type: interactive
summary: Run a worked JavaScript demo before attempting the related practical challenge.
seo_title: "Demo: Choose a Power with switch | Introduction to JavaScript"
seo_description: Inspect a runnable JavaScript demonstration before the practical coding challenge.
seo_keywords: javascript, interactive demo, practical programming
---

# Demo: Choose a Power with switch

This is the worked run before your practical challenge. A `switch` compares one value against several named cases. `break` prevents a matching case from falling into the next one.

```javascript run
const choice = "sword";
let power;

switch (choice) {
  case "sword":
    power = "Blade burst";
    break;
  case "gun":
    power = "Pulse shot";
    break;
  default:
    power = "Training mode";
}

console.log(power);
```

## What to notice

Run the example once, then trace the first two steps by hand. The next lesson gives you the same idea with a fresh problem to solve.
