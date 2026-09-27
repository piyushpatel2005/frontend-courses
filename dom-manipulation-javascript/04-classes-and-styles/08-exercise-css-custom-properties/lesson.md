---
title: 'Exercise: change a workshop card accent'
slug: exercise-css-custom-properties
order: 8
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Set and remove a CSS custom property to switch a workshop card's accent and restore its stylesheet default.
seo_title: Exercise JavaScript CSS Custom Properties | DOM Manipulation Course
seo_description: Practice style.setProperty and removeProperty in a tested DOM exercise that changes a workshop card border and label together.
seo_keywords:
  - CSS variables JavaScript exercise
  - style.setProperty example
  - style.removeProperty example
  - DOM card theme
hints:
  - Call style.setProperty("--accent", value) on the card, not on the button.
  - removeProperty removes the inline override so the stylesheet value wins again.
---

# Exercise: change a workshop card accent

The night-market demo changed two visual details by setting one custom property. A ceramics workshop card now needs an optional plum accent and a way to restore the stylesheet's teal default.

## Transfer the idea

A CSS custom property starts with two hyphens, like `--accent`. A declaration such as `border-color: var(--accent)` looks up the effective value. `element.style.setProperty("--accent", "#hex")` changes the value inline on that element, so descendants can inherit it. `element.style.removeProperty("--accent")` removes the inline value and exposes the value declared in `style.css` again. Do not replace a class or entire `style` attribute merely to change one shared variable.

Here is a separate **reading-room shelf** example. Its selectors, value, and text are not your workshop answer:

```javascript
const shelf = document.querySelector("#reading-shelf");
const apply = document.querySelector("#shelf-violet");
const reset = document.querySelector("#shelf-reset");
apply.addEventListener("click", () => {
  shelf.style.setProperty("--shelf-accent", "#7048a4");
});
reset.addEventListener("click", () => {
  shelf.style.removeProperty("--shelf-accent");
});
```

The starter stylesheet already uses `var(--accent)` for the card border and its tag. Run the preview, click Plum accent, then Reset accent; inspect both pieces of the card. Write the handlers in `script.js` and submit when both directions work.

## Your Tasks

1. Keep the default CSS `--accent: #167069` on `#workshop-card`, with no inline override; on load, change `#theme-status` to `Teal accent selected.`
2. On `#plum-accent` click, set `--accent` inline on `#workshop-card` to `#713e83` and show `Plum accent selected.`; the card border and tag should both change.
3. On `#reset-accent` click, remove the inline `--accent` override and show `Teal accent restored.`; the border and tag should return to teal.
