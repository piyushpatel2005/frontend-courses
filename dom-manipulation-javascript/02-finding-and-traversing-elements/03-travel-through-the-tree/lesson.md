---
title: Move from a child to its relatives
slug: travel-through-the-tree
order: 3
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Navigate from a selected element through parentElement, children, and closest.
seo_title: Move from a child to its relatives | Beginner JavaScript DOM
seo_description: Navigate from a selected element through parentElement, children,
  and closest. Practice in a live JavaScript DOM preview.
seo_keywords:
- JavaScript DOM
- parentElement
- children
- closest
---

Selectors find a starting place. After that, the tree provides routes to nearby elements. On these book cards, the `.featured` label sits *inside* an article. `parentElement` moves one element up; `children` lists the parent's direct **element** children (not text nodes); `closest("article")` searches upward from the starting element, including itself, until it finds a matching ancestor.

![A sketched article containing a heading and a featured span, with routes for parentElement, children, and closest](traversal-map.svg)

```javascript
const label = document.querySelector(".featured");
const card = label.parentElement;
const firstChild = card.children[0];
const article = label.closest("article");
firstChild.textContent += " ★";
article.dataset.picked = "yes";
```

Run: the first card's heading gains a star and its border becomes green. Compare `parentElement` and `closest("article")` here: they happen to reach the same article because the label is a direct child. If a wrapper were inserted between them, `parentElement` would stop at that wrapper while `closest` would continue upward. `children[0]` is the first *element child* of the card, the heading. In the exercise you will navigate a deeper card, where the difference matters.
