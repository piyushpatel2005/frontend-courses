---
title: Check for missing elements and search within a card
slug: safe-and-scoped-queries
order: 5
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Guard a possibly null match and limit a query to a chosen parent element.
seo_title: Check for missing elements and search within a card | Beginner JavaScript
  DOM
seo_description: Guard a possibly null match and limit a query to a chosen parent
  element. Practice in a live JavaScript DOM preview.
seo_keywords:
- JavaScript DOM
- null guard
- scoped querySelector
- optional DOM element
---

A selector may not match anything: `querySelector` then returns `null`, and `null.textContent` throws. An optional badge on this community kitchen page is intentionally **absent**. The `if (badge)` guard allows the rest of the script to finish. Separately, two recipe cards share a `.status` class. Searching *inside* one card prevents a change to the other.

```javascript
const card = document.querySelector("#soup-card");
const badge = card.querySelector(".optional-badge");
if (badge) {
  badge.textContent = "Seasonal";
}
const status = card.querySelector(".status");
status.textContent = "Ready to serve";
```

Run: soup becomes ready while salad remains **In planning**. The missing optional badge does not stop the script. A scoped query starts at `card`, not `document`; it searches descendants of that element. Note that the `if` only protects `badge`: `card` and `status` exist in this completed example. When *either* the container or its target might be absent, guard both before reading their properties. The exercise practices precisely that case.
