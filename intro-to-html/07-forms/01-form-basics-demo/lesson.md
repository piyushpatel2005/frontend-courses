---
title: "Form Basics Demo: Join the Meridian relay"
slug: form-basics-demo
order: 1
language: html
summary: See a completed HTML form with connected labels, text and email fields, a password field, and a submit button.
seo_title: "Form Basics Demo: Join the Meridian relay | Introduction to HTML"
seo_description: See a completed HTML form with connected labels, text and email fields, a password field, and a submit button.
seo_keywords:
  - HTML demo
  - HTML preview
  - form-basics-demo
lesson_type: coding
hints:
  - "This is a completed demo. Run the preview, then read the matching code."
---

# Form Basics Demo: Join the Meridian relay

## Mission

the crew has found the Meridian relay. The intake form must clearly identify each answer before a new operator can request training.

## What you'll see

A completed relay intake form with labels connected to text, email, and password inputs.

## Read the code

```html
<label for="crew-contact">Crew contact</label>
<input type="text" id="crew-contact" name="crew-contact" required />
```

The label’s `for` value matches the input’s `id`, so clicking the label focuses the right field.

## Try the preview

Run the page and click each label. The matching field receives focus. The button is the form’s clear submit action.

## Checkpoint

Use the preview to connect each visible result to the HTML that created it. This is a completed demonstration, so you do not need to edit the code.

## Next

Continue to **Exercise: Build an Relay Intake Form**. You will recreate the same idea from a smaller starter file.

## Learn more

MDN’s official documentation explains how a label is associated with its form control and why that connection matters for usability and accessibility. Read [MDN’s reference for the `<label>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label) when you want to go further.
