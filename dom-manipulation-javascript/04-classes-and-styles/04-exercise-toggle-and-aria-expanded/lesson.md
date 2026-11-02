---
title: toggle the help panel
slug: exercise-toggle-and-aria-expanded
order: 4
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Open and close a help panel using three separate state updates.
seo_title: 'Exercise: toggle the help panel | DOM Manipulation with JavaScript'
seo_description: Open and close a help panel using three separate state updates.
seo_keywords:
- JavaScript DOM
- classList.toggle and aria-expanded
- browser preview
- exercise
---

Make the help button open and close its panel. The markup already starts closed: the panel has `hidden`, lacks `is-open`, and the button has `aria-expanded="false"`.

Edit only the body of the supplied click callback in `script.js`. First toggle the class and save the returned boolean in a variable such as `isOpen`. Then use that same boolean to set the panel's `hidden` property and the button's `aria-expanded` attribute. `!isOpen` reverses the boolean; `String(isOpen)` converts it to attribute text.

After the class-only task, the panel is still hidden. That is expected: a class change alone does not remove `hidden`. Submit can check that first change independently. After the visibility task, Run and click twice to see the panel open and close. Finish the accessible state before treating the control as complete.

## Your Tasks

1. In the supplied callback, toggle `is-open` on `#help-panel` on every click.
2. Set the panel's `hidden` property to `false` when `is-open` is present and `true` when it is absent.
3. Set the button's `aria-expanded` to `"true"` when open and `"false"` when closed.
