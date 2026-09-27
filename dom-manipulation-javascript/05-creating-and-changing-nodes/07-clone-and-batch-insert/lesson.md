---
title: Clone a Card and Insert a Batch
slug: clone-and-batch-insert
order: 7
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Copy a nested card with cloneNode(true) and insert several copies in one document fragment.
seo_title: Clone a Card and Insert a Batch | DOM Manipulation with JavaScript
seo_description: Use cloneNode(true) and document.createDocumentFragment to prepare several DOM cards before one
  append.
seo_keywords:
- cloneNode true demo
- document fragment
- batch DOM insertion
---

# Clone a Card and Insert a Batch

A seed swap board has one example plant card. Make two more cards with the same nested structure without writing a new HTML string for each one.

## How it works

`cloneNode(true)` copies an element *and its descendants*; `false` would copy only the outer element. Each clone is a separate node, so change its nested `.plant-name` span before attaching it. Avoid repeating `id` attributes in a copied subtree—this template uses classes instead. A `DocumentFragment` is a temporary holder, not a visible element: appending cards to it leaves the page unchanged until `#plants.append(fragment)` moves all its children into the real list. After insertion the fragment is empty; the browser did not add a wrapper around the cards. Clone nodes do not copy JavaScript listeners registered with `addEventListener`; use the parent-list delegation technique if future cloned buttons need clicks.

```javascript
const batch = document.createDocumentFragment();
for (const name of ["Basil", "Mint"]) {
  const copy = example.cloneNode(true);
  copy.querySelector(".plant-name").textContent = name;
  batch.append(copy);
}
list.append(batch);
```

## Try the preview

Run the preview: Thyme stays first, then Basil and Mint appear with their own Seed packet labels. Change the text in one clone to confirm the others do not change. Notice there is no fragment element around them in the Elements tree.

## Remember

You used `createElement` to make one node and `append` to place it. A deep clone reuses existing *structure*, while a fragment lets you prepare multiple nodes before a single insertion.

The following exercise applies these ideas to a different page.
