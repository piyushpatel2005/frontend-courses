---
title: "Sizing and Overflow Demo"
slug: sizing-overflow-demo
order: 7
language: css
lesson_type: coding
runtime: srcdoc
summary: "Width, max-width, max-height, and overflow control how a box responds when its content or screen changes."
seo_title: "Sizing and Overflow Demo | Introduction to CSS"
seo_description: "Width, max-width, max-height, and overflow control how a box responds when its content or screen changes. Build and inspect the result in a live CSS preview."
seo_keywords:
  - CSS
  - sizing overflow demo
  - CSS demo
hints:
  - Change one CSS value, then run the preview.
  - Restore the original value before continuing.
---

# Sizing and Overflow Demo

## Mission

The Riverside Seed Swap notice needs predictable card sizes even when someone adds a long message.

## What to notice

The `.card` rule sets a `14rem` preferred width and a `100%` maximum so it can fit a narrow container. Its `max-height: 7rem` limits the height; `overflow: auto` lets a long note scroll rather than spill out. The row arrangement is supplied for this example; Flexbox comes later.

## Try the preview

Scroll the longer note inside its card. Then change `.card`'s `overflow` to `visible`, run the preview, and see the text spill below its boundary. Restore `auto` before the exercise.

## Checkpoint

The long note remains inside its card and can be scrolled; the shorter note fits without scrolling.
