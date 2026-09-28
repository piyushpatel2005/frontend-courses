---
title: "Exercise: Report Seat Reservation Results"
slug: exercise-seat-reservation
order: 9
language: javascript
lesson_type: coding
summary: Use an error-first callback to report valid and invalid seat reservations.
seo_title: "Seat Reservation Callback Exercise | Introduction to JavaScript"
seo_description: Practice JavaScript error-first callbacks by validating a reservation and handling success or failure without returning the result.
seo_keywords: [javascript callbacks exercise, error handling, seat reservation]
hints:
  - "Reject non-integers, zero, negative numbers, and requests over the available seats."
  - "Invoke callback(error, null) on failure and callback(null, result) on success."
---

# Reserve workshop seats

The route demo sent either an error or a destination to one callback. A workshop reservation has another constraint: requests must be positive whole numbers no greater than the available seats.

`reserveSeats(requested, available, callback)` should invoke its callback **once**, synchronously. On success, send `{ reserved: requested, remaining: available - requested }`; on failure send an `Error` with the message `Invalid seat request` and a `null` result. Do not return a result in place of calling the callback.

## Worked example

A separate callback receives either an error or a value, once:

```javascript
function checkBadge(id, callback) {
  if (!id) return callback(new Error("Missing badge"), null);
  callback(null, { badge: id });
}
checkBadge("B7", (error, result) => console.log(error, result.badge)); // null B7
```

## Your Tasks

1. Complete the valid-request path in `reserveSeats`: call the callback once with `null` error and a result containing `reserved` and `remaining`.
2. Complete the invalid-request path: reject zero, negative, fractional, or over-capacity counts with `new Error("Invalid seat request")` and a `null` result, calling back once.
3. Log `Reserved 2 seats; 3 remain` in a callback for 2 of 5 seats.
