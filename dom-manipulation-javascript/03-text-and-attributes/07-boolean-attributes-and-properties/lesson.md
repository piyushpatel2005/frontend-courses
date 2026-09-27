---
title: Boolean attributes and DOM properties
slug: boolean-attributes-and-properties
order: 7
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Use checked and disabled as booleans, and inspect whether a boolean attribute exists.
seo_title: Boolean Attributes and DOM Properties | JavaScript DOM Course
seo_description: Learn how checked and disabled properties reflect HTML boolean attributes, and inspect state with hasAttribute in a live DOM example.
seo_keywords:
  - JavaScript boolean attributes
  - checked property
  - disabled property
  - hasAttribute JavaScript
---

# Boolean attributes and DOM properties

A garden tour booking button should stay unavailable until a visitor agrees to the meeting instructions. The checkbox controls whether the button can be used.

## Presence, not a string value

In HTML, `disabled` and `checked` are **boolean attributes**. Their presence means true, even if the markup says `disabled="false"`; only leaving the attribute out means false. In JavaScript, use the corresponding boolean properties: `button.disabled` and `checkbox.checked`. Assign `true` or `false`, not the strings `"true"` or `"false"`. Changing these properties updates the reflected HTML attributes on these native controls. `element.hasAttribute("disabled")` reports whether the attribute is present; unlike `getAttribute`, it returns a boolean, so it is useful for checking the markup state after a change. The checkbox's `.checked` property reports its **current** state, whereas `getAttribute("checked")` reads the original/default markup attribute and does not reliably track later clicks.

The working `script.js` reads the initial state and updates both the control and a plain-language message:

```javascript
const consent = document.querySelector("#tour-consent");
const reserve = document.querySelector("#reserve-tour");
const status = document.querySelector("#booking-status");
function updateBooking() {
  reserve.disabled = !consent.checked;
  status.textContent = reserve.hasAttribute("disabled")
    ? "Agree to the tour instructions first."
    : "Tour booking is ready.";
}
consent.addEventListener("change", updateBooking);
updateBooking();
```

The initial call matters: without it, the message and control might disagree before anyone interacts. A native disabled button cannot receive a click, so no extra click guard is needed here.

## Try it in the preview

Initially the button is disabled and the instruction appears. Check the box: the button becomes available and the message changes. Uncheck it to restore the disabled state. In `index.html`, try replacing `disabled` with `disabled="false"` and Run: the button is **still** disabled until the checkbox is checked. Restore the original markup afterward. Next, apply this pattern to another kind of sign-up.
