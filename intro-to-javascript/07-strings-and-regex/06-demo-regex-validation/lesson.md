---
title: "Demo: Validate a Time Slot with Regex"
slug: demo-regex-validation
order: 6
language: javascript
lesson_type: interactive
summary: Run a regex check for 24-hour time slots and boundary cases.
seo_title: "Regex Time Slot Validation Demo | Introduction to JavaScript"
seo_description: Learn how JavaScript regex anchors, groups, and character ranges validate an entire 24-hour time string.
seo_keywords: [javascript regex validation, regular expression anchors, time format]
---

# Validate a time slot

A booking tool accepts `HH:MM` times from `00:00` to `23:59`. The anchors `^` and `$` require the **whole input** to match; the hour and minute groups rule out invalid values.

```javascript run
function validTimeSlot(value) {
  return /^([01]\d|2[0-3]):[0-5]\d$/.test(value);
}

console.log(validTimeSlot("09:45"));
console.log(validTimeSlot("29:45"));
console.log(validTimeSlot("09:45 extra"));
```

Run the three cases, then try `23:59` and `24:00`. The next exercise uses a different pattern: shelf labels must be normalized before they are checked.
