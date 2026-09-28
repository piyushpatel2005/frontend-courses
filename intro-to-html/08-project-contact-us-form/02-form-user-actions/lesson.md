---
title: Project 2 - Contact Us Form Actions
slug: contact-form-actions
order: 2
language: html
summary: Add interests, contact preferences, consent, and clear labels to a contact form.
seo_title: Add Choices to an HTML Contact Form
seo_description: Add checkboxes, radio buttons, consent, and labels to an HTML contact form.
seo_keywords:
  - HTML contact form
  - HTML checkboxes
  - radio buttons
  - consent checkbox
validationRules: []
hints:
  - "Use checkboxes for multiple interests and radio buttons for one preferred contact method."
  - "Ensure submit control is inside the form."
---

# Project 2: Contact Us Form (User Actions)

## Mission

The Riverlight Community Hall contact form can now collect a message. Add the choices that help the team route it: interests, one preferred reply method, and clear consent.

## What you'll build

A contact form extended with checkbox interests, an optional phone number, a radio-button group for a single reply method, required consent, and the existing submit button — all properly labeled.

The starter carries forward the completed Name, Email, Topic, Message, and submit controls. Add the choices before the button; do not rebuild the previous form.

## One idea: names define a radio group

Checkboxes allow several independent answers. Add an optional phone field so a visitor who requests a call can supply a number; `type="tel"` offers a phone-friendly keyboard but does not check the number’s format. Radio buttons share one `name` when they represent a single decision.

```html
<fieldset>
    <legend>Preferred reply method</legend>
    <input type="radio" id="reply-email" name="reply-method" value="email" />
    <label for="reply-email">Email</label>
    <input type="radio" id="reply-phone" name="reply-method" value="phone" />
    <label for="reply-phone">Phone</label>
</fieldset>
```

Use a separate checkbox for consent and add `required` when it must be accepted before sending. Every checkbox and radio needs visible label text, just like a text field.

## Checkpoint

Run the form. You should be able to select several interests but only one reply method. Try to submit without consent: the browser should stop the request. If both reply options remain checked, make sure they use the same `name`. This HTML-only preview has no server to deliver messages or check that someone choosing a phone reply also supplied a number.

## Your Tasks

1. Add two interest checkboxes inside the form for room booking and volunteering.
2. Add an optional phone input (`type="tel"`) with a `name` and visible connected label, so a visitor can request a call.
3. Add two radio buttons for one preferred reply method: email or phone.
4. Give both reply-method radios the same non-empty `name` so only one stays selected.
5. Add a separate required consent checkbox inside the form.
6. Give every new checkbox and radio a visible label, either wrapping the control or connected with `for` and `id`.

## Payoff

The contact form now collects the routing details the hall needs while keeping each choice understandable.
