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

## Your Tasks

1. Create `ticketId` with the BigInt value `9007199254740993n` and `ticketPrice` by converting the text `"19.50"` with `Number()`.
2. Define `calculateTotal(ticketCount, price)` so `calculateTotal(3n, 19.5)` returns `58.5`.
3. Print this exact double-quoted text with `console.log()`: `"Ticket 9007199254740993 | Total: 58.5"`.
