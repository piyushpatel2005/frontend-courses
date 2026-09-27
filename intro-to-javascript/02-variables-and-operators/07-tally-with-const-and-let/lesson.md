---
title: Track a Changing Points Tally
slug: tally-with-const-and-let
order: 7
language: javascript
lesson_type: interactive
summary: Keep a fixed award constant while updating a running score.
seo_title: Track a Changing Points Tally | JavaScript Console Practice
seo_description: Run a JavaScript points tally using const for the rule and let for a changing balance.
seo_keywords: javascript const let, running tally, compound assignment
---

# Track a Changing Points Tally

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

`+=` changes the `let` binding; `const pointsPerShift` stays 6. A correction can subtract from the current tally:

```javascript run
const pointsPerShift = 6;
let tally = 10;
tally += pointsPerShift;
tally += pointsPerShift;
tally -= 2;
console.log("adjusted:", tally);
```

The next exercise changes a ticket price instead of a volunteer tally. Identify what stays fixed and what must change.
