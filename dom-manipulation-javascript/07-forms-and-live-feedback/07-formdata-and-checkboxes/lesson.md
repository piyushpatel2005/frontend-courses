---
title: "FormData And Checkboxes"
slug: formdata-and-checkboxes
order: 7
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Read named form controls and checked checkbox values with FormData, then show a safe text summary.
seo_title: Read checkboxes with FormData | JavaScript DOM
seo_description: Learn how FormData.get and getAll read a form, why unchecked checkboxes are omitted, and how textContent safely shows user input.
seo_keywords:
  - JavaScript FormData
  - checkbox getAll
  - safe form output
  - DOM submit event
---

The seed-swap preview collects a made-up name and any checked seed interests. A fresh `new FormData(form)` reads the controls at that moment; it does not submit the form or keep updating by itself.

Its keys come from `name` attributes, not IDs. Only successful controls contribute values: unnamed and disabled controls are omitted, and an unchecked checkbox contributes nothing. A checked checkbox contributes its `value`; without an explicit value its default is `"on"`. These boxes share `name="interest"` but have distinct values.

`data.get("visitor")` returns the first matching value or `null`. `String(value ?? "")` substitutes an empty string for a missing value, then converts it to text. These fields hold strings, not uploaded files. `data.getAll("interest")` returns an array of all matching checked values, or an empty array. `join(", ")` turns that array into a readable list.

The supplied submit listener prevents navigation and reads new FormData each time. Its blank-name branch returns early; otherwise it uses `textContent` to show the name and interests safely. `novalidate` lets the handler display its own error even though the name field is marked `required`.

## Try the preview

Run with a fictional name. Submit with neither interest, each one separately, and both. Disable a checked box in the HTML and rerun: its value should be omitted. Restore the markup, then try `<garden>` as a name; the brackets remain text. Nothing is saved or sent.
