---
title: "Exercise: Private Budget Ledger"
slug: exercise-budget-ledger
order: 10
language: javascript
lesson_type: coding
summary: "Practice private budget ledger with a script-only JavaScript challenge."
seo_title: "Private Budget Ledger Exercise | Introduction to JavaScript"
seo_description: "Build and test private budget ledger using JavaScript functions and console checkpoints."
seo_keywords: [javascript, "exercise budget ledger", programming exercise]
hints:
  - "Read each expected Console line, then build it from your function calls."
---

# Private Budget Ledger

After the seat-ledger demo, make a **different** closure: a spending desk. `makeBudget(startingBalance)` returns a `spend(amount)` function that subtracts affordable expenses and returns the new balance. If there is not enough money, return `null` and leave the balance unchanged. Use positive amounts and nonnegative starting balances in this exercise. Work only in `script.js`; Run shows your checkpoints in the Console.

## A different example

This separate example shows a closure keeping a message prefix, not money:

```javascript
function makeTag(prefix) {
  return function (word) { return `${prefix}: ${word}`; };
}
const label = makeTag("Review");
console.log(label("ready")); // Review: ready
```

## Your Tasks

1. Define `makeBudget(startingBalance)` returning a spending function.
2. Make repeated calls to the same returned function share remaining balance.
3. Reject expenses larger than the remaining amount with `null` without deducting them.
4. Log `Independent: 8,19` by spending from two fresh budgets.

## Section complete

Backstage Toolkit complete: your functions now combine results, supply defaults, and remember private state. Take the section quiz before moving to arrays.
