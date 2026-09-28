---
title: "Cross-Axis Alignment Demo"
slug: cross-axis-demo
order: 5
language: html
summary: "`align-items` aligns items across the cross axis."
seo_title: "Cross-Axis Alignment Demo | Introduction to CSS"
seo_description: "See align-items center line up short and tall trip-briefing cards."
seo_keywords: [CSS, cross-axis-demo, layout, beginner CSS]
lesson_type: coding
hints:
  - "Open style.css and change one declaration at a time."
  - "Run Preview after each change; restore the value before the exercise."
---

# Trip briefing: completed layout

Line up a short status card beside a taller weather card. This completed preview shows the layout before you edit the next exercise.

In `style.css`, `.briefing-row` controls the section. With a horizontal main axis, the cross axis runs top to bottom. align-items: center puts the cards’ vertical centers on the same line instead of stretching them.

**Checkpoint:** inspect the card positions in Preview and locate `align-items: center` in the stylesheet.

Change `align-items` temporarily to `flex-start`, run Preview, and compare the positions. Restore `center` before moving to the exercise.
