---
title: Build directory cards and a selected profile
slug: exercise-directory-cards-and-selection
order: 2
language: javascript
runtime: srcdoc
lesson_type: coding
summary: 'Build the community directory’s first layer: static cards and a selected
  member profile.'
seo_title: Build directory cards and a selected profile | DOM Manipulation with JavaScript
seo_description: Create static community cards and update a detail panel when a card
  is selected.
seo_keywords:
- JavaScript DOM manipulation
- community directory cards exercise
- browser DOM project
---


# Build directory cards and a selected profile

The community directory starts with three static member cards and a detail panel. The prior tool-shelf demo showed the click-to-detail pattern with *different* data; now make it work for this directory.

The starter contains two member cards, their `data-name` and `data-skill` values, and the detail panel. Add a third card for Leah Chen (Bread baking) in `index.html`, then implement selection in `script.js`. The initial prompt remains until someone selects a card. Each View button should choose exactly its own card, with `textContent` copying the card’s data into the detail fields rather than inserting markup.

Here is the same selection idea in a different setting: a library shelf. The button identifies its enclosing card; the card holds the data, so we never need to guess which title belongs to the click.

```javascript
document.querySelector("#book-shelf").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  const book = button.closest("[data-title]");
  document.querySelector("#book-summary").textContent = book.dataset.title;
});
```

For the directory, adapt that relationship to member cards and update *both* detail fields. Use `classList` to move the visual selection, not to replace the text update.

## Your Tasks

1. Add a third static member card for Leah Chen, with `data-name="Leah Chen"`, `data-skill="Bread baking"`, visible name and skill, and a native View button; keep the labelled detail panel.
2. When a View button is clicked, show that card’s name and skill as text in `#detail-name` and `#detail-skill`.
3. Mark only the current card with `selected` and remove that class from the previous choice when another card is viewed.

Run the preview and select Omar, then Leah. The details and border should follow your selection. This solution becomes the starter behavior for the search step.
