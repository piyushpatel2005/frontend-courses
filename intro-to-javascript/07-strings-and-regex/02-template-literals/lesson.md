---
title: Template Literals
slug: template-literals
order: 2
language: javascript
lesson_type: coding
summary: Insert values into a template literal and format a two-line message.
seo_title: Template Literals | Introduction to JavaScript
seo_description: Build a JavaScript message with backticks, interpolation, and a newline.
seo_keywords: javascript, template literals, interpolation, multiline strings
hints:
  - "Use backticks around the message and ${name} to insert a value."
  - "A newline inside backticks remains a newline in the returned string."
---

# Template Literals

The awards desk needs a compact two-line sign for each guest. Instead of concatenating pieces with `+`, put expressions inside `${...}` in a backtick string. Run `script.js` and check the Console.

```javascript
function trailSign(place, distance) {
  return `Trail: ${place}
Distance: ${distance} km`;
}
console.log(trailSign("Cove", 3));
// Trail: Cove
// Distance: 3 km
```

The newline between the two lines stays in the string. A template literal can also hold a calculation, such as `${distance * 2}`. The next lesson introduces regular expressions; none are needed here.

## Your Tasks

1. Complete `guestSign(name, seat)` with a template literal that trims the name and returns a two-line sign; the supplied CHECK call tries Lee in C4.
2. Log `guestSign(guest, seat)` as its own two-line Console message.

Run the completed script: the two-line sign should be readable as a single Console message.