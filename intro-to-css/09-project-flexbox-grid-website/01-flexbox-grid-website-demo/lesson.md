---
title: River radio schedule demo
slug: flexbox-grid-website-demo
order: 1
language: html
summary: Combine flexbox and grid for a one-page River Radio schedule.
seo_title: River radio schedule demo | Intro to CSS
seo_description: Learn using flexbox for controls and grid for cards by building a small, visible CSS interface.
seo_keywords:
  - CSS
  - using flexbox for controls and grid for cards
  - HTML
  - beginner CSS
lesson_type: coding
hints:
  - Keep the stylesheet linked from the document head.
  - Change one declaration at a time, then use Run Preview to inspect the result.
---

# River radio schedule demo

**Mission:** Combine flexbox and grid for a one-page River Radio schedule.

`.schedule-head` uses Flexbox to place the title and button at opposite ends of a row (`justify-content: space-between`). `.show-grid` uses Grid for three equal show columns (`repeat(3, 1fr)`). Flexbox handles the single row; Grid handles the card tracks.

## Try the demo

Change `.show-grid` to two columns and see the last show wrap. Restore three columns. Then remove `display: flex` from `.schedule-head` and notice the button drop below the title; restore it before continuing.

**Checkpoint:** the preview already shows the finished river radio schedule demo interface. The next lesson asks you to recreate its key rules from a small starter.
