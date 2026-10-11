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

Finish the Lantern Market navigation from the demo. The button, in-page links, positioning, and keyboard focus rings are supplied. The links are visible in the starter; your first rule will hide them.

Edit `style.css`. Put the hiding rule before the reveal rules so the open states can override it. The parent `.menu-item` contains both the trigger and links: use its hover state to keep the pointer route connected, and its `:focus-within` state to keep the keyboard route connected.

## Your Tasks

1. Set `.submenu` to `display: none` so the links start hidden.
2. On `.menu-item:hover .submenu`, set `display: block` to reveal the links on pointer hover.
3. On `.menu-item:focus-within .submenu`, set `display: block` so focus on the button or either link keeps the menu open.

Run and Submit after each change. After task 1 the links stay hidden; task 2 adds the pointer route; task 3 adds the keyboard route. Move the pointer away, click blank preview space, and Tab to Stalls, then through both links. The open menu should stay visible until focus leaves it.

This exercise covers CSS visibility states. It does not add click toggling, Escape-to-close, or a complete touch interaction.
