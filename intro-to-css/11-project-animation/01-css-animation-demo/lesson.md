---
title: Kite festival signal demo
slug: css-animation-demo
order: 1
language: html
summary: Add gentle motion to the Kite Festival signal without making it distracting.
seo_title: Kite festival signal demo | Intro to CSS
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

# Kite festival signal demo

**Mission:** Add gentle motion to the Kite Festival signal without making it distracting.

The `.kite` uses the `drift` animation, which moves it between the positions in `@keyframes drift`. `2s` sets each trip’s duration; `infinite alternate` repeats it up and down. The button uses a separate `transition` to smooth its hover movement. The `prefers-reduced-motion` rule stops both effects when visitors request less motion. This CSS-only button does not reserve a pass.

## Try the demo

Change the ending keyframe from `-14px` to `-5px`, run Preview, and compare the kite’s travel. Restore it, then hover the button to see its smaller movement.

**Checkpoint:** the preview already shows the finished kite festival signal demo interface. The next lesson asks you to recreate its key rules from a small starter.
