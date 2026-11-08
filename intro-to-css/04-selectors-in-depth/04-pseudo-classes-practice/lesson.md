---
title: "Pseudo Classes Practice"
slug: pseudo-classes-practice
order: 4
language: css
lesson_type: coding
runtime: srcdoc
summary: Use hover, first-child, and focus pseudo-classes to give a book cart order panel clear feedback.
seo_title: CSS Pseudo-Classes | Night Cart States
seo_description: Practice CSS hover, first-child, and focus pseudo-classes on a Moonlit Book Cart order panel.
seo_keywords:
  - CSS pseudo-classes exercise
  - hover selector CSS
  - focus selector CSS
  - first-child selector CSS
  - interactive states
hints:
  - Add `:hover` directly after the button class.
  - The focus outline needs a width, style, and color.
---

# Style night cart states

Tonight's reservation panel needs three small improvements. The demo showed the selectors; here you will write them for the supplied book list and email field. Edit `style.css`, leaving the HTML and the supplied button focus ring in place.

Hover and focus are different conditions. A pointer can hover over a button while the keyboard focus is somewhere else. The email outline should appear when you click the field or reach it with Tab, not only when you point at it.

## Your Tasks

1. Use `.reserve-button:hover` to set the button background color to `#d97706`.
2. Use `.reading-list li:first-child` to set the first reading-list item `font-weight` to `700`.
3. Use `.email:focus` to set the email field outline to `3px solid #67e8f9`.

Run to inspect each change, then Submit. Only the first book should become bold. To check the last task, click blank space in the preview and press Tab to reach the email field. Move focus to Reserve and check that the email outline disappears.
