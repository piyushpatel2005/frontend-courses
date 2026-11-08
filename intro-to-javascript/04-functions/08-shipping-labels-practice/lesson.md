---
title: "Shipping Labels Practice"
slug: shipping-labels-practice
order: 8
language: javascript
lesson_type: coding
summary: "The community delivery desk needs a label from a package code, its weight, and an optional service. You will build the base fee first, then the label, then the express surcharge."
seo_title: "Shipping Labels with Defaults Exercise | Introduction to JavaScript"
seo_description: "The community delivery desk needs a label from a package code, its weight, and an optional service. You will build the base fee first, then the label, then the express surcharge."
seo_keywords: [javascript, "exercise shipping labels", programming exercise]
hints:
  - "Read each expected Console line, then build it from your function calls."
---

# Shipping labels with defaults

The community delivery desk needs a label from a package code, its weight, and an optional service. You will build the base fee first, then the label, then the express surcharge.

`shippingFee(weight)` supplies the base fee. `shippingLabel(code, weight, service = "regular")` calls that helper and the supplied `expressExtra(service)` helper. The latter initially returns zero so you can finish regular labels before implementing express delivery.

A garden sign uses a similar composition with unrelated data:

```javascript run
function plotNumber(row) { return row + 10; }
function gardenSign(name, row = 1) {
  return `${name} - plot ${plotNumber(row)}`;
}
console.log(gardenSign("Basil"));
console.log(gardenSign("Mint", 4));
```

The default belongs in the parameter list. The helper's return value belongs in the calculation or string that uses it. Keep fee calculations numeric until you insert the final fee into the label. Assume positive package weights and either `"regular"` or `"express"` service in this exercise.

## Your Tasks

1. Implement `shippingFee(weight)`: return 4 for weights at most 2 and 7 for heavier packages.
2. Complete `shippingLabel(code, weight, service = "regular")` for regular delivery. Add `shippingFee(weight)` and `expressExtra(service)` for the fee, then return `<code>: <service> $<fee>`. Leave `expressExtra` returning zero for now.
3. Complete `expressExtra(service)` so express delivery adds 3 and regular delivery adds 0.
4. Log `Regular label: PK-8: regular $7` using `shippingLabel("PK-8", 3, "regular")`.

Edit `script.js`, then Run after each step. The supplied probes show the values being checked; leave them in place. Submit checks the numbered tasks in order. You do not need to write extra checkpoint logs.
