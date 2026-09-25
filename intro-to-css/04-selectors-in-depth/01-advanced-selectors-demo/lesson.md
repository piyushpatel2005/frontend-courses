---
title: "Advanced Selectors Demo: Book Cart Sign"
slug: advanced-selectors-demo
order: 1
language: css
lesson_type: coding
runtime: srcdoc
summary: Inspect descendant, child, and attribute selectors while styling a moonlit book cart sign.
seo_title: Advanced CSS Selectors Demo | Book Cart Sign
seo_description: See descendant, child, and attribute CSS selectors target parts of a Moonlit Book Cart sign.
seo_keywords:
  - advanced CSS selectors
  - descendant selector
  - child selector
  - attribute selector
  - CSS demo
hints:
  - A space selects descendants; `>` selects only direct children.
---

# Advanced selectors: book cart sign

The Moonlit Book Cart posts a tiny reading list outside after sunset. The finished sign needs three precise styles without adding extra classes to every element.

## Read the targets

`.book-card p` reaches the summary paragraph even though it is nested inside a wrapper. `.book-card > h2` reaches only the direct title. `a[target="_blank"]` finds the “Read sample” link by an attribute it already has.

**Checkpoint:** the summary is slate blue, the title is larger, and the external link is underlined.

## Try it safely

Temporarily remove the space in `.book-card p`, preview the page, and observe that the nested summary loses its color. Restore the space before continuing to the exercise.
