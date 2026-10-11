---
title: Check for missing elements and search within a card
slug: safe-and-scoped-queries
order: 5
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Update one recipe card and safely skip a missing badge.
seo_title: Check for missing elements and search within a card | Beginner JavaScript
  DOM
seo_description: Update one recipe card and safely skip a missing badge.
seo_keywords:
- JavaScript DOM
- null guard
- scoped querySelector
- optional DOM element
---

Two kitchen cards use the same `.status` class. A document-wide query would find the first status, whether or not it belongs to the recipe you meant to update. First find the soup card, then search inside it.

```javascript
const card = document.querySelector("#soup-card");
const badge = card.querySelector(".optional-badge");
if (badge) {
  badge.textContent = "Seasonal";
}
const status = card.querySelector(".status");
status.textContent = "Ready to serve";
```

`card.querySelector(...)` searches descendants of that card. The optional badge is missing, so its query returns `null`. `if (badge)` skips the update in that case; trying `null.textContent` would throw and stop the script.

Run: soup says Ready to serve, while salad stays In planning. Add `<span class="optional-badge"></span>` inside the soup card and Run again. It now says Seasonal. Remove it and rerun to check the absent case.

This example guarantees that the card and status exist. If the container can also be absent, guard it before calling its `querySelector`; then guard the returned status before changing its text. The next exercise puts these checks inside a function so you can safely repeat the update.
