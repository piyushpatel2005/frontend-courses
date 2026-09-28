---
title: Div and Span
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

# Div and Span

## Mission

The community seed swap needs a simple swap-list page with two item cards. You'll group each item's information in a block container, then highlight one useful word inside a description.

## What you'll build

A page with two stacked cards. Each card groups a title and description; a span marks a key word inside one description for future styling.

## The two container jobs

Use `<div>` when a whole block belongs together. It begins on a new line and can hold headings, paragraphs, lists, and other elements. Use `<span>` when only part of a line needs a hook for styling or scripting.

| Type | Element | Behaviour |
|------|---------|-----------|
| Block | `<div>` | Takes full width, starts on a new line, can contain any content |
| Inline | `<span>` | Takes only as wide as its content, sits within a line of text |

```html
<div class="card">
    <h2>Mint seeds</h2>
    <p>Good for a <span class="highlight">sunny</span> windowsill.</p>
</div>
```

The `div` keeps the item information together. The `span` stays inside the sentence, so it does not split the paragraph into another block.

## Reusable hooks

A generic container has no appearance or meaning on its own. Add a `class` when several elements need the same treatment; use an `id` only for one unique element.

```html
<div id="swap-list">
    <div class="card">Mint seeds</div>
    <div class="card">Terracotta planter</div>
</div>
```

`card` can label every card. `swap-list` identifies one page region. You will practice reusable classes and unique IDs in more detail later in this module.

## Checkpoint

Run the page. Each card should start on its own line, while the span stays within its paragraph. Without CSS, the marked word will not look different yet. If everything runs together, check that each card is wrapped in its own opening and closing `<div>`.

## Your Tasks

1. Create a `<div class="container">` that wraps all of the page content.
2. Inside, add at least two `<div class="card">` elements.
3. Add a non-empty `<h2>` naming the item in each `.card`.
4. Add a non-empty `<p>` describing the item in each `.card`.
5. In one paragraph, wrap a key word in `<span class="highlight">` for future styling.

## Payoff

You now have a clean structure for a swap-list page: repeatable cards outside, a precise inline hook inside.
