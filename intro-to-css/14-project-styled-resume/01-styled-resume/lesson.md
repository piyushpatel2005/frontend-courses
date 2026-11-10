---
title: "Styled Resume"
slug: styled-resume
order: 1
language: css
summary: "Inspect fluid typography and a width cap on a one-page maker profile."
seo_title: "Community maker profile | Intro to CSS"
seo_description: "See a profile sheet use max-width and clamp() across screen sizes."
seo_keywords:
  - CSS
  - typography, spacing, and responsive layout
  - HTML
  - beginner CSS
lesson_type: coding
---

A one-page profile should be easy to read both on a phone and at a desk. This finished example combines typography and spacing from earlier lessons with the fluid sizing you just practiced.

The HTML supplies a name, role, selected work, skills, and availability. In `style.css`, `.maker-profile` has `max-width: 38rem` to limit line length on wide screens; its width can still shrink on a phone. `box-sizing: border-box` counts its padding inside that available width. The `h1` uses `clamp(2rem, 6vw, 4rem)` to let the name grow with the viewport while staying within legible limits. The role's uppercase treatment and the section's bottom border establish a simple hierarchy.

This is a new profile document rather than the previous table with new styles. Its content stays in a single column at every width; fluid type does not imply a column-layout breakpoint. At a 16px root size, the heading's `2rem` minimum is 32px and `4rem` maximum is 64px. Between those bounds, `6vw` follows the preview viewport's width, not the sheet's capped width.

## Try the demo

Compare a narrow and a wide preview: the profile stays inside the screen, and the heading becomes larger on the wide view. Temporarily change the middle `6vw` to `9vw`, resize again, then restore it.

**Checkpoint:** Find the width limit and the heading size in the stylesheet. In the final exercise, give another maker's profile the same treatment with different values.
