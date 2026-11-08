---
title: "Submit And Validation Practice"
slug: submit-and-validation-practice
order: 4
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Validate a library request form and announce a safe confirmation after submit.
seo_title: Validate a library request | Beginner DOM Manipulation with JavaScript
seo_description: 'Build a JavaScript library request form: prevent page navigation, reject blank input,
  and display a safe confirmation.'
seo_keywords:
- JavaScript form validation exercise
- submit preventDefault
- library request form
---

# Validate a library request

The library request preview needs separate feedback for blank and valid book titles. It does not send or reserve anything. The form, label, live status, and description connection are supplied.

Edit the marked parts of `script.js`. The existing submit listener reads a trimmed `title` and returns from the blank branch. That structure lets you add one outcome at a time without wiring more listeners.

Use `setAttribute("aria-invalid", "true")` to expose a field error, `.focus()` to put keyboard focus on that field, and `removeAttribute("aria-invalid")` after correction. Write messages with `textContent`, including titles that look like markup.

## Your Tasks

1. Prevent the form's default action on every submission.
2. In the blank-title branch, set the status to `Enter a book title before requesting a hold.`
3. In that same blank branch, mark `#book` invalid and focus it so the error can be corrected.
4. For a valid title, display `Hold requested for TITLE.` with the trimmed title replacing `TITLE` as literal text.
5. In the valid branch, remove the field's `aria-invalid` attribute.

Run and Submit after each step. Try spaces, then `  River Atlas  `, then `<em>Reed</em>`. A correction should replace the error message and remove the invalid state; it must not create an `em` element.
