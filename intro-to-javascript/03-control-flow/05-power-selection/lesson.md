---
title: "Demo: Switch a Venue Sign"
slug: power-selection
order: 5
language: javascript
lesson_type: interactive
summary: "Compare a matching venue entrance with the default switch path."
seo_title: "Switch a Venue Sign | Introduction to JavaScript"
seo_description: "Compare a matching venue entrance with the default switch path."
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

The first block matches west and stops at its `break`. The next block uses an unknown entrance. Predict its output before running it:

```javascript run
const entrance = "north";
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

In the next exercise, use the same choice pattern in a function that selects a stage-prop effect; a `return` can replace the assignment and `break`.
