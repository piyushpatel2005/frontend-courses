---
title: Classes and IDs
slug: classes-and-id
order: 3
language: html
summary: Use HTML classes and IDs to target elements with CSS, JavaScript, and anchor links.
seo_title: "HTML Classes and IDs | Introduction to HTML"
seo_description: Learn how HTML class and id attributes work, how to select them in CSS, and how IDs create page anchors.
seo_keywords:
  - HTML classes
  - HTML IDs
  - CSS selectors
  - anchor links
  - HTML attributes
validationRules: []
hints:
  - "Apply multiple classes with a space: class=\"card featured large\""
  - "An id must be unique on the page — only one element can have any given id value."
  - "Use class for styling multiple elements; use id for anchoring or uniquely identifying one element."
  - "IDs double as anchor targets: <h2 id=\"contact\"> can be linked with <a href=\"#contact\">"
---

# Classes and IDs

## Mission

The makers' fair program page needs three quick-jump stops — about, projects, and contact — and a row of project cards. Give each stop a unique landing point while keeping the cards easy to style as a group.

## What you'll build

A one-page portfolio skeleton with navigation links that jump to matching sections, and project cards that share a reusable class. One card gets a second class for special styling.

## One name or a reusable label

Use `class` for a label that can appear on many elements. One element can carry several class names, separated by spaces.

```html
<div class="card">Solar oven</div>
<div class="card">Seed library</div>
<div class="card featured">Repair map</div>
```

In CSS, a dot selects a class:

```css
.card {
    border: 1px solid #ccc;
    padding: 1rem;
}

.featured {
    background-color: gold;
}
```

Use `id` for one unique element on the page. An ID becomes an anchor target when a link uses `#` followed by that value.

```html
<nav>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
</nav>

<section id="about"><h2>About</h2></section>
<section id="projects"><h2>Projects</h2></section>
<section id="contact"><h2>Contact</h2></section>
```

CSS uses `#` before an ID: `#contact { ... }`.

## Checkpoint

Run the page and select each navigation link. It should land on the section with the same ID. If a link does not move, compare its `href="#..."` value with the section's `id`; they must match exactly.

## Class vs. ID

| | `class` | `id` |
|-|---------|------|
| Uniqueness | Reusable | Must be unique |
| CSS selector | `.classname` | `#idname` |
| Multiple per element | Yes | Only one id per element |
| Use for | Styling groups | Unique landmarks, anchors |

## Your Tasks

Build a one-page portfolio skeleton:

1. Add a `<nav>` with three anchor links: `#about`, `#projects`, `#contact`.
2. Add three `<section>` elements, each with the matching `id`.
3. Each section should have at least one `<div class="card">` inside it.
4. One card should have two classes (e.g., `class="card highlight"`).

## Payoff

Your fair page can now link directly to each stop and style every project card with one reusable label.
