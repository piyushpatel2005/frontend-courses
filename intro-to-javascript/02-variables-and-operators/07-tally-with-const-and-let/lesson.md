---
title: "Tally With Const And Let"
slug: tally-with-const-and-let
order: 7
language: javascript
lesson_type: interactive
summary: "Trace a running tally as two additions and one correction change its value."
seo_title: Track a Changing Points Tally | JavaScript Console Practice
seo_description: "Trace a running tally as two additions and one correction change its value."
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

The next exercise changes a ticket price instead of a volunteer tally. Identify what stays fixed and what must change.
