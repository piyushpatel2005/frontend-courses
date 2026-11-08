---
title: "Seat Ledger Walkthrough"
slug: seat-ledger-walkthrough
order: 9
language: javascript
lesson_type: interactive
summary: "The concert desk must remember its remaining seats and refuse a reservation when none are left. A guard at the beginning of the returned function checks that limit before changing the count."
seo_title: "Seat Ledger Closure Walkthrough | JavaScript Console Demo"
seo_description: "The concert desk must remember its remaining seats and refuse a reservation when none are left. A guard at the beginning of the returned function checks that limit before changing the count."
seo_keywords: [javascript, "seat ledger walkthrough", interactive example]
---

# Seat ledger closure walkthrough

The concert desk must remember its remaining seats and refuse a reservation when none are left. A guard at the beginning of the returned function checks that limit before changing the count.

```javascript run
function makeSeatDesk(capacity) {
  let remaining = capacity;
  return function reserve() {
    if (remaining === 0) return "Sold out";
    remaining -= 1;
    return `Seats left: ${remaining}`;
  };
}
const eastDesk = makeSeatDesk(2);
const westDesk = makeSeatDesk(1);
console.log(eastDesk());
console.log(westDesk());
console.log(eastDesk());
console.log(eastDesk());
```

Run it and trace only `eastDesk`: its remaining count goes from 2 to 1 to 0, then stays at 0. The intervening west-desk call changes a different variable created by a different factory call.

The `return "Sold out"` exits before subtraction. In the next lesson, use that early-return pattern to reject an expense without reducing a budget.
