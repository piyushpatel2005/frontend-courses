---
title: Div and Span
slug: div-and-span
order: 1
language: html
validationRules: []
hints:
  - "<div> is a block-level container — it takes up the full width and starts on a new line."
  - "<span> is an inline container — it only takes up as much width as its content."
  - "Both are 'generic' containers with no visual meaning on their own; style them with CSS."
  - "Use class attributes to target divs and spans with CSS: <div class=\"card\">"
---

# Div and Span

`<div>` and `<span>` are the workhorses of HTML layout. They are generic containers with no inherent meaning — they exist purely to group content so you can style or script it.

## Block vs. inline

Before diving in, understand the key distinction:

| Type | Element | Behaviour |
|------|---------|-----------|
| Block | `<div>` | Takes full width, starts on a new line, can contain any content |
| Inline | `<span>` | Takes only as wide as its content, sits within a line of text |

```html
<div>This is a block element — it takes a full line.</div>
<div>This is the next block element — it starts below.</div>

<p>This sentence has a <span>highlighted word</span> inside it.</p>
```

## The `<div>` element

`<div>` (division) is used to group larger sections of content for layout purposes:

```html
<div class="card">
    <h2>Article Title</h2>
    <p>Some article text.</p>
</div>
```

Without CSS, a `<div>` is invisible. Add a `class` or `id` to hook it up with styles.

## The `<span>` element

`<span>` targets a small piece of inline content — a word, phrase, or icon — without breaking the flow of text:

```html
<p>The price is <span class="price">$29.99</span> today only.</p>
```

Common use cases:
- Highlighting a word in a different colour
- Wrapping an icon font character
- Applying a tooltip

## When to use class vs id

- `class` — for styling multiple elements the same way (e.g., all `.card` divs)
- `id` — for uniquely identifying one element (e.g., `#main-content`)

```html
<div id="sidebar">
    <div class="widget">Widget 1</div>
    <div class="widget">Widget 2</div>
</div>
```

## Exercise

1. Create a `<div class="container">` that wraps all of the page content.
2. Inside, add at least two `<div class="card">` elements.
3. In each `.card`, add an `<h2>` and a `<p>`.
4. In one paragraph, use a `<span>` to highlight a word (e.g., `class="highlight"`).
