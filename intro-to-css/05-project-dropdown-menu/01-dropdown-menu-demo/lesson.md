---
title: Lantern Market navigation demo
slug: dropdown-menu-demo
order: 1
language: html
summary: Build a compact navigation sign for the Lantern Market directory.
seo_title: Lantern Market navigation demo | Intro to CSS
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

# Lantern Market dropdown demo

The market directory has two stall links. This finished CSS example hides them until a visitor points at Stalls or moves keyboard focus into the menu.

## Keep the links reachable

`.menu-item:hover .submenu` matches the submenu while the pointer is over its parent, including the open submenu itself. Targeting only the button's hover state would make it hard to move down to a link.

`:focus-within` is broader than `:focus`: it matches an element when that element **or any descendant** has focus. `.menu-item:focus-within .submenu` therefore keeps the links visible as you Tab from Stalls into the submenu. A comma between these two selectors lets them share `display: block`.

![Either pointer hover or focus inside the menu keeps it open; it closes when both conditions are absent.](menu-interaction-states.svg)

The starter layout uses `position: relative` on the parent and `position: absolute` on the submenu. `top: 100%` places the submenu below the parent's height; there is no gap for the pointer to cross. The links use `display: block` to stack. The supplied `:focus-visible` outline marks the control reached by keyboard.

## Try both routes

Run, hover over Stalls, and move down onto Coffee counter. The menu should stay open. Move to blank space to close it. Click a blank part of the preview, then press Tab to reach the brand link and Stalls. Tab through both stall links; Shift+Tab moves back. The menu closes after focus leaves it, provided the pointer is also outside.

Change `.submenu` background in `style.css`, run, and inspect the open menu. Restore `#f7c948` before continuing. This is practice with CSS states, not a complete production navigation widget: click-to-toggle, Escape-to-close, and reliable touch interaction need a fuller disclosure design. Do not treat this example as an accessibility-compliance claim.
