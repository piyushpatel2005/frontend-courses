---
title: Toggle an accessible disclosure
slug: accessible-disclosure
order: 3
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Keep a disclosure button and its panel in sync for sighted and assistive-technology users.
seo_title: Toggle an accessible disclosure | Beginner DOM Manipulation with JavaScript
seo_description: Learn to toggle a disclosure panel using hidden and aria-expanded, with a native button that works by mouse and keyboard.
seo_keywords:
- accessible disclosure JavaScript
- aria-expanded toggle
- hidden panel
---

# Toggle an accessible disclosure

A transit help page keeps long directions tucked away until the visitor asks for them.

## Read the running example

You have already changed classes and visibility and handled click events. This time visibility is only half the state: the button must describe the panel it controls, so someone who cannot see the menu gets the same information.

A real `<button>` already supports keyboard activation. Its `aria-expanded` tells assistive technology whether the controlled content is open. Keep that attribute and the panel’s `hidden` property synchronized in the same click handler; `aria-controls` points to the panel ID. Toggling a visual class alone cannot convey state to screen readers.

Run the preview while the directions are closed. The handler reads the old expanded state before writing the new one: if the panel was open, `directions.hidden = isOpen` hides it. Change the button label, Run again, and confirm that the same control still opens the same panel.

## Try it in the preview

Activate the Directions button with click or keyboard. The panel appears and disappears; inspect how `aria-expanded` changes from “false” to “true” alongside `hidden`. Both describe the same state.

This is a finished example, not a graded task. The next exercise uses different data and leaves the behavior for you to write.

Keep keyboard focus on the button when opening or closing this disclosure. These directions are plain text, so opening them does not add a new Tab stop. The next exercise contains links, which become reachable with Tab while its panel is open.
