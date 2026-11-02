---
title: Field note color system
slug: exercise-modern-css
order: 2
language: css
summary: Use reusable CSS values to give a field-note card a stable color system.
seo_title: Field note color system | Intro to CSS
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

# Field note color system
Use one named accent for the fox-track observation. The starter already reads `var(--accent)` on its border and highlighted button, but that custom property is missing. Until you define it, those declarations cannot use the intended accent.

Work in `style.css`. The keyboard highlight, focus outline, and reduced-motion override are supplied. As in the bluebird demo, define the shared value on `:root`, then smooth the button's color change.

## Your Tasks

1. Define `--accent: #e76f51` on `:root`.
2. Add `transition: background-color 180ms ease` to the normal `button` rule.

Run Preview after each edit. First inspect the border color; then hover or Tab to the button to inspect the color change. Submit to check the two declarations. With reduced motion enabled, the color still changes, but it changes immediately.
