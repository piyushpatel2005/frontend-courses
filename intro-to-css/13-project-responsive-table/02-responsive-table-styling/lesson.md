---
title: Responsive Table Styling
slug: responsive-table-styling
order: 2
language: html
validationRules: []
hints:
  - "Use overflow-x: auto on the wrapper for small screens."
  - "Use media query to reduce table density on narrow viewports."
---

# Responsive Table Styling

Add responsive behavior and cell styling so the table remains usable on mobile.

## Step-by-step instructions

1. Set `.table-wrap { overflow-x: auto; }` to enable horizontal scroll on small screens.
2. Style `th` and `td` with padding and borders.
3. Add a media query `@media (max-width: 640px)` to reduce cell padding/font-size.
