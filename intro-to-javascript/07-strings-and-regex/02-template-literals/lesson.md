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

# Template literals

Build a two-line guest sign from a name and a seat. Backticks create a **template literal**; `${expression}` inserts the value of an expression into its text. Ordinary single or double quotes do not perform that substitution.

```javascript
function trailSign(place, distance) {
  return `Trail: ${place}
Distance: ${distance} km`;
}
console.log(trailSign("Cove", 3));
// Trail: Cove
// Distance: 3 km
```

The newline inside the backticks stays in the string. You can also write `\n` for a newline. An expression can be a calculation such as `${distance * 2}`, or a method call such as `${name.trim()}`.

`trim()` returns a string without surrounding whitespace. It keeps spaces inside the name: `"  Jo Lee  ".trim()` becomes `"Jo Lee"`. Trim before inserting the name so accidental edge spaces do not appear on the sign.

Edit `script.js`. The check displays the helper's two lines with a pipe between them so they are easy to inspect. Leave that supplied check in place. Run after implementing the helper, then Submit.

## Your Tasks

1. Complete `guestSign(name, seat)` with a template literal returning `Guest: ` followed by the trimmed name, a newline, and `Seat: ` followed by the seat.
2. Log `guestSign(guest, seat)` separately. The supplied values should produce `Guest: Nia` and `Seat: B12` on consecutive lines.
