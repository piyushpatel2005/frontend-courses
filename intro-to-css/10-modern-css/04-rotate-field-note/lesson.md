---
title: "Rotate a Field Note"
slug: rotate-field-note
order: 4
language: css
lesson_type: coding
runtime: srcdoc
summary: "Run Preview: the pinned card should tilt while its neighbor stays put."
seo_title: "Rotate a Field Note | Introduction to CSS"
seo_description: "Run Preview: the pinned card should tilt while its neighbor stays put. Build and inspect the result in a live CSS preview."
seo_keywords:
  - CSS
  - exercise transforms
  - CSS exercise
hints:
  - Use the preceding demo as your reference.
  - Run Preview before submitting your tests.
---

Tilt the pinned creek-walk note without moving the adjacent oak survey. The preceding demo showed how `rotate()` changes the painted card and how `transform-origin` chooses its pivot.

The HTML and CSS already supply two cards and their Flexbox row. Add the missing declarations inside `.tilted` in `style.css`.

## Your Tasks

1. Set `.tilted` to `transform: rotate(-3deg)`.
2. Set `.tilted` to `transform-origin: left center`.

Run Preview after the first task to see rotation around the default center. After the second, inspect the left-edge pivot. The oak survey should stay in the same place throughout. Submit to check each change.
