---
title: "Grid Placement Practice"
slug: grid-placement-practice
order: 6
language: css
summary: "`grid-column` lets an item occupy selected grid tracks."
seo_title: "Grid Placement | Introduction to CSS"
seo_description: "The Featured workshop demo placed one card across both columns. Here the Opening talk should take the full width, with Crafts and Games side by side below it."
seo_keywords: [CSS, exercise-grid-placement, layout, CSS exercise]
lesson_type: coding
hints:
  - "Use the demo as a reference, but write the rules yourself."
  - "Run Preview before Submit to inspect the visible result."
---

# Give the opening talk a full row

The Featured workshop demo placed one card across both columns. Here the Opening talk should take the full width, with Crafts and Games side by side below it.

The two-column grid, gaps, and orange highlight are supplied. Edit the existing `.card:first-child` rule in `style.css`; `:first-child` picks the first card among its siblings.

## Your Tasks

1. Set the first card's `grid-column` to `1 / -1`, from the first to the last explicit column line.

Run Preview. Opening talk should cover both tracks and the space between them, while the next two cards fill the row below. Submit to check the placement. Setting a large width alone would not reserve those grid cells.
