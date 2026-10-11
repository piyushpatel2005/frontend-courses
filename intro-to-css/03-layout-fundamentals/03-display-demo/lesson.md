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

# Choose how labels take up space

The seed-swap table needs labels that can share a line, a note beneath them, and a nonessential helper hidden from visitors. `display` controls the kind of box an element creates.

A normal `block` box starts a new line and uses the available width. An `inline` box sits in the text flow; ordinary width and height declarations do not size it like a block. `inline-block` keeps a single box in that flow while allowing block-like sizing. It can sit next to another label when there is room.

The `.tag` paragraphs use `inline-block`; their padding and colors are supplied. `.swap-note` uses `block`, already a paragraph's default. In the exercise the note is a span, so it will need that rule to start a new line.

`display: none` on `.hidden-helper` removes its box entirely and hides it from assistive technology. This helper is nonessential; never hide the only copy of instructions someone needs.

## Compare the row

Run to see two labels together and the note below. Change `.tag` to `display: block` and Run: the labels stack. Restore `inline-block`. Temporarily remove the helper's `display: none` to reveal it, then undo that change.
