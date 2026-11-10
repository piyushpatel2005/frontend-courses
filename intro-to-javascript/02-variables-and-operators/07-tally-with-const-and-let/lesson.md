---
title: "Tally With Const And Let"
slug: tally-with-const-and-let
order: 7
language: javascript
lesson_type: coding
summary: "Trace a running tally as two additions and one correction change its value."
seo_title: Track a Changing Points Tally | JavaScript
seo_description: "Trace a running tally as two additions and one correction change its value."
seo_keywords: javascript const let, running tally, compound assignment
---


The volunteer desk awards a fixed number of points per completed shift. That rule does not change, but each volunteer's tally does. `const` names the fixed award; `let` names the changing tally.

```javascript run
const pointsPerShift = 6;
let tally = 10;
console.log("starting:", tally);
tally += pointsPerShift;
console.log("after shift:", tally);
tally += pointsPerShift;
console.log("after second shift:", tally);
```

After each update, the next statement reads the new tally. The two additions therefore build on each other; they do not each start from 10. `+=` changes the `let` binding, while `const pointsPerShift` stays 6.

The second block starts a fresh example at 10 and repeats both additions before a correction. `tally -= 2` means `tally = tally - 2`:

```javascript run
const pointsPerShift = 6;
let tally = 10;
tally += pointsPerShift;
tally += pointsPerShift;
tally -= 2;
console.log("adjusted:", tally);
```

Now edit `script.js` to apply the same pattern to a different volunteer, starting at 8 points. Run after each step and compare the Console lines. The next lesson uses the pattern to adjust a ticket price.

## Your Tasks

1. Keep `pointsPerShift` fixed at 6 and add it to `tally` twice; log `after shifts: 20`.
2. Subtract 3 points for a correction; log `corrected: 17`.
