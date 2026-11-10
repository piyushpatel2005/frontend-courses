---
title: "Mark a Favourite Book"
slug: mark-a-favourite-book
order: 2
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Mark a favourite book without losing its existing classes.
seo_title: "Mark a Favourite Book | JavaScript DOM"
seo_description: Mark a favourite book without losing its existing classes.
seo_keywords:
- JavaScript DOM
- classList.add, remove, and contains
- browser preview
- JavaScript DOM
---

Let readers mark The Field Guide as a favourite. The card's `note` class supplies its base appearance; `active` adds the green highlight.

The two click listeners are already in `script.js`. Add your statements inside their callback bodies. The browser runs the appropriate body when its button is activated, as in the programme demo.

After changing the class, use `bookCard.classList.contains("active")` to choose the status text. An `if`/`else` works. The shorter expression `condition ? "yes" : "no"` also works: it returns the first value when the condition is true, otherwise the second.

Run after each task. Favourite should add the highlight; Remove favourite should clear it. Neither button should remove the base `note` class. Submit to check the class changes and messages separately.

## Your Tasks

1. In the Favourite callback, add `active` to `#book-card` without removing `note`.
2. After that change, use `classList.contains` to report `Favourite: yes` in `#favourite-status`.
3. In the Remove favourite callback, remove `active` while keeping `note`.
4. After removing it, use `classList.contains` to report `Favourite: no` in `#favourite-status`.
