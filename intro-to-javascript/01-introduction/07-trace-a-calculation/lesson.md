---
title: Trace a Faulty Calculation
slug: trace-a-calculation
order: 7
language: javascript
lesson_type: interactive
summary: Trace intermediate numbers to find a parenthesis bug.
seo_title: Trace a Faulty Calculation | JavaScript Console Practice
seo_description: Debug a JavaScript total by printing intermediate values and correcting arithmetic grouping.
seo_keywords: javascript calculation debugging, console trace, parentheses
---

# Trace a Faulty Calculation

A rehearsal invoice charges for two sessions and one fixed setup fee. The wrong expression multiplies the fee too. Log the parts so you can see where the discrepancy starts.

```javascript run
const sessionCost = 15;
const setupFee = 4;
const sessions = 2;
const faultyTotal = (sessionCost + setupFee) * sessions;
console.log("sessions:", sessionCost * sessions);
console.log("setup:", setupFee);
console.log("faulty:", faultyTotal);
```

The sessions cost 30, so a one-time fee of 4 should produce 34, not 38. Fix the **grouping**, not the input:

```javascript run
const sessionCost = 15;
const setupFee = 4;
const sessions = 2;
const correctedTotal = sessionCost * sessions + setupFee;
console.log("corrected:", correctedTotal);
```

The next exercise applies the same trace-and-fix method to bonus points, with a different formula.
