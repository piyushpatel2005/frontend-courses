---
title: "Arrange the Vegetable Labels"
slug: arrange-vegetable-labels
order: 4
language: css
lesson_type: coding
runtime: srcdoc
summary: Apply CSS display values to arrange compact labels, a full-width note, and hidden helper text.
seo_title: CSS Display | Arrange Swap Table Labels
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

The demo used paragraphs for its labels. This vegetable table uses spans for the labels and trading note, so they begin as inline content. Their visual styling is supplied; add only the display rules in `style.css`.

The two labels need their own boxes while sharing a row. The note needs a new line. Only the organizer helper should disappear.

## Your Tasks

1. Set `.tag` to `display: inline-block;`.
2. Set `.swap-note` to `display: block;`.
3. Set `.hidden-helper` to `display: none;`.

## Inspect the arrangement

Run after each task. At a wide enough preview size, both labels should sit side by side; the note should begin below them. After the last task the helper should occupy no space. Submit checks every label, not just the first one.
