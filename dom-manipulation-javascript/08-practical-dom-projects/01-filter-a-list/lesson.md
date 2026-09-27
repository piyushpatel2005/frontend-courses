---
title: Filter a list as someone types
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

# Filter a list as someone types

A neighborhood kitchen needs to search its short recipe index without reloading or deleting the underlying entries.

## Read the running example

Earlier you selected groups of elements and read `textContent`; the form chapter added `input` events. Here those two skills meet: a single typed query changes which existing nodes are visible, and the count reports the same state.

The `input` event from the previous module gives a fresh query on every edit. `querySelectorAll` collects the existing list items; loop over them, compare each item’s `textContent` with the lowercased query, then set its `hidden` property. Keep an `aria-live` count so a screen-reader user hears when results change.

Open `index.html` to locate the labelled control and output. In `script.js`, notice the selectors point to those IDs, then follow the event from the control to the updated page. `style.css` only changes presentation; it does not cause the behavior. This example is finished already so you can run it before writing the next exercise.

## Try it in the preview

Type “soup” and see only soup entries. Erase the query to restore every recipe. Notice that `hidden` changes visibility but leaves the item in the DOM; the count follows the same loop.

Nothing in this demo is graded. The following exercise asks you to build the same *idea* for a different situation; come back here if the event or state change feels hard to trace.
