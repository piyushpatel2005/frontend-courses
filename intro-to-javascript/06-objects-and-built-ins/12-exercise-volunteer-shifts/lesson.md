---
title: "Exercise: Volunteer Shift Audit"
slug: exercise-volunteer-shifts
order: 12
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

# Exercise: Volunteer Shift Audit

The supply-bin demo used a variable as an object key and scanned key-value pairs for low counts. Apply both ideas to volunteer shifts in `script.js`.

For example, a **locker room** with `const lockers = { north: 0, south: 4 }` could read `lockers["north"]` as zero and use `Object.entries(lockers)` to find names below two. Use `Object.hasOwn(slots, requested)` to distinguish a missing key from a present key with a value of zero. Here, you are auditing people assigned to shifts, not lockers.

## Worked example

Here is the same lookup-and-scan pattern with supply bins rather than shifts:

```javascript
const bins = { paper: 0, ink: 4 };
const requested = "paper";
const low = Object.entries(bins).filter(([, count]) => count < 2);
console.log(bins[requested], low.map(([name]) => name)); // 0 ["paper"]
```

## Your Tasks

1. Write `readAvailability(slots, requested)` using bracket lookup and `Object.hasOwn()` to return the requested count, or `null` when the key is missing.
2. Write `lowShiftNames(slots, minimum)` using `Object.entries()` to return the names below the minimum in entry order.
3. Write `auditShifts(slots, requested, minimum)` to return `{ available, needsHelp }` using those helpers.
4. Keep the input object unchanged after calling `auditShifts()`.
5. Log `2 | checkIn, cleanup` from `auditShifts(shiftSlots, "checkIn", 3)` on its own Console line.
