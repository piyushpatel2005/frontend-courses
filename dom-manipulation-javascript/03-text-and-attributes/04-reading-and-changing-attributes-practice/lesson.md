---
title: "Reading And Changing Attributes Practice"
slug: reading-and-changing-attributes-practice
order: 4
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Record a link destination before updating its address and accessible name.
seo_title: 'Exercise: update an accessible link | DOM Manipulation with JavaScript'
seo_description: Record a link destination before updating its address and accessible
  name.
seo_keywords:
- JavaScript DOM
- getAttribute, setAttribute, and removeAttribute
- browser preview
- exercise
---

The reading-club link still points to `#`. Record that original value before you change it, then finish the link's attributes.

Edit `script.js`; the link and status paragraph are already selected. Use `getAttribute` to read, `setAttribute` to write, and `removeAttribute` to remove. Removing `data-draft` is different from setting it to `"false"`, which would leave the attribute present.

Run after the first task to see Previous destination: #. Finish the other changes and Submit. The address is an example for practice, so you do not need to navigate to it. The supplied visible label should remain Reading club schedule.

## Your Tasks

1. Read the original `href` with `getAttribute` and display `Previous destination: #` in `#destination` before changing the address.
2. Set `#club-link`'s `href` to `https://example.org/reading-club`.
3. Set its `aria-label` to `View the reading club schedule`.
4. Remove its obsolete `data-draft` attribute.
