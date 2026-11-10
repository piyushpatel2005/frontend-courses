---
title: "Show a Museum Caption Safely"
slug: show-a-museum-caption-safely
order: 2
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Show a museum caption with its angle brackets intact.
seo_title: "Show a Museum Caption Safely | JavaScript DOM"
seo_description: Show a museum caption with its angle brackets intact.
seo_keywords:
- JavaScript DOM
- textContent and innerHTML
- browser preview
- JavaScript DOM
---

A museum visitor's caption contains `<clouds>`. Those characters are part of the caption, not instructions to create an element.

The starter selects `#caption` and supplies `visitorCaption`. Finish `script.js` by assigning that string to the paragraph's `textContent`, as the board-note demo did. The HTML and CSS are ready.

Run and look for the complete caption, brackets included. Submit checks the text and makes sure the paragraph contains no child elements.

## Your Tasks

1. Display `visitorCaption` in `#caption` using `textContent`, showing `A sketch of <clouds>` literally without creating a `<clouds>` element.
