---
title: "Choice Controls"
slug: choice-controls
order: 5
language: html
summary: See checkboxes allow many mission choices while radio buttons allow one training window.
seo_title: "Choice Controls: Select Training Modes | Introduction to HTML"
seo_description: See checkboxes allow many mission choices while radio buttons allow one training window.
seo_keywords:
  - HTML demo
  - HTML preview
  - choice-controls-demo
lesson_type: coding
---

The crew can practise several capabilities but must reserve only one training window. The completed form in `index.html` uses checkboxes for the first decision and radios for the second. Run it and compare what stays selected.

## Read the code

```html
<label><input type="checkbox" name="mission" value="flight" /> Flight</label>
<label><input type="radio" name="window" value="dawn" checked /> Dawn</label>
```

Checkboxes are independent. Radios in the same form with the same `name` form one group. Each choice needs a distinct `value` so the receiving service can tell the answers apart. Wrapping an input in a `<label>` connects the text without `for` and `id`.

A `<fieldset>` groups related controls. Its first child, `<legend>`, names the decision the group asks the visitor to make. `checked` marks the initial selection, not a permanent lock.

## Try the preview

Run the demo. Turn on more than one practice mission, then choose a training window; selecting a new radio choice replaces the old one.

## Check your page

Select Flight and Shield together, then switch from Dawn to Night. Both checkboxes should stay selected; only Night should remain selected in the radio group. You can change the default by moving `checked` to Midday, Run, then restore Dawn.

## Next

Continue to **Plan a Supply Pickup**. You will recreate the same idea from a smaller starter file.
