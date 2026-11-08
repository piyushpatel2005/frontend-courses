---
title: "Your First Code"
slug: your-first-code
order: 2
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use a string for firstMessage and arithmetic for divisionResult."
  - "Put both values into one output line with a separator."
summary: "Print a named message and a division result in the Console."
seo_title: Your First JavaScript Code | Introduction to JavaScript
seo_description: "Print a named message and a division result in the Console."
seo_keywords: javascript, your first javascript code, beginner javascript, programming practice
---

# Your First JavaScript Code


Your first standalone script prints a name and a division result in the Console. There is no page to edit.

Unlike the first lesson's page output, this and the following lessons run just `script.js`. Click Run and look in the Console. `console.log()` prints a line; a quoted value such as `"Ada"` is text, while `100 / 4` computes a number. A backtick-delimited string can insert both values with `${firstMessage}` and `${divisionResult}`.

The quotes around a string are part of the code, not its displayed message. A variable name without quotes reads the value stored under that name. Compare `console.log("trailMarker")`, which prints the name itself, with the example below, which prints its value.

The starter already includes two checkpoint logs. Leave those in place and change the values above them. Your last task adds a new log. A comma between log arguments inserts a space; the `|` separator in the requested line must come from your string.

## Example

```javascript run
const trailMarker = "Checkpoint Cedar";
const distancePerGroup = 48 / 6;
console.log(trailMarker, distancePerGroup);
```

Submit checks the printed results in these script-only lessons. It cannot prove which calculation produced them, so build each result from the requested variables rather than typing the expected answer as a literal.

## Your Task

1. Set `firstMessage` to `"Ada"`; the provided probe will log `message: Ada`.
2. Calculate `divisionResult` as `100 / 4`; the provided probe will log `division: 25`.
3. Log `Ada | 25` on its own line using both values.
