---
title: "Stop a Ticket Scan"
slug: guessing-loop
order: 13
language: javascript
lesson_type: interactive
summary: "Trace a ticket scan that stops when its target appears."
seo_title: "Stop a Ticket Scan | Introduction to JavaScript"
seo_description: "Trace a ticket scan that stops when its target appears."
seo_keywords: javascript, interactive demo, practical programming
---

# Stop a Ticket Scan

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

The first iteration compares 18 with 42, misses, and prints `Not this one: 18`. The second finds 42, prints the match, and exits the loop before its non-match log. The third entry, 51, is never visited.

`break` ends the loop rather than the whole script; a statement placed after the loop would still run. Run the block and check the two lines in that order. In the next exercise, put a similar search in a function so it can return either a match message or `"No match"` after the loop finishes.
