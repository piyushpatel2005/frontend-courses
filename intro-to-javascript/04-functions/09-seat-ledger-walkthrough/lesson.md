---
title: "Demo: Seat Ledger Closure Walkthrough"
slug: seat-ledger-walkthrough
order: 9
language: javascript
lesson_type: interactive
summary: "Run a worked example of seat ledger closure walkthrough before the practical exercise."
seo_title: "Seat Ledger Closure Walkthrough | JavaScript Console Demo"
seo_description: "Trace seat ledger closure walkthrough step by step with runnable JavaScript console output."
seo_keywords: [javascript, "seat ledger walkthrough", interactive example]
---

# Seat Ledger Closure Walkthrough

The concert desk needs a seat counter that remembers how many reservations have already been accepted. The returned function still has access to `remaining` after the outer function finishes—that remembered variable is a **closure**.

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

Run it, then predict the final message if `eastDesk` starts with capacity 3. Each call to the factory creates a separate `remaining`; calling one desk cannot spend another desk's seats. Build a different stateful tool in the practical lesson.
