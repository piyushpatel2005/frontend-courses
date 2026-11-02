---
title: Garden festival signal
slug: exercise-css-animation
order: 2
language: css
summary: Add gentle motion to the Garden Festival signal without making it distracting.
seo_title: Garden festival signal | Intro to CSS
seo_description: Learn transitions and keyframe animation by building a small, visible CSS interface.
seo_keywords:
  - CSS
  - transitions and keyframe animation
  - HTML
  - beginner CSS
lesson_type: coding
hints:
  - Keep the stylesheet linked from the document head.
  - Change one declaration at a time, then use Run Preview to inspect the result.
---

# Garden festival signal
Attach the drift animation to a garden banner, then smooth its button interaction. The `.kite` class is reused for the banner symbol; this is a new festival page, not the earlier field-note project.

The starter supplies `@keyframes drift` and separate animation settings for duration, timing, two-iteration count, and direction. These longhand properties are the individual parts of the demo's `animation` shorthand. Only `animation-name` is missing. The button's hover/focus transform, focus outline, and complete reduced-motion override are also supplied.

Edit `style.css`, keeping your declarations in the normal rules above the reduced-motion query. A later override must remain able to stop the motion.

## Your Tasks

1. Add `animation-name: drift` to the normal `.kite` rule.
2. Add `transition: transform 160ms ease` to the normal `button` rule.

Run Preview after each task. First watch the banner; then hover or Tab to the button. Submit to check your declarations. If reduced motion is enabled, the animation should stay off even when your answer is correct. Temporarily compare both preference settings if you can, then restore yours.
