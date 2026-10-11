---
title: Field note color system demo
slug: modern-css-demo
order: 1
language: html
summary: Use reusable CSS values to give a field-note card a stable color system.
seo_title: Field note color system demo | Intro to CSS
seo_description: Learn custom properties and transitions by building a small, visible CSS interface.
seo_keywords:
  - CSS
  - custom properties and transitions
  - HTML
  - beginner CSS
lesson_type: coding
hints:
  - Keep the stylesheet linked from the document head.
  - Change one declaration at a time, then use Run Preview to inspect the result.
---

# Field note color system demo

The bluebird note repeats an accent color on its border and button. A CSS custom property lets you name that color once and reuse it.

`:root` selects the document's root element. A custom property starts with two hyphens: `--accent: #e76f51`. Other rules read it with `var(--accent)`. The supplied `--ink` and `--paper` names work the same way. These properties inherit into the page's children, so the border and button can share them.

The button's `transition: background-color 180ms ease` describes a change: `background-color` is the property to animate, `180ms` is the duration (milliseconds), and `ease` changes the pace rather than keeping a constant speed. Put the transition on the normal button rule so it works both when entering and leaving the highlighted state.

`button:hover` highlights the button under a pointer. `button:focus-visible` gives keyboard users the same color change and a visible outline. The button does not save a note; this lesson only styles it.

## Try the demo

Change `--accent` in `style.css`, then Run Preview. Both the border and highlighted button should use the new color. Restore it. Hover the button, then use Tab to focus it and compare the highlight. The supplied reduced-motion query removes the transition when a visitor requests less motion; the next module explains that query in detail.
