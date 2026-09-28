---
title: Lantern Market navigation exercise
slug: exercise-dropdown-menu
order: 2
language: html
summary: Build a compact navigation sign for the Lantern Market directory.
seo_title: Lantern Market navigation exercise | Intro to CSS
seo_description: Learn dropdown display and hover reveal by building a small, visible CSS interface.
seo_keywords:
  - CSS
  - dropdown display and hover reveal
  - HTML
  - beginner CSS
lesson_type: coding
hints:
  - Keep the stylesheet linked from the document head.
  - Change one declaration at a time, then use Run Preview to inspect the result.
---

# Build a keyboard-friendly dropdown

The demo used one hiding rule and two reveal states. In the supplied navigation, the Stalls button and two working in-page links are already present; only `style.css` needs editing. The menu is positioned and its links are styled for you.

## Your Tasks

1. Set `.submenu` to `display: none` so the links start hidden.
2. On `.menu-item:hover .submenu`, set `display: block` to reveal the links on pointer hover.
3. On `.menu-item:focus-within .submenu`, set `display: block` so focusing the Stalls button or either link keeps the menu open for keyboard navigation.

**Checkpoint:** Preview initially shows just the Stalls button. Hover reveals the links; tab to the button and then into the submenu to check the keyboard path. CSS-only menus have limitations on touch and do not offer Escape-to-close; a full disclosure widget needs JavaScript later.
