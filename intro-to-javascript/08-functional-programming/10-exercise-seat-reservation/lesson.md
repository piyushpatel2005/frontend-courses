---
title: "Report Seat Reservation Results"
slug: exercise-seat-reservation
order: 10
language: javascript
lesson_type: coding
summary: "Use the route demo's error/result contract for workshop seats. A request must be a positive whole number and must not exceed the available seats. `Number.isInteger` distinguishes whole numbers from fractions."
seo_title: "Seat Reservation Callback Exercise | Introduction to JavaScript"
seo_description: "Use the route demo's error/result contract for workshop seats. A request must be a positive whole number and must not exceed the available seats. `Number.isInteger` distinguishes whole numbers from fractions."
seo_keywords: [javascript callbacks exercise, error handling, seat reservation]
hints:
  - "Reject non-integers, zero, negative numbers, and requests over the available seats."
  - "Invoke callback(error, null) on failure and callback(null, result) on success."
---

# Reserve workshop seats

Use the route demo's error/result contract for workshop seats. A request must be a positive whole number and must not exceed the available seats. `Number.isInteger` distinguishes whole numbers from fractions.

`reserveSeats(requested, available, callback)` calls back exactly once, synchronously. Success supplies `null` and `{ reserved: requested, remaining: available - requested }`. Failure supplies `new Error("Invalid seat request")` and `null`. Returning that object from `reserveSeats` is not a substitute: the caller is waiting for a callback invocation.

The validation condition and early return are supplied; you complete the two callback paths. The supplied probes count calls and try several invalid requests. Keep them while you work; they provide feedback without requiring a new logging change for each branch.

## Worked example

A separate callback receives either an error or a value, once:

```javascript run
function checkBadge(id, callback) {
  if (!id) return callback(new Error("Missing badge"), null);
  callback(null, { badge: id });
}
checkBadge("B7", (error, result) => console.log(error, result.badge));
```

Edit `script.js`, then use **Run** to inspect the supplied checkpoints. Use **Submit** to check your tasks in order. Keep the supplied probes; change only the requested definitions and final logs.

## Your Tasks

1. Complete the supplied valid-request branch: call back once with `null` and an object containing `reserved` and `remaining`.
2. Complete the supplied invalid-request branch: call back once with `new Error("Invalid seat request")` and `null`.
3. Call `reserveSeats(2, 5, callback)` with a callback that logs `Reserved 2 seats; 3 remain` on success.
