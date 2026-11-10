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
summary: "Calculate an order cost with multiplication before addition."
seo_title: Operators | Introduction to JavaScript
seo_description: "Calculate an order cost with multiplication before addition."
seo_keywords: javascript, operators, beginner javascript, programming practice
---


Calculate an order total from an item price, a quantity, and shipping. The Console lets you verify the arithmetic.

Arithmetic operators combine numbers: `*` multiplies, `+` adds, and multiplication happens before addition. For example, `3 * 8 + 4` is `28`, not `36`. Calculate in `script.js` and inspect the Console; this lesson does not change a page.

Read the formula in units: price per item times number of items gives the item cost; shipping is added once per order. Parentheses around just the multiplication would not change the result. Parentheses around price plus shipping would change what gets multiplied.

Other operators you will see are `-` for subtraction and `/` for division. The `%` remainder operator comes up when you classify multiples in the next section. For this order, you only need `*` and `+`.

## Example

```javascript run
const hours = 3;
const hourlyRate = 8;
const helmetFee = 4;
const rentalTotal = hours * hourlyRate + helmetFee;
console.log(rentalTotal);
```

Edit `script.js`, Run to inspect each checkpoint, then Submit to check the completed tasks. The supplied probes do not need rewriting.

## Your Task

1. Calculate `totalPrice` for five items at 12 each, plus 3 shipping; the provided probe will log `totalPrice: 63`.
2. Log `63` on its own line using `totalPrice`.
