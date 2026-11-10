---
title: "Comparison Results"
slug: comparison-results
order: 1
language: javascript
lesson_type: coding
summary: Compare values without coercion before choosing a branch.
seo_title: Comparisons and strict equality | Introduction to JavaScript
seo_description: Compare values without coercion before choosing a branch.
seo_keywords: [javascript, comparison results, beginner programming]
hints:
  - Complete one numbered change and inspect its supplied checkpoint before moving on.
---


Your earlier calculations produced numbers. A comparison produces a boolean instead, so a program can decide what to do next.

| Operator | Meaning |
| --- | --- |
| `===` / `!==` | Equal / not equal without type conversion |
| `>` / `<` | Greater / less than |
| `>=` / `<=` | Include the boundary value |

`=` assigns a value. `===` compares two values. Mixing them changes the program instead of asking a question.

```javascript run
const arrived = 6;
const limit = 6;
console.log(arrived < limit);
console.log(arrived <= limit);
console.log("6" === arrived);
console.log(Number("6") === arrived);
```

Strict equality keeps a text ID distinct from a numeric ID. The older `==` operator may convert types, so `"6" == 6` is true. Use `===` as your default and convert deliberately when conversion is intended. For numeric thresholds, compare numeric values; two strings such as `"12"` and `"3"` compare by text order rather than by their numeric size.

The supplied values describe a workshop and a scanned count. Check the exact capacity boundary before writing branches.

Edit `script.js`. Leave the supplied probes in place; Run after each change and Submit to check the ordered tasks.

## Your Tasks

1. Set `isFull` to whether `booked` is at least `capacity`.
2. Compare `scanText` and `booked` with `===` in `sameValue`.
3. Compare `Number(scanText)` and `booked` with `===` in `sameCount`.
