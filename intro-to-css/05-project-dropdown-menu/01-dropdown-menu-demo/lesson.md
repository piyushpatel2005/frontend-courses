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

A visitor needs to find the tea and paper stalls without cluttering the navigation. This finished menu starts with its links hidden, then reveals them to a pointer **or** a keyboard user.

In `style.css`, `.menu-item` is `position: relative`, so the absolutely positioned `.submenu` sits below the Stalls button. `display: none` hides the submenu initially. The `:hover` rule reveals it when the pointer is over the menu; `:focus-within` reveals it whenever the button or one of its links has keyboard focus. The links are `display: block`, so they stack without Flexbox or Grid (both come later). The blue `:focus-visible` outline makes the focused control easy to find.

**Checkpoint:** hover over Stalls to see the links; move away, then press Tab until Stalls is focused and use Tab again to reach Tea counter. The submenu stays visible while focus is inside it. This is a small CSS-only example: it does not implement click-to-toggle, Escape-to-close, or touch-menu behavior.

Change `.submenu` background temporarily, run Preview and check the open menu; restore `#f7c948` before the exercise.
