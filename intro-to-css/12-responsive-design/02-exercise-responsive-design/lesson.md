---
title: "Harbor forecast exercise"
slug: exercise-responsive-design
order: 2
language: html
summary: "Set a narrow-screen grid and a 42rem two-column media query."
seo_title: "Harbor forecast exercise | Intro to CSS"
seo_description: "Practice mobile-first grid columns with a 42rem media query."
seo_keywords:
  - CSS
  - media queries and flexible layouts
  - HTML
  - beginner CSS
lesson_type: coding
---

# Harbor forecast exercise

The Harbor weather cards start in a grid, but they need an explicit one-column base and a wider layout. The HTML and the card styling are already supplied; edit only `style.css`.

In the preceding garden forecast, a media query changed the grid's columns when the viewport grew. Here use a 42rem breakpoint instead. You can resize the preview to compare the two states.

## Your Tasks

1. Set `.forecast` to one `1fr` grid column by default, so the cards stack on a narrow screen.
2. Inside `@media (min-width: 42rem)`, set `.forecast` to `repeat(2, 1fr)` columns, so the cards share a row on a wide screen.

Submit after checking the narrow and wide views. The next lesson explores sizing that changes continuously rather than at one breakpoint.
