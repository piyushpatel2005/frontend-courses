---
title: "Choice Controls Demo: Select Training Modes"
slug: choice-controls-demo
order: 5
language: html
summary: See checkboxes allow many mission choices while radio buttons allow one training window.
seo_title: "Choice Controls Demo: Select Training Modes | Introduction to HTML"
seo_description: See checkboxes allow many mission choices while radio buttons allow one training window.
seo_keywords:
  - HTML demo
  - HTML preview
  - choice-controls-demo
lesson_type: coding
hints:
  - "This is a completed demo. Run the preview, then read the matching code."
---

# Choice Controls Demo: Select Training Modes

## Mission

the crew can practise several capabilities but must reserve only one training window. The relay form needs both kinds of choice.

## What you'll see

A completed form using fieldsets, legends, three checkboxes, and a one-choice radio group.

## Read the code

```html
<label><input type="checkbox" name="mission" value="flight" /> Flight</label>
<label><input type="radio" name="window" value="dawn" checked /> Dawn</label>
```

Checkboxes are independent. Radios with the same `name` form one group.

## Try the preview

Run the demo. Turn on more than one practice mission, then choose a training window; selecting a new radio choice replaces the old one.

## Checkpoint

Use the preview to connect each visible result to the HTML that created it. This is a completed demonstration, so you do not need to edit the code.

## Next

Continue to **Exercise: Configure Training Choices**. You will recreate the same idea from a smaller starter file.
