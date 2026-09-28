---
title: "Demo: Switch a Venue Sign"
slug: power-selection
order: 5
language: javascript
lesson_type: interactive
summary: Route guests by entrance name with switch cases and a default.
seo_title: "Switch a Venue Sign | Introduction to JavaScript"
seo_description: Assign a direction using switch, break, and default before mapping stage-prop effects.
seo_keywords: javascript, interactive demo, practical programming
---

# Demo: Switch a Venue Sign

Before choosing an effect for a stage prop, use `switch` to assign a message for a venue sign. Each case handles one exact value. `break` prevents the message from being overwritten by a later case.

```javascript run
const entrance = "west";
let direction;

switch (entrance) {
  case "west":
    direction = "Use the garden gate";
    break;
  case "east":
    direction = "Use the river gate";
    break;
  default:
    direction = "Ask at reception";
}

console.log(direction);
```

Run it, then try `entrance = "north"` to check the default. In the next exercise, use the same choice pattern in a function that selects a stage-prop effect; a `return` can replace the assignment and `break`.
