---
title: Add a workshop session
slug: exercise-add-a-session
order: 4
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Validate a labelled workshop form and safely add sessions to the itinerary.
seo_title: Add a workshop session | DOM Workshop Planner
seo_description: Validate a labelled workshop form and safely add sessions to the itinerary. Practice in a runnable JavaScript DOM workshop preview.
seo_keywords:
  - JavaScript DOM workshop planner
  - exercise add a session
  - accessible itinerary
---

# Add a workshop session

The previous demo added tools without parsing typed text. Here the itinerary from the first exercise is already working; extend it with a form. Each lesson opens in its own preview, so changes you made in the earlier editor are not carried over.

A different form might reject an empty shelf label like this:

```javascript
const shelf = document.querySelector("#shelf-name");
if (!shelf.value.trim()) {
  document.querySelector("#shelf-error").textContent = "Name the shelf.";
  shelf.focus();
}
```

Your workshop also needs a time and must add the new object to `sessions`, then call `renderSessions()`. The starter has labelled controls; wire their submission in `script.js` and update the accessibility attributes in `index.html`.

## Your Tasks

1. Link both title and time fields to `#session-status` with `aria-describedby` and give the paragraph `role="status"`.
2. Prevent navigation and reject a whitespace-only title: leave the itinerary unchanged, explain the problem, and focus the title.
3. Reject a missing time in the same way, focusing the time field.
4. Add a valid title, time, and track to `sessions` and render the new row with literal text, never parsed markup.
5. After a successful add, reset the form and announce the addition in `#session-status`.

Try an invalid time, then enter a session with angle brackets in its title. The preview should show those brackets literally.
