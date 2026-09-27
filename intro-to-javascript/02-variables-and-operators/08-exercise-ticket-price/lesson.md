---
title: Adjust a Ticket Price
slug: exercise-ticket-price
order: 8
language: javascript
lesson_type: coding
summary: Use a fixed base price and mutable total for ticket adjustments.
seo_title: Adjust a Ticket Price | JavaScript Coding Exercise
seo_description: Calculate a ticket price after adding a facility charge and subtracting a credit.
seo_keywords: javascript ticket price, const let exercise, compound assignment
hints:
  - Inspect the intermediate values in the Console before changing the final line.
---

# Adjust a Ticket Price

The preceding tally demo held the award constant while updating a running balance. The ticket desk needs the same distinction: keep `basePrice` fixed at 24, then update `ticketPrice` with a 5-unit facility charge and a 3-unit credit. The final ticket price should be 26.

For a different budget, the update pattern looks like this:

```javascript
const grant = 50;
let balance = grant;
balance += 8;
balance -= 6;
console.log(balance); // 52
```

## Your Tasks

1. Increase `ticketPrice` by `facilityCharge` with `+=`; the provided probe will log `charged: 29`.
2. Decrease `ticketPrice` by `credit` with `-=`; the provided probe will log `credited: 26`.
3. Log the unchanged `basePrice` as `base: 24`.
4. Log the adjusted `ticketPrice` as `ticket: 26`.

## Scoreboard Engine complete

You can convert external price text, group charges correctly, and update a price without losing its fixed base. Take the section quiz before moving on to decisions.
