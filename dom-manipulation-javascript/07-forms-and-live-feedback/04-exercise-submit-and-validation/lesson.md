---
title: Validate a library request
slug: exercise-submit-and-validation
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

A library holds books for readers. Give its request form a blank-field message and a successful confirmation without sending the browser away. In the preceding demo, you saw the complete behavior before having to build it yourself.

## Transfer the pattern

The previous preview reacted on every edit. A request is different: it should confirm only when the visitor submits, whether by button or by pressing Enter in the field.

The form’s `submit` event also fires when a user presses Enter. Call `event.preventDefault()` to stop navigation, then inspect `.value.trim()`; show an error in a visible status region and associate it with the field through `aria-describedby`. Focus the invalid field so the person can correct it.

For a different form, validation can stay in one `submit` handler:

```javascript
const signup = document.querySelector("#newsletter");
const email = document.querySelector("#email");
const notice = document.querySelector("#notice");
signup.addEventListener("submit", (event) => {
  event.preventDefault();
  notice.textContent = email.value.trim() ? "Subscribed!" : "Enter an email.";
});
```

That example is deliberately small: your library request also needs a connected error description, focus on failure, and clearing the invalid state after correction.

Run the starter first to see what is present and what still does nothing. Edit `script.js` and, if needed, the markup; use the Preview for a visible check before Submit. The checks exercise actions and state changes, not just the initial markup.

## Your Tasks

1. Keep the labelled `#book` field, its connected `#request-status` status region, and the `#request` form.
2. On an empty or whitespace-only submission, prevent navigation, mark the field invalid, focus it, and show a useful error.
3. After entering a title and submitting again, clear the invalid state and confirm that title in the status region.

Try submitting spaces, then a real book title. If the page reloads, check `preventDefault()`; if the message stays an error, make sure you remove the invalid state after a successful submit.
