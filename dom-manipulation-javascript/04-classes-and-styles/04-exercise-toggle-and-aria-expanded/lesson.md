---
title: 'Exercise: toggle the help panel'
slug: exercise-toggle-and-aria-expanded
order: 4
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Practice classList.toggle and aria-expanded in a small browser UI.
seo_title: 'Exercise: toggle the help panel | DOM Manipulation with JavaScript'
seo_description: Practice classList.toggle and aria-expanded with a tested JavaScript DOM exercise.
seo_keywords:
- JavaScript DOM
- classList.toggle and aria-expanded
- browser preview
- exercise
---

# Exercise: toggle the help panel

The help button starts collapsed. Wire it so two clicks open then close its associated panel, updating visual and accessibility states together. This follows the **Toggle a panel accessibly** demo.

## Recall and transfer

`classList.toggle("is-open")` adds the class if absent and removes it if present, returning the new boolean state. The button’s `aria-expanded` must be the string `"true"` when the panel is shown and `"false"` when hidden. `aria-controls` identifies the panel. Use the native `hidden` property to make a collapsed panel actually unavailable, not merely visually faded. Initialize all three states consistently.

Here is the same technique in a **different setting**; its selectors and data are not the answer to this exercise:

```javascript
const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");
menuButton.addEventListener("click", () => {
  const open = menu.classList.toggle("is-open");
  menu.hidden = !open;
  menuButton.setAttribute("aria-expanded", String(open));
});
```

Recall the three linked states: `is-open` class, panel `hidden`, button `aria-expanded`. When open they are present, false, and `"true"`; when closed they are absent, true, and `"false"`.

In this starter, `index.html` contains the targets, `style.css` holds the visual rules, and `script.js` is where you finish the behavior. Run the preview, make the change, then Submit to check each step. If nothing changes, first check the selector and whether the script is attached at the bottom of the page.

## Your Tasks

1. Click `#help-toggle` once to add `is-open` to `#help-panel` and show it by setting `hidden` to `false`.
2. Keep `aria-expanded` on the button synchronized: `true` while open, then after the next click remove `is-open`, hide the panel, and set `aria-expanded` back to `false`.
