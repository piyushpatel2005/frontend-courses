---
title: "Enable Volunteer Sign-up"
slug: enable-volunteer-signup
order: 8
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Enable a volunteer button from a checkbox and explain the current state.
seo_title: "Enable Volunteer Sign-up | JavaScript DOM"
seo_description: Enable a volunteer button from a checkbox and explain the current
  state.
seo_keywords:
- JavaScript checkbox checked
- button disabled property
- hasAttribute disabled
- boolean attribute
hints:
- Read the checkbox's current .checked value rather than its checked HTML attribute.
- Assign a boolean to button.disabled, then inspect button.hasAttribute("disabled").
---

A kitchen volunteer must confirm that they have read the shift details before signing up. Build the message and button state in `updateShift()`.

The starter supplies the selectors, the function, a `change` listener, and an initial call. Leave those connections in place; put your updates inside the function. As in the tour demo, the browser calls it after the checkbox changes, and the last call sets up the initial page. You are practicing boolean properties here, not writing event wiring.

First add the initial message. Next assign `joinShift.disabled` from the opposite of `agreement.checked`. Keep the unchecked message inside `if (!agreement.checked)`, so it returns after unchecking. After setting the button property, use `if (!joinShift.hasAttribute("disabled"))` to write the ready message only when enabled.

Run after each task. Once the button update is done, check and uncheck the agreement to try both directions. After the final task, the status should follow those changes too. Submit to check each outcome.

## Your Tasks

1. Inside `updateShift()`, show `Read the shift details first.` in `#shift-status` whenever the agreement is unchecked, including on load.
2. Set `joinShift.disabled` from the current `agreement.checked` value so checking enables the button and unchecking disables it.
3. Use `joinShift.hasAttribute("disabled")` to show `Sign-up is ready.` only when the button is enabled. Keep the unchecked message from step 1.
