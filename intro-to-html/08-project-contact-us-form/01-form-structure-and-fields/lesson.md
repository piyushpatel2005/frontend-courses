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

The Riverlight Community Hall needs a contact page for room bookings, volunteer questions, and accessibility requests. In this first step, build the essential fields so every visitor can tell the hall why they are writing.

## What you'll build

A labeled contact form with required Name and Email fields, a Message box, a Topic menu, and a submit button — all inside one form that travels together.

The Riverlight Community Hall needs a contact page for room bookings, volunteer questions, and accessibility requests. In this first step, build the essential fields so every visitor can tell the hall why they are writing.

## Target

Your preview will show a labeled contact form with required Name and Email fields, a Message box, a Topic menu, and a button to send it.

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

1. Add one `<form method="post">`.
2. Include fields for Name (`text`), Email (`email`), and Message (`textarea`).
3. Mark Name and Email as `required`.
4. Add a `<select>` for topic with at least 3 options.
5. Add a submit button.
6. Ensure all form controls have labels.

## Payoff

The hall now has a solid contact-form structure that can collect a useful first message.
