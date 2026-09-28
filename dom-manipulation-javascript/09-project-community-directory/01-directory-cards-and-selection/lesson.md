---
title: Read selectable cards and detail updates
slug: directory-cards-and-selection
order: 1
language: javascript
runtime: srcdoc
lesson_type: coding
summary: 'Explore a tool-lending shelf: select a static card and update its details.'
seo_title: Read selectable cards and detail updates | DOM Manipulation with JavaScript
seo_description: A completed tool-lending shelf uses data attributes, click events,
  and textContent to show the selected tool.
seo_keywords:
- JavaScript DOM manipulation
- DOM card selection demo
- browser DOM project
---


# Read selectable cards and detail updates

A tool-lending shelf lets visitors inspect one tool at a time. This finished example is separate from the community directory you will build next: its tools, field names, and copy are intentionally different.

## Follow the click

Open all three tabs, then run the preview. The static `<li>` elements carry `data-tool` and `data-note`; each has a native button. The listener on `#tools` uses `closest("button")` to identify a click, finds that button’s card, removes the old `selected` class, and uses `textContent` to update the detail area. CSS makes the selected border visible. The event’s target can be a descendant of a button, so the containment check keeps clicks inside this list.

Select the saw, then the drill. The heading in the details and the outlined card should agree. Try changing the drill’s `data-note` and running again. The following exercise transfers the pattern to people and skills, not tools and loan notes.
