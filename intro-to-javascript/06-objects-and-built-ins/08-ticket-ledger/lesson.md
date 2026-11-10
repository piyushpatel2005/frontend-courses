---
title: Ticket Ledger
slug: ticket-ledger
order: 8
language: javascript
lesson_type: coding
summary: Practice Number conversion and BigInt identification in a ticket ledger.
seo_title: Ticket Ledger with Number and BigInt | Introduction to JavaScript
seo_description: Practice safe JavaScript Number conversion and BigInt values in a ticket-ledger challenge.
seo_keywords: javascript number, javascript bigint, ticket ledger, coding challenge
hints:
  - "Use Number(\"19.50\") to convert the price text."
  - "Convert a small BigInt count before multiplying it by a Number price."
---


Keep a large ticket identifier exact while calculating the price of a small group of tickets. The ID is a BigInt; the decimal price is a Number. They serve different purposes and should not be multiplied together.

```javascript run
const crateId = 9007199254740995n;
const unitPrice = Number("7.50");
const crateCount = 2n;
console.log(typeof crateId, Number(crateCount) * unitPrice);
```

`Number(crateCount)` is safe here because the count is small. This exercise supplies only small, nonnegative whole counts. Do not generalize this conversion to a very large identifier. The sample prices are chosen for a simple arithmetic exercise; ordinary Number arithmetic is not a general solution for exact financial calculations.

Edit `script.js`. Leave the supplied checks in place, Run to see each checkpoint, and Submit when ready. Printing a BigInt inside `${...}` shows its digits without the source-code `n` suffix.

## Your Tasks

1. Set `ticketId` to the BigInt value `9007199254740993n`.
2. Set `ticketPrice` by converting the text `"19.50"` with `Number()`.
3. Complete `calculateTotal(ticketCount, price)` by converting the small BigInt count to Number and multiplying by the supplied price.
4. Log `Ticket 9007199254740993 | Total: 58.5` on its own line, using `ticketId` and `calculateTotal(3n, ticketPrice)`.
