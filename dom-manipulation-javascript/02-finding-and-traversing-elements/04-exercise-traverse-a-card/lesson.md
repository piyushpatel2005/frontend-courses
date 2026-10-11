---
title: 'Exercise: trace a nested card'
slug: exercise-traverse-a-card
order: 4
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Navigate from a nested tool label to its row and enclosing card.
seo_title: 'Exercise: trace a nested card | Beginner JavaScript DOM'
seo_description: Navigate from a nested tool label to its row and enclosing card.
seo_keywords:
- JavaScript DOM
- parentElement exercise
- children index
- closest ancestor
---

The repair-café page has a label inside a row inside a card:

```html
<article class="card">
  <div class="tool-row">
    <strong>Needle kit</strong>
    <span class="featured-tool">Volunteer pick</span>
  </div>
</article>
```

From `.featured-tool`, `parentElement` reaches the row. The row's `children[0]` is the tool name. `closest("article")` travels farther up to the card. Use those different routes rather than assuming the immediate parent is the article.

Edit `script.js`. As in the demo, `card.dataset.featured = "yes"` sets a data attribute that the supplied CSS uses for a green border. Run after each change: first look for the available label, then the border. Glue brush should stay unchanged. Submit to check the two outcomes.

## Your Tasks

1. Starting from `.featured-tool`, use `parentElement` and its `children[0]` to append ` (available)` to the tool name in the same row.
2. Starting from `.featured-tool`, use `closest("article")` to set `data-featured="yes"` on its enclosing repair card, not on the inner row.
