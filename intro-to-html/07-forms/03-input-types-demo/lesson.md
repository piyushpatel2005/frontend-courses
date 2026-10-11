---
title: "Input Types Demo: Build a Mission Profile"
slug: input-types-demo
order: 3
language: html
summary: See how different input types give the crew’s mission profile the right browser controls.
seo_title: "Input Types Demo: Build a Mission Profile | Introduction to HTML"
seo_description: See how different input types give the crew’s mission profile the right browser controls.
seo_keywords:
  - HTML demo
  - HTML preview
  - input-types-demo
lesson_type: coding
hints:
  - "This is a completed demo. Run the preview, then read the matching code."
---

# Input Types Demo: Build a Mission Profile

## Mission

The crew has gained a training slot. The relay collects a call sign, contact method, mission level, activation date, and beacon color.

## What you'll see

A completed form that shows text, email, number, date, and color inputs side by side.

## Read the code

```html
<input type="number" min="1" max="100" step="1" />
<input type="date" />
<input type="color" value="#5b7cfa" />
```

The `type` tells the browser what kind of value belongs in the field. Here, `min="1"` and `max="100"` bound the energy level; `step="1"` requests whole-number increments. These constraints do not make an empty field invalid unless it is also `required`. Date and color picker appearance depends on the browser.

## Try the preview

Run the demo. Number fields have number controls, date fields offer a date picker in supporting browsers, and the color field opens a picker.

## Checkpoint

Change the color in the picker and choose a date. For a small code experiment, change the number field’s `max` to `10`, Run, and try `11`; restore `100` afterward. This demo has no saving service. Do not submit personal information.

## Next

Continue to **Exercise: Record Beacon Maintenance**. You will recreate the same idea from a smaller starter file.
