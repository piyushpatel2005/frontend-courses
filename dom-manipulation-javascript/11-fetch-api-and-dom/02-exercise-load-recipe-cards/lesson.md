---
title: 'Exercise: load recipe cards'
slug: exercise-load-recipe-cards
order: 2
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Load an offline fixture with a fetch-shaped function and show recipe titles as safe DOM text.
seo_title: 'Recipe cards with fetch and DOM | Exercise'
seo_description: Load an offline fixture with a fetch-shaped function and show recipe titles as safe DOM text.
seo_keywords: mock fetch, recipe cards, safe DOM rendering
---

# Exercise: load recipe cards

A recipe shelf needs a button that loads names on demand. The preview is intentionally powered by an **explicit in-page mock fetch**, so it works offline and never claims to show live data.

The preceding notice demo used a single object; this time the fixture returns an array of recipes. The button and list exist already. A `Response` is only a wrapper around the body: you still have to `await response.json()` to obtain the array. Since a server controls the text, create a node and set its `textContent` for each recipe instead of inserting an HTML string.

For comparison, a separate example might render a book list:

```javascript
async function showBooks() {
  const response = await mockFetch("/api/books");
  const books = await response.json();
  const list = document.querySelector("#books");
  list.replaceChildren();
  for (const book of books) {
    const item = document.createElement("li");
    item.textContent = book.name;
    list.append(item);
  }
}
```

The recipe fixture in `script.js` is deliberately local and labeled as mock data; no external service is contacted. Click **Load recipes** after editing. First see “Loading recipes…”, then two readable list items. The second title includes HTML-looking text; it must remain text. If the list stays empty, check that you actually call the async function from the button handler.

## Your Tasks

1. On click, start `mockFetch("/api/recipes")` and immediately show `Loading recipes…` in `#recipe-status` while its Promise is pending.
2. Await that response and its JSON array, then render each recipe title as a text-only `li` in a cleared list.
3. After the list has rendered, change the status to `Recipes loaded.`.
