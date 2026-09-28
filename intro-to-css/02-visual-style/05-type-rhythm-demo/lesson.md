---
title: Type Rhythm Demo
slug: type-rhythm-demo
order: 5
language: html
summary: Inspect font family, line height, and letter spacing in a readable CSS market note.
seo_title: CSS Typography Demo | Visual Style
seo_description: See font-family, line-height, and letter-spacing shape the readability of a CSS event note.
seo_keywords:
  - CSS typography
  - font family
  - line height
  - letter spacing
lesson_type: coding
hints:
  - Typography rules can target the page body, a heading, or paragraphs separately.
---

# Type Rhythm Demo

Visual style also affects how text reads. This market note uses a serif body font, extra paragraph line height, and modest heading letter spacing. The supplied card layout is just a frame for these typography changes.

In `style.css`, `.note > p:not(.label)` selects the longer paragraph but not its small label. Its `line-height: 1.7;` controls the vertical space between lines. `letter-spacing: 0.04em;` spaces heading letters relative to their font size. You can use the simpler `.note p` selector in the exercise.

## Visible checkpoint

Run the preview. The paragraph should feel open instead of crowded, and the heading should have a deliberate rhythm.

## Try it safely

Change the paragraph `line-height` to `1.2`, run the preview, and observe the tighter text. Restore `1.7` before continuing.

Next, apply the same reading-friendly choices in **Type Rhythm Exercise**.
