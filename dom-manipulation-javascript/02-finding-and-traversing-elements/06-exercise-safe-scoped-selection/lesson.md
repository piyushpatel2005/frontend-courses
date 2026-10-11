---
title: 'Exercise: update only the chosen card'
slug: exercise-safe-scoped-selection
order: 6
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Update a chosen service card safely, even when an optional target is missing.
seo_title: 'Exercise: update only the chosen card | Beginner JavaScript DOM'
seo_description: Update a chosen service card safely, even when an optional target
  is missing.
seo_keywords:
- JavaScript DOM
- null-safe selection
- scoped DOM query
- querySelector guard
---

Update the bike clinic without changing the book exchange. Both cards contain `.status`, so start with `#bike-clinic` and search within that card.

The starter supplies two functions and calls them on load. Fill in their bodies in `script.js`. In `updateBikeStatus()`, check the card before searching inside it, then check its status before writing to it. This two-level guard keeps the function safe when either element is missing.

In `updateOptionalAlert()`, look for `.optional-alert` each time the function runs. There is no alert in the starting HTML. To try the present case, temporarily add `<p class="optional-alert"></p>` inside `<main>`, Run, and look for Check the desk. Remove it and Run again. Submit checks both cases too.

Run after the first task: the bike clinic should say Mechanics ready, while the book exchange still says Tables being set up.

## Your Tasks

1. Complete `updateBikeStatus()` to find `#bike-clinic`, safely query its `.status`, and set it to `Mechanics ready`; leave the book exchange unchanged and do nothing if the card or status is missing.
2. Complete `updateOptionalAlert()` to set a present `.optional-alert` to `Check the desk` and do nothing when the alert is missing.
