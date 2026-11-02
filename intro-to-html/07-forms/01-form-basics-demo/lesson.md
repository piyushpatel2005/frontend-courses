---
title: "Form Basics: Join the Meridian Relay"
slug: form-basics-demo
order: 1
language: html
summary: See a completed HTML form with connected labels, text and email fields, a password field, and a submit button.
seo_title: "Form Basics: Join the Meridian Relay | Introduction to HTML"
seo_description: See a completed HTML form with connected labels, text and email fields, a password field, and a submit button.
seo_keywords:
  - HTML demo
  - HTML preview
  - form-basics-demo
lesson_type: coding
---

# Form Basics: Join the Meridian Relay

You can now name and describe a page. Forms let a visitor give answers. The completed `index.html` shows the Meridian Relay intake form; Run it and compare the visible labels with their corresponding inputs.

## Read the code

```html
<label for="crew-contact">Crew contact</label>
<input type="text" id="crew-contact" name="crew-contact" required />
```

The label’s `for` value matches the input’s unique `id`, so clicking the label focuses the right field. `id` connects the label; `name` identifies the answer when a form is submitted. For example, `name="crew-contact"` gives that answer the key `crew-contact`.

`<form>` groups the answers. Its `action` is the destination and `method="post"` puts answers in the request body; neither creates a receiving service. A password input masks what you type, but does not encrypt it. Use made-up practice values here. `required` makes the browser ask for a value before submission. It is a **boolean attribute**: its presence turns the feature on. `required="false"` still requires a value; remove the attribute to make the field optional. Later controls use the same presence rule for `checked` and `selected`.

An input is a void element, so it has no closing `</input>`. A button has opening and closing tags because its action text goes between them. Use `type="submit"` explicitly for the button that sends a form.

## Try the preview

Run the page and click each label. The matching field receives focus. The button is the form’s clear submit action. The `/relay-intake` address is illustrative; this preview has no server to receive a real request.

## Check your page

Notice that each visible label names a different field. As an optional experiment, change the Crew contact label text, Run, and click it again: the connection still works because `for` and `id` have not changed. Restore the text before moving on. Do not submit real details.

## Next

Continue to **Build a Night-Shift Check-In**. You will recreate the same idea from a smaller starter file.

## Learn more

MDN’s official documentation explains how a label is associated with its form control and why that connection matters for usability and accessibility. Read [MDN’s reference for the `<label>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label) when you want to go further.
