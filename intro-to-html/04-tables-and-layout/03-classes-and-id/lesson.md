---
title: Classes and IDs
slug: classes-and-id
order: 3
language: html
validationRules: []
hints:
  - "Apply multiple classes with a space: class=\"card featured large\""
  - "An id must be unique on the page — only one element can have any given id value."
  - "Use class for styling multiple elements; use id for anchoring or uniquely identifying one element."
  - "IDs double as anchor targets: <h2 id=\"contact\"> can be linked with <a href=\"#contact\">"
---

# Classes and IDs

The `class` and `id` attributes are the bridges between HTML and CSS (and JavaScript). They let you target specific elements without changing the HTML structure.

## The `class` attribute

A class can be applied to **many elements** and one element can have **many classes**:

```html
<div class="card">First card</div>
<div class="card">Second card</div>
<div class="card featured">Featured card (two classes!)</div>
```

In CSS, target a class with `.`:

```css
.card {
    border: 1px solid #ccc;
    padding: 1rem;
}

.featured {
    background-color: gold;
}
```

Classes make it easy to apply consistent styling to groups of related elements.

## The `id` attribute

An `id` must be **unique** — no two elements on the same page should share an id:

```html
<header id="site-header">...</header>
<main id="main-content">...</main>
<footer id="site-footer">...</footer>
```

In CSS, target an id with `#`:

```css
#site-header {
    background-color: #333;
    color: white;
}
```

## IDs as anchor targets

`id` values also serve as scroll anchors — perfect for table-of-contents navigation:

```html
<!-- Navigation -->
<nav>
    <a href="#intro">Introduction</a>
    <a href="#features">Features</a>
    <a href="#contact">Contact</a>
</nav>

<!-- Sections -->
<section id="intro"><h2>Introduction</h2></section>
<section id="features"><h2>Features</h2></section>
<section id="contact"><h2>Contact</h2></section>
```

## Class vs. ID — quick guide

| | `class` | `id` |
|-|---------|------|
| Uniqueness | Reusable | Must be unique |
| CSS selector | `.classname` | `#idname` |
| Multiple per element | Yes | Only one id per element |
| Use for | Styling groups | Unique landmarks, anchors |

## Exercise

Build a one-page portfolio skeleton:

1. Add a `<nav>` with three anchor links: `#about`, `#projects`, `#contact`.
2. Add three `<section>` elements, each with the matching `id`.
3. Each section should have at least one `<div class="card">` inside it.
4. One card should have two classes (e.g., `class="card highlight"`).
