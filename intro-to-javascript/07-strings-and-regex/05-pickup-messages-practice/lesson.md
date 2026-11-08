---
title: "Pickup Messages Practice"
slug: pickup-messages-practice
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

The pantry needs one notice per request. Each record has a `name`, an `item` description, and a `quantity`. Keep the records as data and build messages from them.

```javascript run
function bookReminder(name, title) {
  return `Hi ${name.trim()}, ${title} is ready.`;
}
console.log(bookReminder(" Eva ", "Field Notes"));
```

Your notice format is `Hi NAME, your QUANTITY ITEM are ready for pickup.` Trim only the name; preserve the supplied item description. Keep this wording for all supplied quantities; choosing singular or plural wording is outside this exercise.

To format a list, `requests.map(...)` calls a function once per record and returns an array of messages. Inside the callback, read `request.name`, `request.item`, and `request.quantity`, and pass them to `formatPickup()`. Joining the messages with `"\n"` puts each on a separate line. Joining an empty array produces `""`.

Edit `script.js`. Supplied checks use different records from the final list, so the functions must use their arguments. Leave the checks in place. Run after each helper, then Submit.

## Your Tasks

1. Complete `formatPickup(name, item, quantity)` to return the notice in the stated format using a template literal and a trimmed name; do not log inside it.
2. Complete `buildPickupList(requests)` by mapping each record through `formatPickup()` and joining with newlines; an empty list must return `""`.
3. Log `buildPickupList(requests)` separately so the supplied Nia and Omar notices appear on consecutive lines.
