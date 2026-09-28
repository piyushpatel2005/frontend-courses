---
title: "Exercise: Shipping Labels with Defaults"
slug: exercise-shipping-labels
order: 8
language: javascript
lesson_type: coding
summary: "Practice shipping labels with defaults with a script-only JavaScript challenge."
seo_title: "Shipping Labels with Defaults Exercise | Introduction to JavaScript"
seo_description: "Build and test shipping labels with defaults using JavaScript functions and console checkpoints."
seo_keywords: [javascript, "exercise shipping labels", programming exercise]
hints:
  - "Read each expected Console line, then build it from your function calls."
---

# Shipping Labels with Defaults

The community delivery desk prints a shipping label from a package code, its weight, and an optional service. `shippingFee(weight)` determines the base fee; `shippingLabel(code, weight, service = "regular")` calls it, then adds $3 only for express service. Use function calls rather than duplicating the fee rule. Work only in `script.js`; Run shows your checkpoints in the Console.

## A different example

Here is an unrelated helper composition for a garden sign. Notice that the second function *uses the value returned* by the first:

```javascript
function plotNumber(row) { return row + 10; }
function gardenSign(name, row = 1) {
  return `${name} - plot ${plotNumber(row)}`;
}
console.log(gardenSign("Basil")); // Basil - plot 11
```

## Your Tasks

1. Define `shippingFee(weight)` to return 4 for weights at most 2 and 7 above 2.
2. Define `shippingLabel(code, weight, service = "regular")`.
3. Use `shippingFee` in the label and add $3 for express.
4. Log `Regular label: PK-8: regular $7` from a call to `shippingLabel("PK-8", 3, "regular")`.
