---
title: "Accessible Disclosure Practice"
slug: accessible-disclosure-practice
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

Give a community center guide a compact menu. The links should become visible only while its button announces the menu is expanded.

## Transfer the pattern

The transit demo kept two descriptions of one state in agreement. Use the same rule here: an open menu has `hidden = false` on the panel and `aria-expanded="true"` on its button. Both values must reverse when the menu closes.

A separate FAQ answer uses the same state contract:

```javascript
const question = document.querySelector("#faq-button");
const answer = document.querySelector("#faq-answer");
question.addEventListener("click", () => {
  const open =
    question.getAttribute("aria-expanded") === "true";
  question.setAttribute("aria-expanded", String(!open));
  answer.hidden = open;
});
```

The exercise uses a navigation disclosure containing links, not an ARIA application menu. Keep the native links and their ordinary Tab behavior; no arrow-key menu system is needed. The starter separates opening and closing branches so you can implement one transition at a time. The earlier toggle expression is another valid final approach.

This exercise uses a menu of links rather than a single answer. Its `aria-controls` must reference the correct panel, and a second activation must close it again.

Run the starter, then edit `script.js`. Run after each task to inspect the preview; Submit checks your changes in task order.

The supplied `aria-controls="guide-menu"` already connects the button and panel. Leave that relationship in place. Tab to the button and test both Enter and Space after clicking twice.

## Your Tasks

1. Clicking `#menu-toggle` opens the menu and sets `aria-expanded` to `true`.
2. Clicking the expanded button closes the menu and restores `aria-expanded="false"`.

Click twice and inspect both the visible panel and the button’s `aria-expanded` value after each click. A mouse-visible menu with a stale aria value is not finished.
