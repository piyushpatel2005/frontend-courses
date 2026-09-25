---
title: Details, Figure, and Figcaption
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
---

# Details, Figure, and Figcaption

## Mission

The Riverstone garden page needs a compact “Before You Visit” area. Add questions people can open when needed and a seedling photo whose caption stays connected to the image.

## What you'll build

An FAQ with expandable answers (one open by default) and a captioned figure with an image and figcaption, keeping media and explanation together.

**Target:** an FAQ with one answer already visible and a captioned image beneath it. In the preview, clicking each question should reveal only that question's answer.

## Let optional information stay optional

`<details>` creates a disclosure widget with no JavaScript. Its `<summary>` is the visible control; the rest of the content appears when a visitor opens it.

```html
<details>
    <summary>Can I bring a reusable bag?</summary>
    <p>Yes. Bring one for your harvest share.</p>
</details>
```

The content starts collapsed. Add the boolean `open` attribute when one answer should be visible on page load.

```html
<details open>
    <summary>Where is the garden gate?</summary>
    <p>Enter beside the blue tool shed on Willow Lane.</p>
</details>
```

Use this pattern for FAQs, optional instructions, or spoiler-free extra detail. Put `<summary>` first so the control is easy to find and use.

## Keep media and its caption together

A `<figure>` groups self-contained media with its explanation. The media can be an image, diagram, chart, or code sample. `<figcaption>` names or describes it.

```html
<figure>
    <img src="seedlings.jpg" alt="Tomato seedlings in trays beside a sunny window">
    <figcaption>Tomato seedlings ready for the Saturday planting table.</figcaption>
</figure>
```

Unlike a plain `<div>`, this structure tells browsers and assistive technology that the image and caption belong together. The caption may be the first or last child of the figure.

## Checkpoint

Preview the page. One FAQ answer should be visible immediately; the other answers should appear only after their summaries are clicked. The seedling caption should read as part of the same unit as the image. If a question will not toggle, make sure its `<summary>` is inside its `<details>`.

## Your Tasks

1. Add at least two `<details>` elements for the garden FAQ.
2. Put a `<summary>` inside each `<details>` element.
3. Add the `open` attribute to one `<details>` element so its answer starts expanded.
4. Add a `<figure>` containing an `<img>` for the garden page.
5. Add a `<figcaption>` inside that figure to describe the image.

## Payoff

The visit information now stays tidy while the photo carries its own explanation—useful context without extra scripting or detached captions.
