---
title: "Filter A List"
slug: filter-a-list
order: 1
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Filter existing DOM items as a visitor types, without deleting unmatched elements.
seo_title: Filter a list as someone types | Beginner DOM Manipulation with JavaScript
seo_description: Learn to filter a list with the input event, case-insensitive comparisons, hidden elements, and a visible result count.
seo_keywords:
- JavaScript list filter
- live search DOM
- input event list
---

A neighborhood kitchen needs to search its short recipe index without reloading or deleting the underlying entries.

## Read the running example

Earlier you selected groups of elements and read `textContent`; the form chapter added `input` events. Here those two skills meet: a single typed query changes which existing nodes are visible, and the count reports the same state.

The `input` event from the previous module gives a fresh query on every edit. `querySelectorAll` collects the existing list items; loop over them, compare each item’s `textContent` with the lowercased query, then set its `hidden` property. Keep an `aria-live` count so a screen-reader user hears when results change.

Run the recipe finder before changing it. In `index.html`, find `recipe-query`, `recipes`, and `recipe-count`; those are the three elements selected at the top of `script.js`. Change one recipe label, Run again, and search for the new word. Restore the label when you finish.

## Try it in the preview

Type “soup” and see only soup entries. Erase the query to restore every recipe. Notice that `hidden` changes visibility but leaves the item in the DOM; the count follows the same loop.

This is a finished example, not a graded task. The next exercise uses different data and leaves the behavior for you to write.

Try a query of only spaces too. `trim()` turns it into an empty string, and every string includes the empty string, so every recipe returns.
