---
title: Lantern Market navigation
slug: exercise-dropdown-menu
order: 2
language: css
summary: Build a compact navigation sign for the Lantern Market directory.
seo_title: Lantern Market navigation | Intro to CSS
seo_description: Learn native disclosure states by building a small, visible CSS interface.
seo_keywords:
  - CSS
  - native disclosure states
  - HTML
  - beginner CSS
lesson_type: coding
hints:
  - Keep the stylesheet linked from the document head.
  - Change one declaration at a time, then use Run Preview to inspect the result.
---

# Style the directory disclosure

The supplied details and summary already toggle the directory. The links, positioning, and link-focus outlines are setup. Finish its closed/open presentation and the summary’s keyboard focus ring in style.css. Leave the HTML unchanged.

Use the open attribute rather than a hover-only rule: the same native toggle then works with a pointer, touch, Enter, and Space. Put your base hiding rule before the open-state rule.

## Your Tasks

1. Set `.submenu` to `display: none` as the closed-state rule.
2. Set `.menu-item[open] .submenu` to `display: block` to reveal the expanded directory.
3. Set `.menu-trigger:focus-visible` to `outline: 3px solid #2563eb` so the native summary has a visible keyboard focus ring.

Run and Submit after each change. Open Stalls and Tab through Tea counter and Paper goods, then return to Stalls and press Space to close it. The open directory stays open when the pointer leaves; this is a disclosure, not an ARIA application menu. Escape-to-close would need additional behavior later in the vanilla-DOM course.
