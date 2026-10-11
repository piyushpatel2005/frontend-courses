---
title: 'Exercise: change a workshop card accent'
slug: exercise-css-custom-properties
order: 8
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Set a card accent, announce it, and remove the override to restore CSS defaults.
seo_title: Exercise JavaScript CSS Custom Properties | DOM Manipulation Course
seo_description: Set a card accent, announce it, and remove the override to restore
  CSS defaults.
seo_keywords:
- CSS variables JavaScript exercise
- style.setProperty example
- style.removeProperty example
- DOM card theme
hints:
- Call style.setProperty("--accent", value) on the card, not on the button.
- removeProperty removes the inline override so the stylesheet value wins again.
---

Give the ceramics workshop card a plum accent and a Reset accent button. The stylesheet already uses `--accent` for both the border and tag, with a teal default of `#167069`.

The starter supplies the card and status selectors and both click callbacks. Work in `script.js`. Set the custom property on the card, not the button or tag, so its descendants inherit the value. Reset should remove the inline override rather than hardcode teal in JavaScript.

Check each visual change before adding its status message. Run, click Plum accent, and look at both the border and tag. Reset accent should return them to the stylesheet's teal. The status paragraph has `role="status"`, so its text updates can be announced by assistive technology.

## Your Tasks

1. On load, set `#theme-status` to `Teal accent selected.`
2. In the Plum accent callback, set `--accent` inline on `#workshop-card` to `#713e83` so the border and tag become plum.
3. In that callback, set the status to `Plum accent selected.`
4. In the Reset accent callback, remove the inline `--accent` override so the border and tag return to the stylesheet default.
5. In that callback, set the status to `Teal accent restored.`

Run to check both directions, then Submit. Reset is checked with a temporary inline accent, so it can work even before the Plum accent callback is complete.
