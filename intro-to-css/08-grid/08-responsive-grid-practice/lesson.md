---
title: "Responsive Grid Practice"
slug: responsive-grid-practice
order: 8
language: css
summary: "Write a media query that switches three grid columns to one at a 36rem breakpoint."
seo_title: "Responsive Grid | Introduction to CSS"
seo_description: "See how a 36rem media query stacks community stall cards in one column while preserving three equal columns on wider viewports."
seo_keywords: [CSS, responsive grid, media query, grid columns]
lesson_type: coding
---

# Make room for the community stalls

The preceding example changed three columns to one at 36rem. Books, Plants, and Food need the same adjustment here. The supplied stylesheet already defines a three-column grid, a gap, and wrapping card labels. Edit style.css rather than the HTML.

At the browser’s usual initial 16px font size, 36rem is 576px. A max-width query includes that boundary. The query uses the preview viewport, not the width you assign to the grid itself.

## Your Tasks

1. Inside `@media (max-width: 36rem)`, set `.responsive-grid` to `grid-template-columns: 1fr` so the three stalls stack at and below the breakpoint.

Run at narrow and wide preview sizes. With the usual initial font size, 576px should show one column and 577px should show three. Keep the original three-column rule outside the query. Submit checks the authored conditional rule even when the grading preview is narrow; your wide preview confirms it did not become an unconditional override.
