---
title: 'Exercise: update only the chosen card'
slug: exercise-safe-scoped-selection
order: 6
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Guard missing selectors and scope a status query so another card stays unchanged.
seo_title: 'Exercise: update only the chosen card | Beginner JavaScript DOM'
seo_description: Guard missing selectors and scope a status query so another card
  stays unchanged. Practice in a live JavaScript DOM preview.
seo_keywords:
- JavaScript DOM
- null-safe selection
- scoped DOM query
- querySelector guard
---

The kitchen demo checked an optional missing badge before writing to it and searched inside the soup card for its `.status`. Here the target is the **bike clinic** card, but the script should remain safe even if an optional card is absent. The first `.status` in the document belongs to the *book exchange*, so a global `.status` query would update the wrong message.

For a different venue, a plant swap could guard a missing note and scope a label like this:

```javascript
const plants = document.querySelector("#plants");
if (plants) {
  const note = plants.querySelector(".note");
  if (note) {
    note.textContent = "Cuttings welcome";
  }
}
```

Use that two-level guard pattern with `#bike-clinic` and its `.status`, setting its text to **Mechanics ready**. Complete the supplied `updateOptionalAlert()` function: look for `.optional-alert` and guard it before setting its text. The starter calls the function on load, when the alert is absent; Submit also inserts a temporary alert to check its behavior. Run and check that the book exchange remains **Tables being set up**.

## Your Tasks

1. Select `#bike-clinic`, guard a missing card or `.status`, then query `.status` *inside that card* and set its text to `Mechanics ready`; leave the book-exchange status unchanged.
2. In `updateOptionalAlert()`, query the possibly missing `.optional-alert` and, if present, set its text to `Check the desk` without throwing when absent.
