---
title: Project - Create a Responsive Table Structure
slug: create-responsive-table
order: 1
language: html
validationRules: []
hints:
  - "Wrap table in a container with overflow-x for small screens."
  - "Use media query to reduce padding/font-size on narrow devices."
---

# Project: Create a Responsive Table Structure

Build a table layout that remains usable on mobile screens.

## Step-by-step instructions

1. Create a `.table-wrap` container and place a `<table>` inside it.
2. Add at least 4 columns and 3 body rows in the table.
3. Set `.table-wrap { overflow-x: auto; }` to enable horizontal scroll on small screens.
4. Style `th` and `td` with padding and borders.
5. Add a media query `@media (max-width: 640px)` to reduce cell padding/font-size.
6. Keep header row visually distinct with background color.

## Goal

Users on narrow screens should still be able to read and scroll table content.
