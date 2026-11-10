---
title: "Size the Maker Profile Sheet"
slug: size-maker-profile-sheet
order: 2
language: css
summary: "Finish a responsive profile sheet with a width cap and fluid heading size."
seo_title: "Maker profile sheet | Intro to CSS"
seo_description: "Practice max-width and clamp() on a finished maker profile sheet."
seo_keywords:
  - CSS
  - typography, spacing, and responsive layout
  - HTML
  - beginner CSS
lesson_type: coding
---

Samira's role, selected work, skills, and availability are already in the HTML. The supplied CSS gives the sheet its paper background, spacing, and section hierarchy. Finish the layout by limiting line length and making the name adapt to the screen; edit only `style.css`.

The preceding profile demo used a different width cap and heading range. Transfer those two techniques rather than copying its values.

## Your Tasks

1. Set `.maker-profile` to `max-width: 42rem` so the sheet remains readable on a wide display.
2. Set the `h1` `font-size` to `clamp(2.2rem, 8vw, 4.5rem)` so the name scales between its lower and upper limits.

Run Preview at about 360px and 1000px wide, then Submit. `8vw` follows that preview viewport; it does not follow `.maker-profile` once the sheet reaches its width cap. The supplied `box-sizing: border-box` keeps the sheet padding inside its capped width.

The work, skills, and availability should stay in a readable column while the name has room to grow. After the checks pass, try replacing the sample content with your own work. Keep the same selectors so the layout rules still apply. If a long name overflows, try overflow-wrap: anywhere rather than shrinking every reader’s text. Check enlarged text as well as narrow viewports.

You have now moved from HTML’s structure to CSS’s presentation: selectors, reusable values, readable spacing, layouts, and responsive behavior. The next course teaches JavaScript as a language before the vanilla-JavaScript DOM course adds programmed behavior. No framework is needed for either step.
