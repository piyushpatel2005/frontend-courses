---
title: Type Conversion
slug: type-conversion
order: 4
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use `Number()` to convert a string to a number."
  - "Use `String()` or template literals to convert a number to a string."
  - "Use `Boolean()` to convert any value to true/false."
summary: "Convert a text price into a number before calculating and formatting a total."
seo_title: Type Conversion | Introduction to JavaScript
seo_description: "Convert a text price into a number before calculating and formatting a total."
seo_keywords: javascript, type conversion, beginner javascript, programming practice
---


A price arrives as text. Convert it into a number before calculating the order total, then format the result as a message.

## Convert deliberately

`Number("42")` returns the number `42`. It does not change the original string; store the returned value under a new name. `typeof` lets you check the difference even when the Console prints the same digits.

```javascript run
const deliveryText = "8";
const delivery = Number(deliveryText);
console.log(deliveryText, typeof deliveryText);
console.log(delivery, typeof delivery);
console.log(delivery + 2);
```

`String(42)` goes the other way and returns `"42"`. A template literal also turns inserted values into text for display. Keep the calculation numeric until you need that final message.

`Boolean(0)` and `Boolean("")` return `false`; `Boolean(1)` and `Boolean("hello")` return `true`. Boolean conversion asks whether a value is truthy, not what its text means: even `Boolean("false")` is `true` because that string is not empty.

## Watch what `+` receives

With two numbers, `+` adds. With a string operand, it joins text instead:

```javascript run
console.log("8" + 2);
console.log(Number("8") + 2);
```

Other arithmetic operators can convert strings automatically: `"8" * 2` produces `16`. That automatic conversion is called coercion. Use explicit `Number()` here so the code says what kind of value the calculation expects; getting a numeric product alone does not prove you converted the input yourself.

Not all text is a usable number. `Number("abc")` gives `NaN` (“not a number”), while an empty string converts to 0. This exercise supplies valid numeric text. Checking unknown input is a separate job.

The starter has a checkpoint after every placeholder. Complete the conversion before calculating the total, and keep the dollar sign in the final display string rather than in the numeric price.

Edit `script.js`, Run to inspect each checkpoint, then Submit to check the completed tasks. The supplied probes do not need rewriting.

## Your Task

1. Set `priceStr` to `"29"`; the provided probe will show `priceStr: 29 (string)`.
2. Convert `priceStr` with `Number()` into `price`; the provided probe will show `price: 29 (number)`.
3. Set `quantity` to `3`; the provided probe will show `quantity: 3`.
4. Calculate `total` as `price * quantity`; the provided probe will show `total: 87 (number)`.
5. Log `Total: $87` using the numeric `total`.
