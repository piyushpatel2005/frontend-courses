---
title: 'Exercise: unlock a volunteer sign-up'
slug: exercise-boolean-attributes-and-properties
order: 8
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Synchronize a sign-up button with a checkbox using checked, disabled, and hasAttribute.
seo_title: Exercise Boolean Attributes and DOM Properties | JavaScript DOM Course
seo_description: Practice JavaScript checked, disabled, and hasAttribute by building a tested checkbox-controlled volunteer sign-up button.
seo_keywords:
  - JavaScript checkbox checked
  - button disabled property
  - hasAttribute disabled
  - boolean attribute exercise
hints:
  - Read the checkbox's current .checked value rather than its checked HTML attribute.
  - Assign a boolean to button.disabled, then inspect button.hasAttribute("disabled").
---

# Exercise: unlock a volunteer sign-up

The tour demo used a consent checkbox to enable booking. Now a community kitchen needs a sign-up button that unlocks only when someone confirms they have read the shift details.

## Transfer the idea

A boolean HTML attribute is true **because it is present**, not because its value spells `"true"`. `disabled="false"` still disables a button. The DOM property `.disabled` is a real boolean and reflects changes to the button's attribute; `.checked` gives a checkbox's current on/off state after interaction. Do not read `getAttribute("checked")` to determine its live state. `hasAttribute("disabled")` checks whether the reflected attribute exists and returns true or false. On each checkbox `change`, recompute the button state from the checkbox rather than guessing whether to toggle it.

Here is the same technique on an unrelated **equipment loan** page, not the volunteer sign-up you will implement:

```javascript
const terms = document.querySelector("#loan-terms");
const borrow = document.querySelector("#borrow-equipment");
function updateLoan() {
  borrow.disabled = !terms.checked;
  console.log(borrow.hasAttribute("disabled"));
}
terms.addEventListener("change", updateLoan);
updateLoan();
```

Notice the last call initializes the page before the first change event. In your starter, the HTML already has a labelled checkbox, a disabled button, and a status line. Edit `script.js`, then use the preview to check, uncheck, and check again. Submit to run the three checks.

## Your Tasks

1. Define and call `updateShift` on load so an unchecked `#shift-agreement` leaves `#join-shift` disabled and `#shift-status` says `Read the shift details first.`
2. Listen for `change` on `#shift-agreement`; when checked, set `#join-shift.disabled` to `false` and show `Sign-up is ready.` in `#shift-status`.
3. When unchecked again, restore the disabled property and `disabled` attribute and the initial message. Use `hasAttribute("disabled")` to choose the status text.
