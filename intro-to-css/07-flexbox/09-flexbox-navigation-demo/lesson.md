---
title: "Flexbox Navigation Demo"
slug: flexbox-navigation-demo
order: 9
language: html
summary: "Combining flex direction, main-axis spacing, alignment, and gaps creates a dependable one-dimensional layout."
seo_title: "Flexbox Navigation Demo | Introduction to CSS"
seo_description: "Inspect a two-group expedition header built with Flexbox spacing and alignment."
seo_keywords: [CSS, flexbox-navigation-demo, layout, beginner CSS]
lesson_type: coding
hints:
  - "Open style.css and change one declaration at a time."
  - "Run Preview after each change; restore the value before the exercise."
---

# Expedition header: completed layout

Keep the expedition title separate from its actions. This completed preview shows the layout before you edit the next exercise.

In `style.css`, `.nav-row` controls the section. The nav row uses display: flex; justify-content: space-between pushes its two groups apart, while align-items: center lines up their vertical centers. The gap prevents them touching.

**Checkpoint:** inspect the card positions in Preview and locate `align-items: center` in the stylesheet.

Change `align-items` temporarily to `flex-start`, run Preview, and compare the positions. Restore `center` before moving to the exercise.
