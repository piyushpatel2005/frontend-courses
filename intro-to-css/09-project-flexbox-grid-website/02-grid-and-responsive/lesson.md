---
title: Grid and Responsive
slug: grid-and-responsive
order: 2
language: html
validationRules: []
hints:
  - "Use display: grid with repeat() for equal columns."
  - "Use a media query to collapse columns on small screens."
---

# Grid and Responsive

Add CSS Grid layout to the features section and make it responsive.

## Step-by-step instructions

1. Set `.features` to `display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;`.
2. Add a media query at `max-width: 900px` to reduce features grid to 1 column.
3. Add card padding and border radius for visual clarity.
