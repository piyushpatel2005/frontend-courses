---
title: "Exercise: Target a Book Cart Sign"
slug: exercise-advanced-selectors
order: 2
language: css
lesson_type: coding
runtime: srcdoc
summary: Use descendant, child, and attribute selectors to style specific parts of a book cart sign.
seo_title: Advanced CSS Selectors Exercise | Book Cart Sign
seo_description: Practice descendant, child, and attribute CSS selectors on a Moonlit Book Cart sign.
seo_keywords:
  - advanced CSS selectors exercise
  - descendant selector CSS
  - child selector CSS
  - attribute selector CSS
  - CSS targeting
hints:
  - The paragraph is inside `.summary`, so it is a descendant rather than a direct child.
  - Keep the quotes around `_blank` in the attribute selector.
---

# Target a book cart sign

The advanced-selectors demo styled a nested summary, a direct heading, and an external link. Add those same selective rules without changing the HTML.

**Checkpoint:** only the direct card title grows, the nested summary changes color, and the sample link gains an underline.

## Your Tasks

1. Use `.book-card p` to set the nested summary paragraph color to `#bfd0e5`.
2. Use `.book-card > h2` to set the direct card heading `font-size` to `26px`.
3. Use `a[target="_blank"]` to set the external link `text-decoration` to `underline`.
