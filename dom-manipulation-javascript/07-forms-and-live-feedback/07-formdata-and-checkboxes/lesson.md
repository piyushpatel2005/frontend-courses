---
title: Read multiple checked values with FormData
slug: formdata-and-checkboxes
order: 7
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Read named form controls and checked checkbox values with FormData, then show a safe text summary.
seo_title: FormData and Checkboxes | JavaScript DOM Form Demo
seo_description: Learn how FormData.get and getAll read a form, why unchecked checkboxes are omitted, and how textContent safely shows user input.
seo_keywords:
  - JavaScript FormData
  - checkbox getAll
  - safe form output
  - DOM submit event
---

# Read multiple checked values with FormData

A neighborhood seed swap needs one sign-up name and any number of seed interests. Run the finished preview, change the checks, and submit to see the summary update.

## Follow the form data

The `name` attributes, not the element IDs, become FormData keys. Both checkboxes share `name="interest"` but have different values. `new FormData(form)` reads successful controls at submit time: unchecked checkboxes are **not included**. `data.get("visitor")` returns the name; `data.getAll("interest")` returns an array of checked values (or an empty array). We trim the name and use `join(", ")` only when there is at least one interest.

Open `index.html` and locate each label, shared checkbox name, and live status. In `script.js`, follow the submit handler: `preventDefault()` keeps the page in place; the data read reflects the current checks. `textContent` treats a typed `<tag>` as characters rather than markup. Never put form values into `innerHTML`.

## Try it in the preview

Submit with no interests, then select both and submit again. Try a name like `<garden>`: the brackets remain visible text. Toggle one checkbox and resubmit; FormData has no stale copy of the previous selection. Change one checkbox value in the HTML to see what `getAll` returns, then restore it. The next lesson uses the same pattern for a different sign-up.

## Learn more

MDN's [FormData interface](https://developer.mozilla.org/en-US/docs/Web/API/FormData) documents how named form fields are collected.
