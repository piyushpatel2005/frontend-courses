---
title: "Exercise: Responsive Grid"
slug: exercise-responsive-grid
order: 8
language: html
summary: "A media query can change grid tracks when the available screen width becomes small."
seo_title: "Exercise: Responsive Grid | Introduction to CSS"
seo_description: "Books, Plants, and Food already sit in a three-column grid. Use the preceding demo's media-query pattern to stack them when the preview is narrow. Keep the existing wide-layout rule; your new rule should override only the column definition when needed."
seo_keywords: [CSS, exercise-responsive-grid, layout, CSS exercise]
lesson_type: coding
hints:
  - "Use the demo as a reference, but write the rules yourself."
  - "Run Preview before Submit to inspect the visible result."
---

# Make room for the community stalls

Books, Plants, and Food already sit in a three-column grid. Use the preceding demo's media-query pattern to stack them when the preview is narrow. Keep the existing wide-layout rule; your new rule should override only the column definition when needed.

## Your Tasks

1. At the end of `style.css`, add `@media (max-width: 36rem)` containing a `.responsive-grid` rule with `grid-template-columns: 1fr`.

Run Preview and resize across the threshold. With the usual browser font setting, 576px and below should show one column; above 576px should show three. Remember that the preview frame is the viewport being tested. Submit to check the conditional rule. A one-column declaration outside the query would also stack the cards on wide screens.
