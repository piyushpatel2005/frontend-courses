---
title: "Clone And Batch Insert Practice"
slug: clone-and-batch-insert-practice
order: 8
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Deep-clone an existing exhibit card twice and append the copies as a prepared batch.
seo_title: 'Exercise: Clone Two Exhibit Cards | DOM Manipulation with JavaScript'
seo_description: Practice cloneNode(true), changing nested textContent, and inserting DOM copies through a DocumentFragment.
seo_keywords:
- cloneNode exercise
- deep clone descendants
- DocumentFragment practice
hints:
- Call original.cloneNode(true), then query the name within the copy, not within the original.
---

# Make two exhibit cards

The gallery's Clay vessel card is the sample. Prepare Woven basket and Glass bead copies with the same nested title and Collection item note.

Edit `script.js`. The supplied `original` refers to the sample. `makeExhibit(name)` should return a detached copy, while `addExhibits()` handles insertion. The call at the bottom runs `addExhibits` once. Keep the supplied `window` references so the checks can call the helpers separately.

A deep clone keeps the nested `strong` title and `span` note. Find `.exhibit-name` within the copy, not through `document`, or you could rename Clay vessel instead.

## Your Tasks

1. Complete `makeExhibit(name)` to return a detached deep clone with the supplied name as literal text. Keep the sample and the copied Collection item note unchanged.
2. Complete `addExhibits()` to put `Woven basket` and `Glass bead` copies in a `DocumentFragment`, then append that batch after Clay vessel.

After step 1, Run still shows only the sample; Submit can inspect the detached copy. After step 2, all three cards should appear in order, with no extra wrapper around the new cards. Submit checks preparation and insertion separately.
