---
title: Project 2 - Contact Us Form Structure
slug: contact-form-structure
order: 1
language: html
summary: Build the core fields and structure for an accessible contact form.
seo_title: Build an HTML Contact Form
seo_description: Create an HTML contact form with labeled required fields, a topic menu, and a submit button.
seo_keywords:
  - HTML contact form
  - HTML forms
  - required fields
  - form labels
validationRules: []
hints:
  - "Each input should have a matching label using for/id."
  - "Use method=\"post\" for contact form submission."
---

# Project 2: Create a Contact Us Form (Structure)

## Mission

You have practiced labels, input types, and choice controls at the Meridian Relay. Now apply those patterns to the Riverlight Community Hall contact page for room bookings, volunteer questions, and accessibility requests.

## What you'll build

A labeled contact form with required Name and Email fields, a Message box, a Topic menu, and a submit button — all inside one form. The action URL in the reference answer is illustrative; the preview does not deliver messages to the hall.

The starter already includes the Contact Us heading; build the form below it.

## One idea: labels make a form usable before it is styled

A label tells people and assistive technology what a control means. Connect it with matching `for` and `id` values; repeat that pattern for inputs, textareas, and selects.

```html
<label for="topic">Topic</label>
<select id="topic" name="topic">
    <option value="booking">Room booking</option>
    <option value="volunteer">Volunteering</option>
    <option value="access">Accessibility</option>
</select>
```

The browser can require an answer with `required`. Put the controls inside one `<form method="post">` so they travel together when someone submits.

## Checkpoint

Run the page. You should see a complete first-draft contact form. Try submitting it without Name or Email; the browser should point to a required field. If clicking a label does not focus its control, compare its `for` and `id` values.

## Your Tasks

1. Add a `<form method="post">` below the heading.
2. Add a text input for Name inside the form.
3. Add an email input for Email inside the form.
4. Add a `<textarea>` for Message inside the form.
5. Mark the Name input `required`.
6. Mark the Email input `required`.
7. Add a Topic `<select>` with at least three relevant choices (room booking, volunteering, and accessibility).
8. Add a submit button inside the form.
9. Give each of the four fields a visible `<label>` connected by matching `for` and `id`.

## Payoff

The hall now has a solid contact-form structure that can collect a useful first message.
