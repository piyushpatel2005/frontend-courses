---
title: Inspect the Queue Report
slug: exercise-inspect-queue
order: 6
language: javascript
lesson_type: coding
summary: Audit incoming queue fields and report their actual types.
seo_title: Inspect the Queue Report | JavaScript Coding Exercise
seo_description: Write a console audit that distinguishes a text count from numeric attendance and a boolean gate flag.
seo_keywords: javascript typeof exercise, console audit, queue data
hints:
  - Inspect the intermediate values in the Console before changing the final line.
---

# Inspect the Queue Report

The preceding console-inspection demo showed how a numeric-looking string differs from a number. Now the awards desk receives a **queue count as text**, an actual seat count, and a gate flag. Preserve the source fields; report their types before anyone treats the queue count as arithmetic.

A different venue might inspect a flag like this:

```javascript
const lightsOn = false;
console.log("lights:", lightsOn, typeof lightsOn); // lights: false boolean
```

## Your Tasks

1. Derive `queueType` with `typeof queueCount`; the provided probe will log `queue: 18 (string)`.
2. Derive `seatsType` with `typeof openSeats`; the provided probe will log `seats: 6 (number)`.
3. Derive `gateType` with `typeof gateOpen`; the provided probe will log `gate: true (boolean)`.
