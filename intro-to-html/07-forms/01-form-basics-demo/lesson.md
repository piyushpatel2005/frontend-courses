---
title: "Form Basics Demo: Join the Meridian Relay"
slug: form-basics-demo
order: 1
language: html
summary: See a completed HTML form with connected labels, text and email fields, a password field, and a submit button.
seo_title: "Form Basics Demo: Join the Meridian Relay | Introduction to HTML"
seo_description: See a completed HTML form with connected labels, text and email fields, a password field, and a submit button.
seo_keywords:
  - HTML demo
  - HTML preview
  - form-basics-demo
lesson_type: coding
hints:
  - "This is a completed demo. Run the preview, then read the matching code."
---

# Form Basics Demo: Join the Meridian Relay

## Mission

You can now name and describe a page; next, use HTML to collect answers. The crew has found the Meridian Relay. Its intake form must clearly identify each answer before a new operator can request training.

## What you'll see

A completed relay intake form with labels connected to text, email, and password inputs.

## Read the code

```html
<label for="crew-contact">Crew contact</label>
<input type="text" id="crew-contact" name="crew-contact" required />
```

The label’s `for` value matches the input’s unique `id`, so clicking the label focuses the right field. `id` connects the label; `name` identifies the answer when a form is submitted. For example, `name="crew-contact"` gives that answer the key `crew-contact`.

`<form>` groups the answers. Its `action` is the destination and `method="post"` puts answers in the request body; neither creates a receiving service. A password input masks what you type, but does not encrypt it. Use made-up practice values here. `required` makes the browser ask for a value before submission.

## Try the preview

Run the page and click each label. The matching field receives focus. The button is the form’s clear submit action. The `/relay-intake` address is illustrative; this preview has no server to receive a real request.

## Checkpoint

Notice that each visible label names a different field. As an optional experiment, change the Crew contact label text, Run, and click it again: the connection still works because `for` and `id` have not changed. Restore the text before moving on. Do not submit real details.

## Next

Continue to **Exercise: Build a Night-Shift Check-In**. You will recreate the same idea from a smaller starter file.

## Learn more

MDN’s official documentation explains how a label is associated with its form control and why that connection matters for usability and accessibility. Read [MDN’s reference for the `<label>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label) when you want to go further.
