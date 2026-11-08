---
title: "FormData And Checkboxes Practice"
slug: formdata-and-checkboxes-practice
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

# Read a garden help request

The garden preview asks for Watering, Compost, or neither. Both labeled checkboxes, the guest field, and a polite status region are supplied. Your work is JavaScript, not rebuilding those controls.

The supplied submit callback creates fresh FormData and a trimmed `guest` string on each submission. It also provides a `report` string and writes that string to `textContent`. Add the missing behavior in `script.js`. FormData uses the shared `help` name, so the result should follow the current controls rather than a hardcoded pair of labels.

## Your Tasks

1. Prevent default navigation for every form submission.
2. Read `data.getAll("help")` and set `report` to its values joined by `", "`, or `no help selected` when it is empty.
3. Prefix that report with the trimmed guest name so the result reads `NAME requested SELECTION.`. Keep the name as literal text.
4. Before building a report, reject a blank guest name: show `Enter your name to request help.` and return from the handler.

Run after each change, then Submit. Try each checkbox, both, and neither, resubmitting after every edit. A checked but disabled checkbox must be omitted. Try `<em>Jo</em>` as a fictional name, then spaces alone; the old report should become an error, not a request with an empty name.

The Show request button only updates this local preview. No help request is sent.
