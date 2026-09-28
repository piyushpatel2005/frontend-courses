---
title: 'Exercise: trace a nested card'
slug: exercise-traverse-a-card
order: 4
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Travel from a nested label to its immediate parent, sibling heading, and
  enclosing article.
seo_title: 'Exercise: trace a nested card | Beginner JavaScript DOM'
seo_description: Travel from a nested label to its immediate parent, sibling heading,
  and enclosing article. Practice in a live JavaScript DOM preview.
seo_keywords:
- JavaScript DOM
- parentElement exercise
- children index
- closest ancestor
---

The book demo started from a `.featured` span and moved around its article. Your repair-café card has one extra layer: the `.featured-tool` label is inside a `.tool-row`, and that row sits inside an `<article>`. One step up should find the **row**, while `closest("article")` must find the outer card.

On an unrelated music-card page, the same route could look like this:

```javascript
const tag = document.querySelector(".album-tag");
const row = tag.parentElement;
const name = row.children[0];
const album = tag.closest("article");
name.textContent += " (recommended)";
album.dataset.highlight = "yes";
```

In your page, the first child of `.tool-row` is the tool name. Append ** (available)** to it and mark the *article* with `data-featured="yes"`. Observe the green border in Preview. Keep the second card untouched.

## Your Tasks

1. Starting from `.featured-tool`, use `parentElement` and its `children[0]` to append ` (available)` to the tool name in the same row.
2. Starting from `.featured-tool`, use `closest("article")` to set `data-featured="yes"` on its enclosing repair card, not on the inner row.
