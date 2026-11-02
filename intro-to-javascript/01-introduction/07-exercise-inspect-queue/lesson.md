---
title: Inspect the Queue Report
slug: exercise-inspect-queue
order: 7
language: javascript
lesson_type: coding
summary: "Report the types of supplied queue, seat, and gate fields without changing them."
seo_title: Inspect the Queue Report | JavaScript Coding Exercise
seo_description: "Report the types of supplied queue, seat, and gate fields without changing them."
seo_keywords: javascript typeof exercise, console audit, queue data
hints:
  - Inspect the intermediate values in the Console before changing the final line.
---

# Inspect the Queue Report

The preceding console-inspection demo showed how a numeric-looking string differs from a number. Now the awards desk receives a **queue count as text**, an actual seat count, and a gate flag. Preserve the source fields; report their types before anyone treats the queue count as arithmetic.

A different venue might inspect a flag like this:

```javascript run
const lightsOn = false;
console.log("lights:", lightsOn, typeof lightsOn); // lights: false boolean
```

The three source fields are already supplied at the top of `script.js`. Do not remove the quotes from `queueCount`: the point is to report what arrived, not repair it yet. Fill the empty type results below the fields. The supplied logs will keep each value paired with its type.

After the first change, only the queue line should contain a type label; the seat and gate lines can remain unfinished.

Edit `script.js`, Run to inspect each checkpoint, then Submit to check the completed tasks. The supplied probes do not need rewriting.

## Your Tasks

1. Derive `queueType` with `typeof queueCount`; the provided probe will log `queue: 18 (string)`.
2. Derive `seatsType` with `typeof openSeats`; the provided probe will log `seats: 6 (number)`.
3. Derive `gateType` with `typeof gateOpen`; the provided probe will log `gate: true (boolean)`.
