---
title: "Volunteer Shift Audit"
slug: exercise-volunteer-shifts
order: 14
language: javascript
lesson_type: coding
summary: Use dynamic object lookup and Object.entries to identify understaffed shifts.
seo_title: Volunteer Shift Object Audit Exercise | Introduction to JavaScript
seo_description: Practice reading computed object keys and extracting understaffed shift names from an object.
seo_keywords: javascript objects exercise, object entries filter, bracket lookup
hints:
  - "Use slots[requested] to look up a key held in a variable."
  - "Object.entries(slots) gives [name, count] pairs to filter and map."
---

# Volunteer shift audit

A coordinator needs the count for one requested shift and the names of shifts below a staffing minimum. Keep the schedule unchanged: this is a report, not a rescheduling operation.

```javascript run
const lockers = { north: 0, south: 4 };
const requested = "north";
console.log(Object.hasOwn(lockers, requested));
console.log(lockers[requested]);
```

`Object.hasOwn(object, key)` tells you whether that key belongs to the object itself. A value of zero is still a real count, so a truthiness check would confuse an empty shift with a missing one. Return `null` only when the requested key is absent.

For the low-count list, use `Object.entries(slots)` to get `[name, count]` pairs. Keep those below `minimum`, then map each pair to its name. Preserve the entry order. A count equal to the minimum is not below it.

The report shape is `{ available, needsHelp }`. The shorthand shown here means `{ available: available, needsHelp: needsHelp }` when the variable names match the property names. Read from `slots`; do not assign to or delete its properties.

Edit `script.js`. The supplied probes include zero, missing keys, a threshold boundary, and unchanged-input checks. Run after each helper; Submit checks the tasks in order.

## Your Tasks

1. Complete `readAvailability(slots, requested)` with `Object.hasOwn()` and bracket lookup to return the count, or `null` for a missing key.
2. Complete `lowShiftNames(slots, minimum)` with `Object.entries()` to return names below the minimum in entry order.
3. Complete `auditShifts(slots, requested, minimum)` to return `{ available, needsHelp }` using those helpers, without modifying `slots`.
4. Log `2 | checkIn, cleanup` from `auditShifts(shiftSlots, "checkIn", 3)` on its own line.
