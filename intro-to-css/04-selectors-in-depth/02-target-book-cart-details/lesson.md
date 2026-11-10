---
title: "Target Book Cart Details"
slug: target-book-cart-details
order: 2
language: css
lesson_type: coding
runtime: srcdoc
summary: Use descendant, child, and attribute selectors to style specific parts of a book cart sign.
seo_title: Advanced CSS Selectors | Book Cart Sign
seo_description: Practice descendant, child, and attribute CSS selectors on a Moonlit Book Cart sign.
seo_keywords:
  - advanced CSS selectors exercise
  - descendant selector CSS
  - child selector CSS
  - attribute selector CSS
  - CSS targeting
hints:
  - The paragraph is inside `.summary`, so it is a descendant rather than a direct child.
  - The attribute selector checks the target value, not the visible link text.
---

Use the relationships from the demo to style tonight's mystery recommendation. The starter supplies the sign and its dark background. Leave `index.html` as it is and add rules at the end of `style.css`.

Read the nesting before you type: the paragraph is inside a wrapper, but the heading sits directly inside the card. The sample link already has `target="_blank"`. Its starter style deliberately removes the underline so your third change is visible.

## Your Tasks

1. Use `.book-card p` to set the nested summary paragraph color to `#bfd0e5`.
2. Use `.book-card > h2` to set the direct card heading `font-size` to `26px`.
3. Use `a[target="_blank"]` to set the external link `text-decoration` to `underline`.

Run after each rule. Look for a pale-blue summary, a larger direct heading, then an underlined sample link. Submit to check your completed tasks; you can check the first rule before writing the others.
