---
title: "Wrapping and Flex Items Demo"
slug: wrapping-flex-items-demo
order: 7
language: html
summary: "`flex-wrap` allows a flex line to continue on a new row; `flex` gives each item a useful base size."
seo_title: "Wrapping and Flex Items Demo | Introduction to CSS"
seo_description: "See flex-wrap and flex basis keep supply cards readable on narrow screens."
seo_keywords: [CSS, wrapping-flex-items-demo, layout, beginner CSS]
lesson_type: coding
hints:
  - "Open style.css and change one declaration at a time."
  - "Run Preview after each change; restore the value before the exercise."
---

# Supply labels: completed layout

Let supply cards move onto another line when space runs out. This completed preview shows the layout before you edit the next exercise.

In `style.css`, `.supply-row` controls the section. flex-wrap: wrap allows another row. The flex shorthand on each card sets grow, shrink, and a 9rem starting width; compare the cards at narrow and wide preview widths.

**Checkpoint:** inspect the card positions in Preview and locate `flex-wrap: wrap` in the stylesheet.

Change `flex-wrap` temporarily to `nowrap`, run Preview, and compare the positions. Restore `wrap` before moving to the exercise.
