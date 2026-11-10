---
title: "Div And Span"
slug: div-and-span
order: 1
language: html
summary: Learn when to use div and span to group HTML content for styling and scripting.
seo_title: "Div vs. Span in HTML | Introduction to HTML"
seo_description: Learn the difference between HTML div and span elements, including block and inline behavior, classes, and IDs.
seo_keywords:
  - HTML div
  - HTML span
  - block elements
  - inline elements
  - HTML classes
  - HTML IDs
validationRules: []
hints:
  - "<div> is a block-level container — it takes up the full width and starts on a new line."
  - "<span> is an inline container — it only takes up as much width as its content."
  - "Both are 'generic' containers with no visual meaning on their own; style them with CSS."
  - "Use class attributes to target divs and spans with CSS: <div class=\"card\">"
---

A community seed swap needs two item cards. The supplied `index.html` has an empty body: group each item’s information in a block, then mark one useful word inside its description. These containers give CSS places to work later; they do not draw card borders or highlights on their own.

## The two container jobs

Use `<div>` when a whole block belongs together. It begins on a new line and can hold headings, paragraphs, lists, and other elements. Use `<span>` when only part of a line needs a hook for styling or scripting.

| Type | Element | Behaviour |
|------|---------|-----------|
| Block | `<div>` | Takes full width, starts on a new line, can group headings, paragraphs, and other blocks |
| Inline | `<span>` | Takes only as wide as its content, sits within a line of text |

```html
<div class="card">
    <h2>Workshop notebook</h2>
    <p>Includes <span class="highlight">blank</span> pages for sketches.</p>
</div>
```

These are default display behaviors, not permanent rules: CSS can change how either element is displayed. The `div` keeps the item information together. The `span` stays inside the sentence, so it does not split the paragraph into another block.

## Reusable hooks

A generic container does not name a particular kind of content. A div still has block layout by default, while a span stays inline; neither creates a bordered card or highlight by itself. Add a `class` when several elements need the same treatment; use an `id` only for one unique element.

```html
<div id="swap-list">
    <div class="card">Workshop notebook</div>
    <div class="card">Pencil case</div>
</div>
```

`card` can label every card. `swap-list` identifies one page region. You will practice reusable classes and unique IDs in more detail later in this module.

## Check your page

Run the page. Each card should start on its own line, while the span stays within its paragraph. Without CSS, the marked word will not look different yet. If everything runs together, check that each card is wrapped in its own opening and closing `<div>`.

Edit `index.html`, press **Run** to inspect your page, then **Submit** to check the tasks. You can submit after each step; later tasks may still be incomplete.

In the tasks, `.card` is shorthand for an element with `class="card"`; the dot belongs to CSS selector notation, not the HTML attribute value. The worked example shows stationery. Build your own seed-swap items below.

## Your Tasks

1. Add one `<div class="container">` directly inside `<body>` to hold your cards.
2. Directly inside it, add at least two `<div class="card">` elements.
3. Add a non-empty `<h2>` naming the item in each `.card`.
4. Add a non-empty `<p>` describing the item in each `.card`.
5. In one paragraph, wrap a key word in `<span class="highlight">` for future styling.

You now have a clean structure for a swap-list page: repeatable cards outside, a precise inline hook inside.
