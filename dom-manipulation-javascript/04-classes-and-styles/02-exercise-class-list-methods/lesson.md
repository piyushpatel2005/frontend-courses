---
title: 'Exercise: mark a favourite card'
slug: exercise-class-list-methods
order: 2
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Practice classList.add, remove, and contains in a small browser UI.
seo_title: 'Exercise: mark a favourite card | DOM Manipulation with JavaScript'
seo_description: Practice classList.add, remove, and contains with a tested JavaScript DOM exercise.
seo_keywords:
- JavaScript DOM
- classList.add, remove, and contains
- browser preview
- exercise
---

# Exercise: mark a favourite card

Readers can mark or clear a favourite book card. Show the current state beside the card. This follows the **Add, remove, and check classes** demo.

## Recall and transfer

`classList.add("active")` adds a class without removing existing classes. `classList.remove("active")` removes only that class. `classList.contains("active")` returns a boolean so your code can report the current state. CSS defines what `.active` looks like; JavaScript only chooses whether the element has it.

Here is the same technique in a **different setting**; its selectors and data are not the answer to this exercise:

```javascript
const shelf = document.querySelector("#shelf");
shelf.classList.add("selected");
console.log(shelf.classList.contains("selected")); // true
shelf.classList.remove("selected");
```

Which method answers a yes/no question about a class? `contains`. Which two methods change it? `add` and `remove`.

In this starter, `index.html` contains the targets, `style.css` holds the visual rules, and `script.js` is where you finish the behavior. Run the preview, make the change, then Submit to check each step. If nothing changes, first check the selector and whether the script is attached at the bottom of the page.

## Your Tasks

1. On `#favourite` click, add `active` to `#book-card` without losing its `note` class, and report `Favourite: yes` in `#favourite-status`.
2. On `#unfavourite` click, remove `active` while keeping `note`, and report `Favourite: no`; check membership using `classList.contains`.
