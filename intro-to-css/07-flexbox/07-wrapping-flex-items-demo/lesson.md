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

# Let supply cards move to another line

A flex container uses `nowrap` by default. Its items try to fit one line, often shrinking as the row gets narrower. `flex-wrap: wrap` on `.supply-row` lets the browser start another line instead.

Wrapping and item sizing are separate decisions. This example puts `flex: 1 1 9rem` on `.card`, because `flex` describes each item rather than the container. The three values mean:

- `flex-grow: 1`: the card can take a share of spare room on its line. These cards have equal grow values, so they receive equal shares.
- `flex-shrink: 1`: the card may shrink when a line is too small, subject to its content's minimum size.
- `flex-basis: 9rem`: start the sizing calculation from a 9rem main-axis size. This is not a fixed final width.

The supplied cards use the default content-box sizing, so their padding is added outside that basis. The gaps also take space. That is why three cards may need another line even when three lots of 9rem seem to fit.

Run Preview at a wide and a narrow width. Each line shares its own free space: a card alone on the last line grows across that line. Temporarily change `wrap` to `nowrap` and notice the cards squeeze onto one line. Restore `wrap`, then try a 6rem basis to see more cards fit. Restore `9rem` afterward.
