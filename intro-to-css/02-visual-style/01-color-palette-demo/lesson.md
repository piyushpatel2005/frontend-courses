---
title: Color Palette Demo
slug: color-palette-demo
order: 1
language: html
summary: Inspect how a small CSS color palette gives a night-market flyer contrast and emphasis.
seo_title: CSS Color Palette Demo | Visual Style
seo_description: See text, surface, and accent colors work together in a CSS night-market flyer, then safely experiment in the preview.
seo_keywords:
  - CSS colors
  - color property
  - hex colors
  - visual hierarchy
lesson_type: coding
hints:
  - Find the selector that matches the part of the flyer you want to recolor.
---

# Give the market flyer a color palette

This module moves from museum notes to a Lantern Lane Night Market flyer. The panel needs light text, a dark surface, and a small accent visitors can spot quickly.

In `.flyer`, `background-color: #172554` paints the panel navy. `color: #fff7ed` sets cream text that its children inherit unless they have their own color rule. The `.badge` rule gives “Free entry” a coral background and navy text. Background and text colors are separate choices.

A hex color starts with `#`. In a six-digit code, the pairs describe red, green, and blue amounts. You can also use named colors such as `navy`, or `rgb()` values. The tasks give exact colors so you can compare your result.

The sizing and centering rules are supplied. You will learn Grid and the sizing functions later; leave those rules alone here.

## Try a different emphasis

Run and find the cream title, pale-blue details, and coral badge. Change only the badge's `background-color` to `white`, then Run again. Its words stay navy while its surface changes. Restore `#fb7185` before the ticket exercise.

## Learn more

MDN's [color property reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/color) explains the available color formats.
