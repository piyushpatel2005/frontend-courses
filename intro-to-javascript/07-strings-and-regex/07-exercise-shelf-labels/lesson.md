---
title: "Exercise: Validate Storage Shelf Labels"
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

The time-slot demo matched a full input, not just a valid substring. Here a storage clerk enters labels such as `B-07`; allow surrounding spaces and lowercase letters, but reject a nonexistent row or bay.

A valid normalized label has row `A`, `B`, or `C`, a hyphen, then a two-digit bay from `01` through `12`. This is a format check, not a lookup of shelves currently in use.

## Worked example

An anchored pattern for an unrelated ticket code validates the *whole* string:

```javascript
const ticket = /^[A-Z]{2}-[0-9]{2}$/;
console.log(ticket.test("AB-07")); // true
console.log(ticket.test("xAB-07")); // false
```

## Your Tasks

1. Complete `normalizeShelfLabel(input)` by trimming and uppercasing input.
2. Complete `isValidShelfLabel(input)` by testing the normalized whole string: rows A–C and bays 01–12 only.
3. Log a standalone comparison for `" b-07 "` and `"D-07"`: `B-07: true | D-07: false`.

## Strings and regex complete

You can now turn loosely entered text into validated labels. Take the section quiz before moving on to functional programming.
