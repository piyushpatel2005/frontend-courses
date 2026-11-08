---
title: "Remove Replace And Clear Practice"
slug: remove-replace-and-clear-practice
order: 6
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Remove an expired display, replace an inaccurate label, and empty a draft list safely.
seo_title: 'Exercise: Refresh a Museum Display | DOM Manipulation with JavaScript'
seo_description: Practice remove, replaceWith and replaceChildren on museum display nodes without using innerHTML.
seo_keywords:
- remove node exercise
- replaceWith practice
- safe DOM clear
hints:
- replaceChildren() with no arguments empties a parent without deleting it.
---

# Refresh the museum display

The museum display contains last month's tour, an incorrect opening time, and a draft list. Fix each without rebuilding the entire display.

Edit `script.js`. The provided IDs tell you which elements to change. `remove` acts on the unwanted element, `replaceWith` acts on the old hours, and `replaceChildren` acts on the parent whose children should disappear.

The replacement hours need a new `li` with safe text, just as the community notice demo created a new market notice. Replacing that one element should leave Sculpture walk untouched.

## Your Tasks

1. Remove `#expired` while keeping its parent `#exhibits`.
2. Replace `#old-hours` with a new text-only `li` labeled `Gallery opens at 10 am`, in the same position before Sculpture walk.
3. Empty `#drafts` with `replaceChildren()` without removing the list itself.

Run after each change. The first step removes only the expired tour; the second corrects the hours; the third clears the draft. Submit checks those outcomes separately in that order.
