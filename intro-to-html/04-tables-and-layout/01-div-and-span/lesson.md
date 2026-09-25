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

The community seed swap needs a simple display table with two item cards. You'll group each item's information in a block container, then highlight one useful word inside a description.

## What you'll build

A page with two side-by-side cards. Each card is a block container holding a title and description. Inside one description, an inline hook highlights a key word.

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

`card` can label every card. `swap-list` identifies one page region.

## Checkpoint

Run the page. Each card should start on its own line, while the highlighted word remains in the middle of its paragraph. If everything runs together, check that each card is wrapped in its own opening and closing `<div>`.

## Your Tasks

1. Create a `<div class="container">` that wraps all of the page content.
2. Inside, add at least two `<div class="card">` elements.
3. In each `.card`, add an `<h2>` and a `<p>`.
4. In one paragraph, use a `<span>` to highlight a word (e.g., `class="highlight"`).

## Payoff

You now have a clean structure for a swap-list page: repeatable cards outside, a precise inline hook inside.