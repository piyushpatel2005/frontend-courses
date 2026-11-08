---
title: "Inline Style And Hidden State"
slug: inline-style-and-hidden-state
order: 5
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Compare inline styles, reusable classes, and hidden visibility on a notice.
seo_title: Inline styles, classes, and hidden | DOM Manipulation with JavaScript
seo_description: Compare inline styles, reusable classes, and hidden visibility on
  a notice.
seo_keywords:
- JavaScript DOM
- element.style, CSS classes, and hidden
- browser preview
- demo
---

A garden-walk notice can gain a border, receive a reusable highlight, or disappear from the page. These are different kinds of change.

`weatherNotice.style.borderColor = "teal"` writes an inline CSS property. JavaScript uses `borderColor` for CSS `border-color`. The demo also sets `borderStyle = "solid"` so there is a visible border. The `style` object reports inline declarations, not every rule applied by the stylesheet.

The Feature notice button adds `highlight`. Its background, spacing, and border rules live together in `style.css`. Use a class when several elements should share a named appearance; use an inline property for a particular value on one element.

The remaining callbacks set `weatherNotice.hidden` to `true` or `false`. In this stylesheet, true removes the notice from layout and the accessibility tree, while false reveals it again. CSS that explicitly overrides `display` could defeat that behavior, so do not add such a rule to hidden content.

Run and try Feature notice, Accent border, Hide notice, then Show notice. The notice keeps its styles while hidden. Compare the class and inline border values: a normal inline declaration takes priority over a normal stylesheet declaration of the same property.

The click connections are supplied examples of the callback pattern introduced earlier. The next exercise supplies them too; your changes belong inside the bodies.
