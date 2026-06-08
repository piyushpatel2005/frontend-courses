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
---

# Type Conversion

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

1. Declare a variable `priceStr` with the string value `"29"`.
2. Convert `priceStr` to a number and store it in a variable `price`.
3. Declare a variable `quantity` with the number value `3`.
4. Calculate `total` as `price * quantity`.
5. Display in `#output`: `"Total: $87"` (use `String()` or a template literal for the final message).
