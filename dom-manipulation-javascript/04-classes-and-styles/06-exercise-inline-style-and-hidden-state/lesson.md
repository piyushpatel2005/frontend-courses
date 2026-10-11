---
title: 'Exercise: style and hide a notice'
slug: exercise-inline-style-and-hidden-state
order: 6
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Change a notice border, highlight it, and hide or restore it.
seo_title: 'Exercise: style and hide a notice | DOM Manipulation with JavaScript'
seo_description: Change a notice border, highlight it, and hide or restore it.
seo_keywords:
- JavaScript DOM
- element.style, CSS classes, and hidden
- browser preview
- exercise
---

Style the plant-swap notice and let visitors dismiss or restore it. The four button callbacks are supplied in `script.js`; fill in one at a time.

Set the border color through `communityNotice.style.borderColor`. The stylesheet already provides a solid border, so you only need to change its color. Add `highlight` for the reusable emphasis rather than copying its CSS into JavaScript. Use the boolean `hidden` property for Dismiss and Restore.

Run to try each button after completing its task. Dismiss should remove the notice's layout space, not just fade it. Restore should bring back the same notice with its styles intact. Submit checks each action independently, so Restore does not depend on your Dismiss code being complete.

## Your Tasks

1. In the Set border callback, set the notice's inline `style.borderColor` to `teal`.
2. In the Emphasize callback, add `highlight` to `#community-notice` without removing `note`.
3. In the Dismiss callback, set the notice's `hidden` property to `true`.
4. In the Restore callback, set the notice's `hidden` property to `false`.
