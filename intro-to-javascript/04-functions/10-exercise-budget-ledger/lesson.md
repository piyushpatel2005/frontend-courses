---
title: "Exercise: Private Budget Ledger"
slug: exercise-budget-ledger
order: 10
language: javascript
lesson_type: coding
summary: "Make a spending desk that remembers its remaining budget. `makeBudget(startingBalance)` returns a function you can call with an expense. Affordable spending returns the new balance. An expense larger than that balance returns `null` and leaves the money untouched."
seo_title: "Private Budget Ledger Exercise | Introduction to JavaScript"
seo_description: "Make a spending desk that remembers its remaining budget. `makeBudget(startingBalance)` returns a function you can call with an expense. Affordable spending returns the new balance. An expense larger than that balance returns `null` and leaves the money untouched."
seo_keywords: [javascript, "exercise budget ledger", programming exercise]
hints:
  - "Read each expected Console line, then build it from your function calls."
---

# Private budget ledger

Make a spending desk that remembers its remaining budget. `makeBudget(startingBalance)` returns a function you can call with an expense. Affordable spending returns the new balance. An expense larger than that balance returns `null` and leaves the money untouched.

Use positive expenses and nonnegative starting balances here. Spending exactly the remaining balance is allowed and returns zero. You are not building a currency or account system; this exercise uses whole-number amounts to practice remembered state.

This smaller closure remembers text rather than a changing balance:

```javascript run
function makeTag(prefix) {
  return function (word) { return `${prefix}: ${word}`; };
}
const label = makeTag("Review");
console.log(label("ready"));
console.log(label("revised"));
```

For your budget, declare `let balance` in the outer function. The inner function changes that same variable on repeated calls. First make affordable spending work; then insert the rejection guard before subtraction. The supplied probes use separate budgets so one checkpoint cannot spend another checkpoint's money.

## Your Tasks

1. Complete `makeBudget(startingBalance)` so it returns a spending function. Keep `balance` outside that inner function, subtract each expense, and return the remaining balance. Handle affordable expenses first.
2. Add a guard before subtraction: if `amount > balance`, return `null` without changing `balance`.
3. Create budgets starting at 10 and 20; log `Independent: 8,19` after spending 2 from the first and 1 from the second.

Edit `script.js`, then Run after each step. The supplied probes show the values being checked; leave them in place. Submit checks the numbered tasks in order. You do not need to write extra checkpoint logs.


## Functions complete

Your helpers can now combine results, supply defaults, and keep private state. Take the section quiz before moving to arrays.
