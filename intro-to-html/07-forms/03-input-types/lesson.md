---
title: "Input Types"
slug: input-types
order: 3
language: html
summary: See how different input types give the crew’s mission profile the right browser controls.
seo_title: "Input Types: Build a Mission Profile | Introduction to HTML"
seo_description: See how different input types give the crew’s mission profile the right browser controls.
seo_keywords:
  - HTML demo
  - HTML preview
  - input-types-demo
lesson_type: coding
---

The crew’s mission profile needs text, a contact email, an energy level, a date, and a beacon color. The completed `index.html` supplies labels and inputs for each. Run it to compare the browser controls, then inspect the `type` attributes that request them.

## Read the code

```html
<input type="number" min="1" max="100" step="1" />
<input type="date" />
<input type="color" value="#5b7cfa" />
```

The `type` tells the browser what kind of value belongs in the field. Here, `min="1"` and `max="100"` bound the energy level; `step="1"` requests whole-number increments. These constraints do not make an empty field invalid unless it is also `required`. Date and color picker appearance depends on the browser.

## Try the preview

Run the demo. Number fields have number controls, date fields offer a date picker in supporting browsers, and the color field opens a picker.

## Check your page

Change the color in the picker and choose a date. For a small code experiment, change the number field’s `max` to `10`, Run, and try `11`; the browser may let you type it but mark it invalid when checking the form. Typing a value and accepting it as valid are different things. Restore `100` afterward. This demo has no saving service. Do not submit personal information.

## Next

Continue to **Record Beacon Maintenance**. You will recreate the same idea from a smaller starter file.
