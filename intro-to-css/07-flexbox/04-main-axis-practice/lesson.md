---
title: "Main Axis Practice"
slug: main-axis-practice
order: 4
language: css
summary: "`justify-content` distributes items along the main axis."
seo_title: "Main-Axis Spacing | Introduction to CSS"
seo_description: "Practice justify-content space-between on a row of trail tools."
seo_keywords: [CSS, exercise-main-axis, layout, CSS exercise]
lesson_type: coding
hints:
  - "Use the demo as a reference, but write the rules yourself."
  - "Run Preview before Submit to inspect the visible result."
---

# Space out the trail tools

The demo distributed spare room between three cards. This row contains a Compass, Torch, and Whistle. Give the tools room to separate without adding margins to each card.

The dashed border and its inner padding are ready. The supplied `overflow-wrap: anywhere` lets tool names wrap when the preview is narrow. Edit `.tool-row` in `style.css`; you do not need to change the HTML.

## Your Tasks

1. Set `.tool-row` to `display: flex`.
2. Set `.tool-row` to `justify-content: space-between`.

Run Preview after step 1 to see the cards gather at the start. After step 2, the outer cards should reach the row's inner edges, with the remaining room shared between them. Submit to check each change.
