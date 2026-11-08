---
title: "Classes And ID"
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

The seed-swap cards shared a class. Now a makers’ fair program also needs unique destinations for its About, Projects, and Contact links. The starter in `index.html` supplies the main heading; add the navigation and section content below it.

## One name or a reusable label

Use `class` for a label that can appear on many elements. One element can carry several class names, separated by spaces.

```html
<div class="card">Solar oven</div>
<div class="card">Seed library</div>
<div class="card featured">Repair map</div>
```

In CSS, a dot selects a class. This brief example uses the colors introduced earlier; you will apply selectors in depth in the CSS course:

```css
.card {
    color: darkgreen;
}

.featured {
    background-color: gold;
}
```

Use `id` for one unique element on the page. An ID becomes an anchor target when a link uses `#` followed by that value.

```html
<nav>
    <a href="#hours">Opening hours</a>
    <a href="#supplies">Supplies</a>
    <a href="#location">Location</a>
</nav>

<section id="hours"><h2>Opening hours</h2></section>
<section id="supplies"><h2>Supplies</h2></section>
<section id="location"><h2>Location</h2></section>
```

This example is a workshop information page; the exercise uses different destinations for the fair. CSS uses `#` before an ID: `#location { ... }`. A class or ID is only a label until a stylesheet, link, or script uses it.

## Check your page

Run the page and select each navigation link. It should target the section with the same ID. A short page may not need to scroll, so check the matching values in the source too. If a link does not move, compare its `href="#..."` value with the section's `id`; they must match exactly.

## Class vs. ID

| | `class` | `id` |
|-|---------|------|
| Uniqueness | Reusable | Must be unique |
| CSS selector | `.classname` | `#idname` |
| Multiple per element | Yes | Only one id per element |
| Use for | Styling groups | Unique landmarks, anchors |

Edit `index.html`, press **Run** to inspect your page, then **Submit** to check the tasks. You can submit after each step; later tasks may still be incomplete.

## Your Tasks

Build the fair program in the starter:

1. Add a `<nav>` with readable links to `#about`, `#projects`, and `#contact`.
2. Below the nav, add one `<section>` for each matching `id`. Each ID must occur only once on the page.
3. Give each section a short `<h2>` label.
4. Put at least one non-empty `<div class="card">` inside each section.
5. Give one of those cards a second, distinct class name (for example, `class="card featured"`).

Your fair page can now link directly to each stop and style every project card with one reusable label.
