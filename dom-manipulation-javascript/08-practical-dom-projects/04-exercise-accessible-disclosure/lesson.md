---
title: Build a guide menu disclosure
slug: exercise-accessible-disclosure
order: 4
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Create an accessible guide menu disclosure controlled by a button.
seo_title: Build a guide menu disclosure | Beginner DOM Manipulation with JavaScript
seo_description: Practice synchronizing aria-expanded and hidden while building a keyboard-operable JavaScript guide menu.
seo_keywords:
- accessible menu exercise
- aria-expanded JavaScript
- disclosure button
---

# Build a guide menu disclosure

Give a community center guide a compact menu. The links should become visible only while its button announces the menu is expanded. In the preceding demo, you saw the complete behavior before having to build it yourself.

## Transfer the pattern

You have already changed classes and visibility and handled click events. This time visibility is only half the state: the button must describe the panel it controls, so someone who cannot see the menu gets the same information.

A real `<button>` already supports keyboard activation. Its `aria-expanded` tells assistive technology whether the controlled content is open. Keep that attribute and the panel’s `hidden` property synchronized in the same click handler; `aria-controls` points to the panel ID. Toggling a visual class alone cannot convey state to screen readers.

A separate FAQ answer uses the same state contract:

```javascript
const question = document.querySelector("#faq-button");
const answer = document.querySelector("#faq-answer");
question.addEventListener("click", () => {
  const open = question.getAttribute("aria-expanded") === "true";
  question.setAttribute("aria-expanded", String(!open));
  answer.hidden = open;
});
```

The exercise uses a menu of links rather than a single answer. Its `aria-controls` must reference the correct panel, and a second activation must close it again.

Run the starter first to see what is present and what still does nothing. Edit `script.js` and, if needed, the markup; use the Preview for a visible check before Submit. The checks exercise actions and state changes, not just the initial markup.

## Your Tasks

1. Keep a real `#menu-toggle` button with `aria-controls="guide-menu"`, initially `aria-expanded="false"`, and a hidden `#guide-menu` navigation landmark.
2. Clicking the button opens the menu and sets `aria-expanded` to `true`.
3. Clicking again hides the menu and restores `aria-expanded="false"`.

Click twice and inspect both the visible panel and the button’s `aria-expanded` value after each click. A mouse-visible menu with a stale aria value is not finished.
