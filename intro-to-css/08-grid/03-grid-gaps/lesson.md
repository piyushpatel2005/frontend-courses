---
title: "Grid Gaps"
slug: grid-gaps
order: 3
language: css
summary: "`gap` creates space between grid tracks without adding margins to each card."
seo_title: "Grid Gaps | Introduction to CSS"
seo_description: "The `.event-grid` already has two equal columns. Its third card starts the next row. This lets you see both kinds of track spacing at once."
seo_keywords: [CSS, grid-gaps-demo, layout, beginner CSS]
lesson_type: coding
hints:
  - "Open style.css and change one declaration at a time."
  - "Run Preview after each change; restore the value before the exercise."
---

The `.event-grid` already has two equal columns. Its third card starts the next row. This lets you see both kinds of track spacing at once.

`gap: 1rem` sets both `row-gap` and `column-gap` to 1rem. It leaves space between the rows and between the columns. It does not add space around the outside of the grid or inside the cards; use container padding or card padding for those jobs.

Run Preview. Change the gap to `2rem` in `style.css`, then compare the horizontal and vertical spaces. The grid stays the same overall width, so a wider column gap leaves less width for the columns. The cards do not need individual margins. Restore `1rem` before the exercise.
