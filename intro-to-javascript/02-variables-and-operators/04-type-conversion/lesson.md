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
summary: Practice type conversion with a focused Starline Awards programming mission.
seo_title: Type Conversion | Introduction to JavaScript
seo_description: Learn type conversion through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, type conversion, beginner javascript, programming practice
---

# Type Conversion

## Mission: Scoreboard Engine

A price arrives as text. Convert it before multiplying by the quantity so the total remains a number.

Sometimes you need to change a value from one type to another. JavaScript supports both **explicit** (manual) and **implicit** (automatic) type conversion.

## Explicit conversion

| Conversion | Method | Example | Result |
|-----------|--------|---------|--------|
| To number | `Number()` | `Number("42")` | `42` |
| | `parseInt()` | `parseInt("3.9")` | `3` |
| | `parseFloat()` | `parseFloat("3.9")` | `3.9` |
| | Unary `+` | `+"42"` | `42` |
| To string | `String()` | `String(42)` | `"42"` |
| | `.toString()` | `(42).toString()` | `"42"` |
| To boolean | `Boolean()` | `Boolean(0)` | `false` |

```javascript
Number("100")   // 100
Number("")      // 0
Number("abc")   // NaN
Number(true)    // 1
Number(false)   // 0
Number(null)    // 0

Boolean(0)        // false
Boolean("")       // false
Boolean(null)     // false
Boolean("hello")  // true
Boolean(1)        // true
```

## Implicit conversion (coercion)

JavaScript automatically converts types in certain contexts — sometimes in surprising ways:

```javascript
"5" + 3      // "53"  — 3 converted to string
"5" - 3      // 2     — "5" converted to number
"5" * "3"    // 15    — both converted to numbers
true + 1     // 2     — true → 1
false + 1    // 1     — false → 0
null + 1     // 1     — null → 0
undefined + 1 // NaN
```

## Your Task

1. Set `priceStr` to `"29"`; the provided probe will show `priceStr: 29 (string)`.
2. Convert `priceStr` with `Number()` into `price`; the provided probe will show `price: 29 (number)`.
3. Set `quantity` to `3`; the provided probe will show `quantity: 3`.
4. Calculate `total` as `price * quantity`; the provided probe will show `total: 87 (number)`.
5. Log `Total: $87` using the numeric `total`.
