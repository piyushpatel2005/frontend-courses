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

A contact form extended with checkbox interests, a radio-button group for a single reply method, a required consent checkbox, and a submit button — all properly labeled.

The Riverlight Community Hall contact form can now collect a message. Add the choices that help the team route it: interests, one preferred reply method, and clear consent.

## Target

Your preview will show selectable interests, a one-choice reply group, a required consent checkbox, and the same submit button inside the form.

## One idea: names define a radio group

Checkboxes allow several independent answers. Radio buttons share one `name` when they represent a single decision.

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

Run the form. You should be able to select several interests but only one reply method. Try to submit without consent: the browser should stop the request. If both reply options remain checked, make sure they use the same `name`.

## Your Tasks

1. Add at least 2 checkboxes for user interests.
2. Add at least 2 radio buttons for preferred contact method.
3. Ensure radio buttons use the same `name` attribute so they behave as one group.
4. Add a consent checkbox (`required`).
5. Keep the submit button inside the form.
6. Ensure each radio/checkbox has a text label.

## Payoff

The contact form now collects the routing details the hall needs while keeping each choice understandable.
