---
title: "Details And Figure"
slug: details-and-figure
order: 2
language: html
summary: Build expandable content and properly captioned media with native HTML elements.
seo_title: Details, Figure, and Figcaption | Learn HTML
seo_description: Learn when to use details, summary, figure, and figcaption for FAQs, images, diagrams, and captions.
seo_keywords: [HTML details, HTML summary, HTML figure, figcaption, accessible HTML]
validationRules: []
hints:
  - "The <details> element is collapsed by default. Add the open attribute to expand it on load."
  - "The first child of <details> should be a <summary> — it becomes the clickable toggle text."
  - "<figure> is for self-contained media (image, diagram, code) referenced from the main text."
  - "<figcaption> provides a caption for a <figure> and can be placed at the top or bottom."
lesson_type: coding
---

The garden's visitor page needs two short answers and a captioned seedling illustration. Use native HTML to let visitors open the answers and keep the image's caption attached to it.

## Make an answer expandable

A `<details>` element hides optional content until the visitor opens it. Put a `<summary>` first: it becomes the control that a visitor can click or reach with the keyboard.

Here is a separate repair-cafe example:

```html
<details>
  <summary>Should I bring spare parts?</summary>
  <p>Bring any parts you already have. Volunteers will help identify what is missing.</p>
</details>
```

Add the boolean `open` attribute to show an answer initially. `open="false"` still means open because the attribute is present; remove the attribute to start closed. Separate details elements can stay open at the same time.

## Attach a caption to media

A `<figure>` groups a self-contained image, diagram, or other item with its caption. Place `<figcaption>` directly inside the figure, as its first or last element:

```html
<figure>
  <img src="repair-table.jpg" alt="Volunteer examining the wiring inside a desk lamp">
  <figcaption>A lamp repair at the neighborhood repair cafe.</figcaption>
</figure>
```

The filename above is illustrative. A caption gives visible context; `alt` supplies an image's text alternative. They serve different purposes, so do not omit the alt text just because a caption exists.

## Use the supplied illustration

The starter includes a small seedling image with a working data URL. A data URL contains the image itself, so it needs no external download. Leave its long `src` unchanged. You will move that image into a figure and replace its empty `alt` with a description. This supplied image is not a completed task.

## Your Tasks

1. Add two separate `<details>` elements, each containing a paragraph that answers a question about visiting the garden.
2. Add a nonempty `<summary>` as the first element inside each details element.
3. Add `open` to exactly one details element so only that answer starts expanded.
4. Move the supplied image into a `<figure>` and give it alt text describing the seedlings.
5. Add a nonempty `<figcaption>` directly inside that figure, before or after the image.

Edit `index.html`, Run, then Submit. Open and close each answer with its summary. Try Tab followed by Enter or Space on a summary too. Check that the seedling illustration and its visible caption read as one unit. The automated checks cover markup relationships; this keyboard check is your separate interaction check.
