---
title: "Exercise: Format Pantry Pickup Messages"
slug: exercise-pickup-messages
order: 5
language: javascript
lesson_type: coding
summary: Format personalized pantry pickup messages from request records.
seo_title: "Pantry Pickup Template Literal Exercise | Introduction to JavaScript"
seo_description: Practice JavaScript template literals and map by producing readable pickup notices from pantry requests.
seo_keywords: [javascript string formatting, template literals exercise, array map]
hints:
  - "Trim the recipient's name before inserting it into the message."
  - "Map each request to formatPickup, then join the messages with a newline."
---

# Format pantry pickup messages

The previous demo built one library reminder. Now the pantry needs **one line per request**, with a quantity and a clean recipient name. Run the starter, then replace the unfinished functions to see the actual notices in the Console.

Each request is an object with `name`, `item`, and `quantity`. Keep the supplied requests as data; your functions should also work for other requests.

## Worked example

A separate book reminder shows how to trim a name before interpolation:

```javascript
function bookReminder(name, title) {
  return `Hi ${name.trim()}, ${title} is ready.`;
}
console.log(bookReminder(" Eva ", "Field Notes")); // Hi Eva, Field Notes is ready.
```

## Your Tasks

1. Complete `formatPickup(name, item, quantity)` as a returned template-literal notice, trimming the name; do not log inside it. The supplied CHECK call uses Lee, meal kits, and 1.
2. Complete `buildPickupList(requests)` by mapping through `formatPickup` and joining with newline; an empty list returns `""`.
3. Log `buildPickupList(requests)` as a separate message with the two supplied notices on separate lines.
