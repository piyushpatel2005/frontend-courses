---
title: "Box Model Demo: Seed Packet Card"
slug: box-model-demo
order: 1
language: css
lesson_type: coding
runtime: srcdoc
summary: Inspect how padding, borders, and margins shape a readable seed packet card.
seo_title: CSS Box Model Demo | Seed Packet Card
seo_description: See padding, borders, and margins change the size and spacing of a CSS seed packet card.
seo_keywords:
  - CSS box model
  - padding
  - border
  - margin
  - CSS layout demo
hints:
  - Padding is inside the border; margin is outside it.
---

# Box model: seed packet card

The Riverside Seed Swap needs a card that feels like a real packet instead of a line of text. This completed page gives the packet breathing room, an edge, and space from its neighbor.

## Read the finished card

In `style.css`, the `.packet` rule has three layers: `padding` keeps the words away from the edge, `border` draws the edge, and `margin` separates the packet from the page. The `box-sizing` rule makes the declared width include padding and border.

**Checkpoint:** the preview shows a cream packet with a green outline and clear space around it.

## Try it safely

Change `.packet` `padding` from `20px` to `36px`, preview the page, and notice that the content moves farther from the border. Restore `20px` when you are done, then continue to the exercise.

## Learn more

MDN’s official guide goes deeper into content, padding, borders, margins, and how sizing is calculated. Read [MDN’s reference for the CSS box model](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Box_model/Introduction_to_the_CSS_box_model) when you want to go further.
