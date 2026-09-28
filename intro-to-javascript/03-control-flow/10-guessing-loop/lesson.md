---
title: "Demo: Stop a Ticket Scan"
slug: guessing-loop
order: 10
language: javascript
lesson_type: interactive
summary: Stop a loop as soon as the target ticket is found.
seo_title: "Stop a Ticket Scan | Introduction to JavaScript"
seo_description: Trace a for-of loop that breaks at the first matching ticket before writing a guess search.
seo_keywords: javascript, interactive demo, practical programming
---

# Demo: Stop a Ticket Scan

Before searching a list of guesses, watch a desk scan ticket IDs. `break` stops when the target appears; entries after it are never inspected.

```javascript run
const targetTicket = 42;
const scannedTickets = [18, 42, 51];

for (const ticket of scannedTickets) {
  if (ticket === targetTicket) {
    console.log(`Found ticket: ${ticket}`);
    break;
  }
  console.log(`Not this one: ${ticket}`);
}
```

Run it and notice that 51 never appears in the Console. In the next exercise, put a similar search in a function so it can return either a match message or `"No match"` after the loop finishes.
