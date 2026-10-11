---
title: Background Layer Exercise
slug: exercise-background-layer
order: 4
language: html
summary: Create a layered CSS background with a fallback color and diagonal gradient.
seo_title: CSS Background Gradient Exercise | Visual Style
seo_description: Practice background-color, linear-gradient, and text color in a CSS event panel.
seo_keywords:
  - CSS background exercise
  - linear-gradient
  - background-color
  - CSS styling
lesson_type: coding
hints:
  - Put the gradient in `background-image`, not `color`.
  - A gradient needs its angle followed by its color stops.
---

# Add the announcement background

The welcome-panel demo blended violet into pink. This smaller announcement needs that kind of background behind a different message. Its spacing and the dark backing behind its text are supplied. Add the missing declarations in `style.css`.

The solid color is a fallback beneath the gradient. Adding the opaque gradient will cover that fallback rather than remove it.

## Your Tasks

1. Set `.announcement` to a `#7c3aed` background color.
2. Set `.announcement`'s `background-image` to `linear-gradient(135deg, #7c3aed, #ec4899)`.
3. Set `.announcement` text color to `white`.

## Inspect both layers

Run after the first task to see solid violet, then after the second to see the diagonal blend. After the third, the message should be white against its supplied dark backing. Submit checks each declaration, including the fallback that is no longer visible.
