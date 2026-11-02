---
title: "Pin the Pickup Location"
slug: exercise-positioning
order: 6
language: css
lesson_type: coding
runtime: srcdoc
summary: Use relative and absolute positioning to attach a pickup pin to a seed swap map card.
seo_title: CSS Positioning | Pin the Pickup Location
seo_description: Practice relative and absolute CSS positioning by pinning a label to a Riverside Seed Swap map card.
seo_keywords:
  - CSS positioning exercise
  - position relative CSS
  - position absolute CSS
  - top right CSS
  - layout fundamentals
hints:
  - Position the card before positioning the pin.
  - Put both offsets in the `.pickup-pin` rule.
---

# Pin the greenhouse pickup notice

The library demo attached “Today” to a card. This greenhouse notice needs a “Saturday” pin in the same corner. Border, padding, and colors are supplied. Add the positioning declarations in `style.css`.

Give the card a reference position first. Then remove the pin from normal flow before setting its offsets. Each step has a check; the pin may briefly look misplaced while its offsets are unfinished.

## Your Tasks

1. Set `.map-card` to `position: relative;`.
2. Set `.pickup-pin` to `position: absolute;`.
3. Set `.pickup-pin` to `top: 12px;`.
4. Set `.pickup-pin` to `right: 12px;`.

## Follow the offsets

Run and Submit after each task. The first step alone should not move the card. The finished pin sits 12px inside the top and right inner border edges, without taking a line above the heading. Leave the supplied padding so the pin does not cover the message.
