---
title: Project - Flexbox Website with Grid Layout
slug: create-flexbox-grid-website
order: 1
language: html
validationRules: []
hints:
  - "Use flexbox for header/nav alignment and grid for content cards."
  - "Keep layout responsive with repeat() and minmax()."
---

# Project: Create a Flexbox Website with Grid Layout

Build a small landing page that combines flexbox and grid.

## Step-by-step instructions

1. Create a `.site-header` with logo and nav links.
2. Set `.site-header` to `display: flex; justify-content: space-between; align-items: center;`.
3. Create a `.features` section containing multiple `.card` items.
4. Set `.features` to `display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;`.
5. Add a media query at `max-width: 900px` to reduce features grid to 1 column.
6. Add card padding and border radius for visual clarity.

## Goal

Use flexbox and grid together in one realistic page layout.
