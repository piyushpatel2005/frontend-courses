---
title: Handle submit without leaving the page
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

# Handle submit without leaving the page

A workshop RSVP should respond in place instead of reloading the preview or silently accepting a blank name.

## Read the running example

The previous preview reacted on every edit. A request is different: it should confirm only when the visitor submits, whether by button or by pressing Enter in the field.

The form’s `submit` event also fires when a user presses Enter. Call `event.preventDefault()` to stop navigation, then inspect `.value.trim()`; show an error in a visible status region and associate it with the field through `aria-describedby`. Focus the invalid field so the person can correct it.

Open `index.html` to locate the labelled control and output. In `script.js`, notice the selectors point to those IDs, then follow the event from the control to the updated page. `style.css` only changes presentation; it does not cause the behavior. This example is finished already so you can run it before writing the next exercise.

## Try it in the preview

Submit empty, then enter a name and submit with Enter. The error changes to a confirmation and the page stays put. Inspect the form listener: it handles both the button and Enter. Remove `preventDefault()` briefly to see why it matters, then restore it.

Nothing in this demo is graded. The following exercise asks you to build the same *idea* for a different situation; come back here if the event or state change feels hard to trace.
