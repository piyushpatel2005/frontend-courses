---
title: "Submit And Validation"
slug: submit-and-validation
order: 3
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Handle a form submit without navigation and validate its field before showing feedback.
seo_title: Handle submit without leaving the page | Beginner DOM Manipulation with JavaScript
seo_description: Learn preventDefault on form submit, trim an input value, and show accessible validation feedback without leaving the page.
seo_keywords:
- JavaScript form submit
- preventDefault form
- accessible form validation
---

# Respond to form submission

The workshop RSVP should confirm locally or explain a blank name. This is a preview only: no seat is reserved and no personal information is sent. Use a made-up name.

A form's `submit` event handles both its submit button and implicit submission from Enter in this simple text field. Listen on the form, rather than only on the button. Call `event.preventDefault()` before either outcome to keep the page in place.

The handler reads `.value.trim()`. For a blank value, it marks the field with `aria-invalid="true"`, writes a useful message, and calls `.focus()` to move keyboard focus back to the field. The supplied `aria-describedby` connects that message to the field. For a valid name, `removeAttribute("aria-invalid")` clears the stale error state and `textContent` displays a confirmation.

`novalidate` on the form disables built-in constraint validation so this teaching example can show its own feedback. Client-side checks alone would not secure a real service.

## Try the preview

Run, submit spaces, and check the message and focused field. Correct the name and press Enter; the error should change to a confirmation without navigation. Leave `preventDefault()` in place throughout the exercise.
