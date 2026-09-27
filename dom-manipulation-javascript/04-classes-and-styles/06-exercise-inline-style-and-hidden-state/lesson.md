---
title: 'Exercise: style and hide a notice'
slug: exercise-inline-style-and-hidden-state
order: 6
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Practice element.style, CSS classes, and hidden in a small browser UI.
seo_title: 'Exercise: style and hide a notice | DOM Manipulation with JavaScript'
seo_description: Practice element.style, CSS classes, and hidden with a tested JavaScript DOM exercise.
seo_keywords:
- JavaScript DOM
- element.style, CSS classes, and hidden
- browser preview
- exercise
---

# Exercise: style and hide a notice

A community notice needs a one-off border color, a reusable visual emphasis, and a way to hide and restore it. This follows the **Inline styles, classes, and hidden** demo.

## Recall and transfer

`element.style.borderColor` writes an inline CSS property; camelCase corresponds to CSS `border-color`. A CSS class stores reusable styling in `style.css`, so `classList.add("highlight")` is cleaner for a multi-property look. `element.hidden = true` removes an element from layout and the accessibility tree; `false` shows it again. Inline styles can override class styles of the same property, so do not set the same property both ways unless you intend that priority.

Here is the same technique in a **different setting**; its selectors and data are not the answer to this exercise:

```javascript
const ticket = document.querySelector("#ticket");
ticket.style.outlineColor = "purple"; // one-off property
ticket.classList.add("highlight");  // reusable rules from CSS
ticket.hidden = true;                 // not displayed or announced
```

Recall the split: `style.borderColor` for a one-off property, `classList` for a named reusable appearance, and `hidden` for real visibility. Which CSS property is camel-cased? `border-color` → `borderColor`.

In this starter, `index.html` contains the targets, `style.css` holds the visual rules, and `script.js` is where you finish the behavior. Run the preview, make the change, then Submit to check each step. If nothing changes, first check the selector and whether the script is attached at the bottom of the page.

## Your Tasks

1. On `#set-border` click, set the notice’s inline `style.borderColor` to `teal` (and a solid border so it is visible).
2. On `#emphasize` click, add the reusable `highlight` CSS class to `#community-notice` without removing its `note` class.
3. On `#dismiss` click hide `#community-notice` using its `hidden` property; on `#restore` click show it again.
