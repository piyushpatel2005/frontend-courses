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

**Mission:** Use reusable CSS values to give a field-note card a stable color system.

The `:root` rule defines reusable colors: `--ink`, `--accent`, and `--paper`. `var(--accent)` colors the note border and button hover. `transition: background-color 180ms ease` smooths that hover change; the button does not save data in this CSS-only demo.

## Try the demo

Change `--accent` and run Preview to see both uses update. Restore the color, then hover the button to see the transition.

**Checkpoint:** the preview already shows the finished field note color system demo interface. The next lesson asks you to recreate its key rules from a small starter.
