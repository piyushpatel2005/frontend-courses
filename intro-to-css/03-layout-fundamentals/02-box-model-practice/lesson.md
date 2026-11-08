---
title: "Box Model Practice"
slug: box-model-practice
order: 2
language: css
lesson_type: coding
runtime: srcdoc
summary: Use padding, a border, and a margin to turn a plain seed listing into a packet card.
seo_title: CSS Box Model | Space a Seed Packet
seo_description: Practice CSS padding, borders, and margins by spacing a Riverside Seed Swap packet card.
seo_keywords:
  - CSS box model exercise
  - CSS padding
  - CSS border
  - CSS margin
  - card spacing
hints:
  - Put each declaration inside the `.packet` rule.
  - The margin belongs outside the border.
---

# Space a seed packet

The demo showed a sunflower packet. This basil listing already has a cream background and supplied width. Edit `.packet` in `style.css` to add its missing box-model layers.

Padding goes inside the border; margin goes outside it. The supplied `border-box` setting keeps padding and border inside the declared width. Leave the HTML and page layout in place.

## Your Tasks

1. Add `padding: 20px;` to `.packet`.
2. Add `border: 4px solid #3c6e47;` to `.packet`.
3. Add `margin: 24px 0;` to `.packet`.

## Check inside and outside

Run after the padding task and look for space between the text and the cream edge. The border task makes that edge green on every side. The margin task sets outer space above and below, with no horizontal margin. Submit after each change to check the layers separately.
