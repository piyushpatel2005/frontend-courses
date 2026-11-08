---
title: "Heading Hierarchy"
slug: heading-hierarchy
order: 1
language: html
summary: See how h1 and h2 create a clear signal-brief hierarchy before extending it in an exercise.
seo_title: "Heading Hierarchy: H1 and H2 | Introduction to HTML"
seo_description: See how h1 and h2 create a clear signal-brief hierarchy before extending it in an exercise.
seo_keywords:
  - HTML demo
  - HTML preview
  - HTML heading hierarchy
lesson_type: coding
---

# Heading hierarchy: a page outline

The Meridian signal brief has one page title and two sections. Run the completed `index.html` and match its `<h1>` and `<h2>` tags to the headings in the preview.

```html
<h1>Meridian's Signal Brief</h1>
<h2>Power online: Beacon sight</h2>
<p>The crew can spot a rescue signal above the city skyline.</p>
<h2>Next mission</h2>
```

Use `<h1>` for this page's main heading and `<h2>` for each major section. HTML has six heading levels, `<h1>` through `<h6>`. Each higher number represents a deeper subsection, not a request for a particular font size.

For example, a field guide might have `<h2>Forest</h2>`, then `<h3>Birds</h3>`, then `<h4>Owls</h4>`. These headings are siblings in the HTML source, but their levels express an outline. Do not put one heading element inside another.

## Compare in the preview

In the editor, change the first `<h2>` to `<h3>` in both its opening and closing tags. Run again, observe the default size change, then restore it. Choose heading levels for their place in the outline; CSS can change their size later.

The next exercise explores all six levels with a new signal. Real pages rarely need all six; use only the depth your content needs.
