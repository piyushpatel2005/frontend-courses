---
title: "Regex Validation"
slug: regex-validation
order: 6
language: javascript
lesson_type: interactive
summary: Run a regex check for 24-hour time slots and boundary cases.
seo_title: "Regex Time Slot Validation Demo | Introduction to JavaScript"
seo_description: Learn how JavaScript regex anchors, groups, and character ranges validate an entire 24-hour time string.
seo_keywords: [javascript regex validation, regular expression anchors, time format]
---

# Validate a time slot

A booking tool accepts five-character times from `00:00` through `23:59`. A pattern that allowed any two digits on each side of a colon would also accept `29:75`, so the pattern needs narrower ranges.

Read `/^([01]\d|2[0-3]):[0-5]\d$/` in order:

- `^` starts at the beginning of the input.
- `([01]\d|2[0-3])` groups two alternatives. `[01]\d` accepts `00` through `19`; `2[0-3]` accepts `20` through `23`. The `|` means "or".
- `:` matches the colon itself.
- `[0-5]\d` accepts minutes `00` through `59`.
- `$` requires the end of input. We do not use the multiline `m` flag.

```javascript run
function validTimeSlot(value) {
  return /^([01]\d|2[0-3]):[0-5]\d$/.test(value);
}
console.log(validTimeSlot("09:45"));
console.log(validTimeSlot("29:45"));
console.log(validTimeSlot("09:45 extra"));
console.log(validTimeSlot("23:59"));
console.log(validTimeSlot("24:00"));
```

Run the five cases. The final two check the upper boundary: `23:59` is valid, but `24:00` is outside this format. This checks a time string only; it does not construct a Date or choose a timezone.

The shelf-label exercise uses the same anchors and alternatives with different ranges. It also cleans up surrounding whitespace before checking the pattern.
