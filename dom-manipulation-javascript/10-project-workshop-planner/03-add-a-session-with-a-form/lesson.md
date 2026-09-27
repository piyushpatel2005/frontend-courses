---
title: Add a validated item through a form
slug: add-a-session-with-a-form
order: 3
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Inspect a safe DOM-creation form with validation and live feedback.
seo_title: Add a validated item through a form | DOM Workshop Planner
seo_description: Inspect a safe DOM-creation form with validation and live feedback. Practice in a runnable JavaScript DOM workshop preview.
seo_keywords:
  - JavaScript DOM workshop planner
  - add a session with a form
  - accessible itinerary
---

# Add a validated item through a form

The itinerary needs new entries. Before editing it, try a smaller tool-checkout page that creates rows from a form.

## Follow the submission

A labelled text field lets a visitor type or use speech input; pressing Enter submits the form just like clicking the button. The `submit` listener calls `preventDefault()` so the page stays put, trims the value, and focuses the empty field when validation fails. `novalidate` lets this example display its own message rather than the browser blocking the event. The status paragraph is tied to the field through `aria-describedby` and has `role="status"` so updates are announced. A nonblank value becomes a new `<li>` through `createElement`, `textContent`, and `append`. The form resets only on success.

Run the preview: submit spaces, then enter `<b>Wrench</b>` and submit with Enter. You should see literal angle brackets, not bold text. Change the success message, Run again, then restore it. The next exercise applies this form pattern to a titled and timed session.
