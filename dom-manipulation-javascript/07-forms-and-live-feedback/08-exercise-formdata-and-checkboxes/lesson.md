---
title: Build a checkbox-based garden request
slug: exercise-formdata-and-checkboxes
order: 8
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Practice reading named checkboxes with FormData and safely rendering a fresh request summary.
seo_title: Checkbox FormData Exercise | Safe JavaScript DOM Output
seo_description: Build a garden request form that reads selected checkbox values through FormData.getAll and displays typed names safely using textContent.
seo_keywords:
  - FormData getAll exercise
  - checkbox JavaScript form
  - textContent security
  - DOM form practice
hints:
  - Give both checkboxes the same name but different values; getAll returns only checked values.
  - Read a new FormData(form) inside the submit handler, not once when the page loads.
---

# Build a checkbox-based garden request

A community garden wants visitors to request watering and/or compost help. The starter has the name field and one checkbox. Complete the form, then use the preceding seed-swap demo to guide the JavaScript.

## Transfer the pattern

Here is a separate worked example for a library survey. The shared `name` groups checked fields, while `textContent` keeps the visitor's text literal:

```html
<form id="library-form">
  <label><input type="checkbox" name="format" value="Audio"> Audio</label>
  <label><input type="checkbox" name="format" value="Print"> Print</label>
</form>
<p id="library-result" role="status"></p>
```

```javascript
const survey = document.querySelector("#library-form");
const result = document.querySelector("#library-result");
const selected = new FormData(survey).getAll("format");
result.textContent = selected.length ? selected.join(", ") : "No formats chosen";
```

For the garden, do the read **inside** `submit` so each request uses the latest checkbox state. Prevent navigation and trim the visitor's name. An unchecked box is absent from FormData, not a value of `false`. Use `textContent`, not HTML insertion, for the output.

## Your Tasks

1. Add a labelled `help` checkbox with value `Compost` beside the existing `Watering` option.
2. Make `#garden-status` a polite live status region.
3. Prevent default navigation when `#garden-form` is submitted.
4. On submit, report the checked help values using `FormData.getAll("help")`; report “no help selected” when none are checked.
5. Include the trimmed guest name as literal text in the report, without parsing markup.
6. For a blank or whitespace-only guest name, show a missing-name error instead of a request.

Try one check, both checks, and neither, resubmitting each time. Type `<em>Jo</em>` as a name: the output should show the angle brackets rather than create an emphasized element.
