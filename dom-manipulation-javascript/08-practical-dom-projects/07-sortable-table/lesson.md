---
title: Sort a workshop table with accessible buttons
slug: sortable-table
order: 7
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Sort existing table rows by title with a keyboard-accessible button and an aria-sort indicator.
seo_title: Sortable HTML Table with JavaScript DOM APIs | Demo
seo_description: Learn to reorder table rows with Array.from, sort, and replaceChildren while keeping a column header's aria-sort state accurate.
seo_keywords:
  - sortable table JavaScript
  - table aria-sort
  - DOM replaceChildren
  - accessible table button
---

# Sort a workshop table with accessible buttons

A workshop schedule needs an alphabetical session list. This finished mini-project reorders existing rows when you press the button in the Session header; the button works with keyboard activation too.

## Trace the sort

The button lives inside a `<th scope="col">`, and `aria-sort` belongs on that **header**, not the button. `none` means no sort yet; the first click makes it `ascending`, and the next makes it `descending`. Native buttons already respond to Enter and Space, so no custom key handler is needed.

In `script.js`, `Array.from(body.rows)` copies the current row elements into an array. `sort((a, b) => ...)` compares each row's first cell using `localeCompare` (alphabetical text comparison). Swapping the comparison order reverses the result. `body.replaceChildren(...rows)` moves those **same existing nodes** into sorted order—no HTML strings, regenerated row markup, or lost cell contents. Finally `setAttribute("aria-sort", direction)` tells assistive technology the current order. The button label remains meaningful even when the direction changes.

## Try it in the preview

Read the initial order, activate Sort by session twice, and watch the first column and header state each time. Tab to the button and press Enter; it sorts without any custom keyboard listener. In the code, change one session title, run again, and check the alphabetical result before restoring it. The following exercise applies this pattern to a different table.

## Learn more

MDN's [aria-sort reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) explains the sortable-header state.
