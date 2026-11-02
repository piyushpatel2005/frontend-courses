---
title: "Validate Storage Shelf Labels"
slug: exercise-shelf-labels
order: 7
language: javascript
lesson_type: coding
summary: Normalize and validate storage shelf labels against a precise regex.
seo_title: "Regex Shelf Label Validation Exercise | Introduction to JavaScript"
seo_description: Use a JavaScript regular expression and string normalization to accept only valid storage labels in rows A to C and bays 01 to 12.
seo_keywords: [javascript regex exercise, input validation, string normalization]
hints:
  - "First trim the input and convert it to uppercase."
  - "Use ^ and $ so extra characters cannot pass; (0[1-9]|1[0-2]) covers 01 through 12."
---

# Check storage shelf labels

A storage clerk enters a label such as `b-07` with accidental spaces around it. Normalize that input first, then check whether its row and bay fall inside the allowed ranges.

A normalized label has row `A`, `B`, or `C`, a hyphen, and a two-digit bay from `01` through `12`. This checks the format; it does not look up which shelves are currently in use.

```javascript run
const ticket = /^[A-Z]{2}-[0-9]{2}$/;
console.log(ticket.test("AB-07"));
console.log(ticket.test("xAB-07"));
```

For your pattern, `[A-C]` limits the row. `(0[1-9]|1[0-2])` allows either `01` through `09`, or `10` through `12`. Keep `^` and `$` so extra characters cannot pass. Do not use `g` for these repeated yes/no checks: global regexes remember a search position, which can make repeated `test()` calls surprising.

`input.trim().toUpperCase()` applies one method to the result of the other. It removes surrounding whitespace and normalizes case, but it does not remove spaces inside a label. `"B -07"` should still fail.

Edit `script.js` and keep the supplied checks. They include both permitted endpoints and values just outside the range. Run after each helper, then Submit.

## Your Tasks

1. Complete `normalizeShelfLabel(input)` by trimming and uppercasing the input string.
2. Complete `isValidShelfLabel(input)` by testing the normalized whole string for rows A–C and bays 01–12 only.
3. Log a separate comparison for `" b-07 "` and `"D-07"`: `B-07: true | D-07: false`.

You can now format messages and check precisely defined text inputs. Take the section quiz before moving on to functional programming.
