---
title: Operators
slug: operators
order: 3
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Multiply the item price by the item count before adding shipping."
  - "Store the result in totalPrice so you can reuse it in the output."
summary: Practice operators with a focused Starline Awards programming mission.
seo_title: Operators | Introduction to JavaScript
seo_description: Learn operators through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, operators, beginner javascript, programming practice
---

# Operators

## Mission: Scoreboard Engine

Calculate an order total from an item price, a quantity, and shipping. The Console lets you verify the arithmetic.

Arithmetic operators combine numbers: `*` multiplies, `+` adds, and multiplication happens before addition. For example, `3 * 8 + 4` is `28`, not `36`. Calculate in `script.js` and inspect the Console; this lesson does not change a page.

## Example

```javascript
const hours = 3;
const hourlyRate = 8;
const helmetFee = 4;
const rentalTotal = hours * hourlyRate + helmetFee;
console.log(rentalTotal);
```

## Your Task

1. Calculate `totalPrice` for five items at 12 each, plus 3 shipping; the provided probe will log `totalPrice: 63`.
2. Log `63` on its own line using `totalPrice`.
