---
title: "Contact Form Structure"
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

You have practiced the controls separately. Apply them to the Riverlight Community Hall contact page for room bookings, volunteering, and accessibility requests.

The starter in `index.html` supplies the Contact Us heading. Add a labeled form below it. The example `/contact` path has no receiving service here; this preview does not deliver messages to the hall.

## One idea: labels make a form usable before it is styled

A label tells people and assistive technology what a control means. Connect it with matching `for` and `id` values; repeat that pattern for inputs, textareas, and selects. Placeholder text is only a hint inside a field: it can disappear as someone types and does not replace a label.

```html
<label for="workshop">Workshop</label>
<select id="workshop" name="workshop">
    <option value="clay">Clay modeling</option>
    <option value="print">Printmaking</option>
</select>
```

The browser can require an answer with `required`. Put the controls inside one `<form method="post">`. Each field also needs a non-empty `name`, which becomes its key in the submitted data. An `id` alone does not send an answer. POST puts data in the request body; a real site still needs HTTPS and a receiving service that validates the answers.

## Check your page

Edit `index.html`, Run to inspect each new field, then Submit to check your tasks. With Name empty, clicking Send Message should trigger the browser’s required-field prompt rather than send a request. Do not submit a completed form: `/contact` is only an example destination. If clicking a label does not focus its control, compare its `for` and `id` values.

## Your Tasks

1. Add a `<form method="post">` below the heading.
2. Add a text input with `name="name"` inside the form.
3. Add an email input with `name="email"` inside the form.
4. Add a Message `<textarea name="message">` inside the form.
5. Mark the Name input `required`.
6. Mark the Email input `required`.
7. Add a Topic `<select name="topic">` with distinct values for room booking, volunteering, and accessibility.
8. Add a submit button with visible action text inside the form.
9. Connect a visible Name label to the text input with matching `for` and a unique `id`.
10. Connect a visible Email label to the email input in the same way.
11. Connect a visible Message label to the textarea in the same way.
12. Connect a visible Topic label to the select in the same way.

The next lesson starts with this completed reference form. If you changed the wording, carry your version forward and keep its fields as you add reply preferences.
