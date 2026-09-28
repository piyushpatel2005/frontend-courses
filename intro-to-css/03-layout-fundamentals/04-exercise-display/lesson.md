---
title: "Exercise: Arrange Swap Table Labels"
slug: exercise-display
order: 4
language: css
lesson_type: coding
runtime: srcdoc
summary: Apply CSS display values to arrange compact labels, a full-width note, and hidden helper text.
seo_title: CSS Display Exercise | Arrange Swap Table Labels
seo_description: Practice inline-block, block, and none by arranging labels on a Riverside Seed Swap table.
seo_keywords:
  - CSS display exercise
  - inline-block CSS
  - display block
  - display none
  - CSS layout
hints:
  - Use a separate rule for each class.
  - "`display: none` removes the helper from the layout."
---

# Arrange swap table labels

Use the completed display demo as your reference. Here the labels are `<span>` elements (inline by default), while the trading note is also a `<span>`; set its display explicitly so it gets a full row. Hide only the organizer-only helper, not any essential instructions.

**Checkpoint:** previewing your styles should show two labels side by side and no helper text.

## Your Tasks

1. Set `.tag` to `display: inline-block;` so category labels can share a row.
2. Set `.swap-note` to `display: block;` so the note occupies a full row.
3. Set `.hidden-helper` to `display: none;` so the organizer helper is hidden.
