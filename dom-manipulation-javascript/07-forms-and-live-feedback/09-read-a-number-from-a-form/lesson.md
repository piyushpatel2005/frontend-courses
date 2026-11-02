---
title: Read a number from a form
slug: read-a-number-from-a-form
order: 9
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Convert a native number field deliberately, distinguish blank from zero, and keep browser validation.
seo_title: Number input valueAsNumber and native validation | Vanilla DOM
seo_description: Read a number input with valueAsNumber, reject blank and invalid quantities, and keep native required, min, max, and step validation in a local form.
seo_keywords:
- input valueAsNumber
- JavaScript number input
- native form validation
- blank input NaN
---

The earlier forms read names and checkbox strings. A seat request needs a number instead. Adding a number field does not change the type of its `.value`: that property still returns a string. Two strings added with `+` concatenate, so `"2" + "1"` produces `"21"`, not three seats.

## Read the value deliberately

For a native `<input type="number">`, `.valueAsNumber` reads the current numeric value. A blank field returns `NaN`, which means not a number. That differs from `Number("")`, which is zero and can accidentally turn a missing answer into a deliberate quantity.

A separate equipment form could read a quantity like this:

```javascript
const crates = document.querySelector("#crates");
const quantity = crates.valueAsNumber;
if (!Number.isInteger(quantity) || quantity < 1) {
  // The answer is blank, fractional, or below one.
}
```

`Number.isInteger` is false for `NaN`. Keep validation about the number you actually read, not a fixed default that would hide invalid input. Reading `.textContent` would not read what the visitor typed into an input.

## Keep the native constraints

Open `index.html`. The Seats field has a visible label and these supplied constraints:

- `required` rejects a missing answer.
- `min="1"` and `max="12"` bound the quantity.
- `step="1"` requests whole-seat increments.

This form does **not** use `novalidate`. The browser checks those constraints before a trusted button or Enter submission. An invalid form does not reach its submit listener. `field.checkValidity()` returns a boolean without submitting; `reportValidity()` also asks the browser to show feedback. These checks do not replace validation in a real receiving service.

The supplied input listener calls `showQuantity()` while the value changes, so your own summary can explain a blank field before submission. Its submit listener prevents navigation and calls the same display function for valid submissions. This is a local practice request: no seats are reserved and nothing is sent.

## Your Tasks

1. Complete `readQuantity()` to return the current `#seats` number when it is an integer from 1 through 12, or `null` otherwise. Read `valueAsNumber`; do not treat a blank field as zero or silently replace it with a default.
2. Complete `showQuantity()` using that helper. Show `Choose a whole number from 1 to 12.` for `null`; otherwise show `N seats requested.` with the numeric value replacing `N`, as plain text in `#seat-status`.

Edit `script.js`; leave the native constraints and supplied listeners in place. After the first task, Submit can inspect the return value without depending on a summary. After the second, Run and type 2, clear the field, enter 13, then correct it to 3. The summary should follow every edit. Try the Request button and Enter: invalid values are blocked by the browser, while a valid value reaches the local handler without navigation.

Keep the field's string and numeric views distinct. Use `.value` for text, and choose an explicit numeric conversion when arithmetic is the goal.
