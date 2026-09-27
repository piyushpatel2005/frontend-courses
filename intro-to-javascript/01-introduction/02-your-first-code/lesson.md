---
title: Your First JavaScript Code
slug: your-first-code
order: 2
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use a string for firstMessage and arithmetic for divisionResult."
  - "Put both values into one output line with a separator."
summary: Practice your first javascript code with a focused Starline Awards programming mission.
seo_title: Your First JavaScript Code | Introduction to JavaScript
seo_description: Learn your first javascript code through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, your first javascript code, beginner javascript, programming practice
---

# Your First JavaScript Code

## Mission: Signal Launch

Your first standalone script prints a name and a division result in the Console. There is no page to edit.

Unlike the first lesson's page output, this and the following lessons run just `script.js`. Click Run and look in the Console. `console.log()` prints a line; a quoted value such as `"Ada"` is text, while `100 / 4` computes a number. A backtick-delimited string can insert both values with `${firstMessage}` and `${divisionResult}`.

## Example

```javascript
const trailMarker = "Checkpoint Cedar";
const distancePerGroup = 48 / 6;
console.log(trailMarker, distancePerGroup);
```

## Your Task

1. Set `firstMessage` to `"Ada"`; the provided probe will log `message: Ada`.
2. Calculate `divisionResult` as `100 / 4`; the provided probe will log `division: 25`.
3. Log `Ada | 25` on its own line using both values.
