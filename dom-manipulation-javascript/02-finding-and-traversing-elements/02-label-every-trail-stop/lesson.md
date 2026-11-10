---
title: "Label Every Trail Stop"
slug: label-every-trail-stop
order: 2
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Append a label to every trail stop without changing its name.
seo_title: "Label Every Trail Stop | JavaScript DOM"
seo_description: Append a label to every trail stop without changing its name.
seo_keywords:
- JavaScript DOM
- querySelectorAll
- NodeList forEach
- DOM list
---

Label each stop on the creek trail. The market demo used a NodeList and a callback to update several elements; use the same approach with the `.stop` items in this page.

Edit `script.js`. The HTML and list styling are supplied. Keep each existing name and append the suffix, including its leading space. `stop.textContent += " — marked"` describes the change to one stop; place that change inside the callback so it reaches every match.

Run to check Old mill, Stone crossing, and Lookout, then Submit. A change to only the first stop is not enough.

## Your Tasks

1. Use `querySelectorAll(".stop")` and `forEach` to append ` — marked` to every trail stop.
