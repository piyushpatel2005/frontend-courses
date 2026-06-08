---
title: Details, Figure, and Figcaption
slug: details-and-figure
order: 2
language: html
validationRules: []
hints:
  - "The <details> element is collapsed by default. Add the open attribute to expand it on load."
  - "The first child of <details> should be a <summary> — it becomes the clickable toggle text."
  - "<figure> is for self-contained media (image, diagram, code) referenced from the main text."
  - "<figcaption> provides a caption for a <figure> and can be placed at the top or bottom."
---

# Details, Figure, and Figcaption

## The `<details>` and `<summary>` elements

`<details>` creates a native, no-JavaScript disclosure widget — content is hidden by default and revealed on click:

```html
<details>
    <summary>What is HTML?</summary>
    <p>HTML stands for HyperText Markup Language. It is the standard markup language for creating web pages.</p>
</details>
```

- Clicking the `<summary>` toggles the visibility of everything else inside `<details>`
- Add the `open` attribute to expand it by default:

```html
<details open>
    <summary>Already expanded</summary>
    <p>This content is visible when the page loads.</p>
</details>
```

**Great for:** FAQs, spoilers, progressive disclosure.

## The `<figure>` and `<figcaption>` elements

`<figure>` wraps self-contained media (images, diagrams, code snippets, charts) that is referenced from the main text. `<figcaption>` provides a caption:

```html
<figure>
    <img src="diagram.png" alt="Network topology diagram" />
    <figcaption>Figure 1. A simple star network topology.</figcaption>
</figure>
```

`<figcaption>` can be the first or last child of `<figure>`:

```html
<figure>
    <figcaption>Listing 1. Hello World in Python.</figcaption>
    <pre><code>print("Hello, World!")</code></pre>
</figure>
```

The benefit of `<figure>` over a plain `<div>` is semantic: it tells browsers, search engines, and screen readers that this media is a discrete unit with its own caption.

## Combining both

```html
<details>
    <summary>View the architecture diagram</summary>
    <figure>
        <img src="architecture.png" alt="System architecture overview" />
        <figcaption>High-level overview of the three-tier architecture.</figcaption>
    </figure>
</details>
```

## Exercise

1. Add at least 2 `<details>` elements for an FAQ.
2. Ensure each `<details>` has a `<summary>`.
3. Make one `<details>` expanded by default using `open`.
4. Add a `<figure>` with an `<img>`.
5. Add a `<figcaption>` inside the figure.
