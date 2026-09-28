---
title: Ticket Ledger
slug: ticket-ledger
order: 7
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

# Ticket Ledger

The walkthrough parsed a score and compared large ticket IDs. Now build a separate ledger that stores one large identifier and calculates a normal currency total.

## Worked example

BigInt identifies large whole numbers; convert it before combining it with ordinary decimal arithmetic:

```javascript
const crateId = 9007199254740995n;
const unitPrice = Number("7.50");
console.log(typeof crateId, 2 * unitPrice); // bigint 15
```

## Your Tasks

1. Create `ticketId` with the BigInt value `9007199254740993n`.
2. Create `ticketPrice` by converting the text `"19.50"` with `Number()`.
3. Define `calculateTotal(ticketCount, price)` so `calculateTotal(3n, 19.5)` returns `58.5`.
4. Log `Ticket 9007199254740993 | Total: 58.5` on its own Console line.
