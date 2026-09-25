---
title: "Display Demo: Swap Table Labels"
slug: display-demo
order: 3
language: css
lesson_type: coding
runtime: srcdoc
summary: Compare inline, inline-block, block, and none while arranging labels on a seed swap table.
seo_title: CSS Display Demo | Seed Swap Labels
seo_description: Inspect CSS display values by arranging labels, a note, and a hidden helper on a seed swap table.
seo_keywords:
  - CSS display
  - inline-block
  - block element
  - display none
  - layout demo
hints:
  - Inline-block labels can have padding while still sharing a row.
---

# Display: swap table labels

A seed-swap table needs compact labels, a full-width note, and one helper message that stays out of sight. This finished example uses a different `display` value for each job.

## Read the arrangement

`.tag` is `inline-block`, so the two labels keep their own padded shapes while sitting on one line. `.swap-note` is `block`, so it claims a whole row. `.hidden-helper` uses `none`, so it takes no space at all.

**Checkpoint:** two rounded labels share a row, the note starts below them, and the helper text is absent.

## Try it safely

Change `.tag` to `display: block`, preview the page, and observe the labels stack. Restore `inline-block` before moving to the exercise.
