---
title: "Tool checkout table"
slug: exercise-responsive-table
order: 2
language: css
summary: "Keep checkout columns readable with a minimum table width and scrolling wrapper."
seo_title: "Tool checkout table | Intro to CSS"
seo_description: "Practice responsive table overflow and a 32rem table minimum width."
seo_keywords:
  - CSS
  - responsive overflow and table styling
  - HTML
  - beginner CSS
lesson_type: coding
---

# Tool checkout table
The supplied checkout table already has headings, data, and cell styles. Like the seed inventory demo, it needs a minimum width for readable columns and a wrapper that handles the extra width on a phone. Edit only `style.css`.

## Your Tasks

1. Set `.table-wrap` to `overflow-x: auto` so its contents can scroll horizontally when needed.
2. Set `table` to `min-width: 32rem` so its columns keep enough room for the checkout information.

The supplied wrapper already has a keyboard tab stop, a region name, and a focus outline. Run Preview at about 360px wide, press Tab to focus that region, then use Right Arrow to reach the Desk column. The table may scroll; the whole page should not.

Widen the preview to see the whole table without scrolling, then Submit. The data stays in a real table instead of losing columns. The final project applies responsive sizing to a profile sheet.
