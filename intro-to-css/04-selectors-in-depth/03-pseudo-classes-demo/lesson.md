---
title: "Pseudo-Classes Night Cart States"
slug: pseudo-classes-demo
order: 3
language: css
lesson_type: coding
runtime: srcdoc
summary: Inspect hover, first-child, and focus pseudo-classes on a moonlit book cart order panel.
seo_title: CSS Pseudo-Classes | Night Cart States
seo_description: See CSS hover, first-child, and focus pseudo-classes style states in a Moonlit Book Cart panel.
seo_keywords:
  - CSS pseudo-classes
  - hover CSS
  - focus CSS
  - first-child CSS
  - CSS demo
hints:
  - Focus appears after clicking or tabbing into the email field.
---

# Pseudo-classes: night cart states

A reader needs to see which control will respond to the keyboard. This reservation panel uses **pseudo-classes**: a colon followed by a condition, such as `:focus`. They select an existing element in a particular state or position; they do not create another element.

`.reserve-button:hover` matches while a pointer rests on the button. `.email:focus` matches while the email field receives keyboard input. `.reading-list li:first-child` matches a list item that is its parent's first element child. That last condition comes from the HTML order, not from moving the pointer.

## Find focus without a mouse

Run the preview, click a blank area inside it, and press Tab until the email field receives focus. The cyan outline shows where you would type. Press Tab again to reach Reserve, then Shift+Tab to go back. Keep the pointer away from the button while checking the keyboard path so hover does not disguise a missing focus style.

The supplied `.reserve-button:focus-visible` rule keeps a visible ring on the button when keyboard navigation needs one. Unlike `:focus`, `:focus-visible` lets the browser decide when to show that ring. Do not remove an outline without providing a visible replacement.

Hover over Reserve to see its amber background darken. In `style.css`, temporarily change the hover background to `#b45309`, run, and compare the two states. Restore `#d97706`. The first recommendation stays bold throughout because its position has not changed.
