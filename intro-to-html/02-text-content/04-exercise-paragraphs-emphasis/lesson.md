---
title: "Exercise: Write Meridian's Survey Notes"
slug: exercise-paragraphs-emphasis
order: 4
language: html
summary: Practice paragraphs, emphasis, line breaks, and strong text in the Meridian crew’s flight log.
seo_title: "HTML Paragraphs, Emphasis, and Line Breaks | Introduction to HTML"
seo_description: Learn how to use <p>, <em>, <strong>, and <br> to format and structure text content in HTML.
seo_keywords:
  - HTML paragraphs
  - HTML emphasis
  - HTML strong
  - HTML line break
  - text formatting
validationRules: []
hints:
  - "Use <p> for paragraphs. It automatically adds spacing before and after."
  - "<em> adds emphasis (usually italic). <strong> adds strong importance (usually bold)."
  - "<br> is self-closing — use it for a single line break inside a paragraph, not between paragraphs."
  - "<hr> draws a visible divider between sections."
---

# Paragraphs, Emphasis, and Line Breaks

## Mission

the Meridian crew is writing a flight log after the first controlled rooftop landing. Use paragraphs for the report, emphasis for the key move, strong text for the system update, and one deliberate line break for a radio-style sign-off.

## What you'll build

A page with a title, a paragraph that wraps naturally, a key phrase in emphasis, a date in strong importance, and one deliberate line break.

## Paragraphs: `<p>`

The `<p>` element wraps a block of text. Browsers automatically add vertical spacing before and after each paragraph.

```html
<p>We met last Tuesday to discuss the book.</p>
<p>Everyone agreed the ending was unexpected.</p>
```

Use `<p>` for prose. Don't use it just to get spacing — CSS margins handle that.

## Emphasis and strong importance

`<em>` marks text that carries emphasis. Browsers usually render it in italics.

```html
<p>We read <em>The Night Circus</em> this month.</p>
```

`<strong>` marks text with strong importance. Browsers usually render it in bold.

```html
<p><strong>Next meeting: March 15</strong></p>
```

These tags carry meaning. Screen readers and search engines use them; don't use them only for visual styling — CSS does that.

## Line breaks: `<br>`

`<br>` is a self-closing tag that forces a single line break. Use it sparingly — inside addresses, poems, or where a line must break without starting a new paragraph.

```html
<p>123 Main Street<br>Springfield, IL 62701</p>
```

Avoid using `<br>` between paragraphs. Let `<p>` handle that.

## Horizontal rule: `<hr>`

`<hr>` draws a horizontal line between sections of content:

```html
<p>Section one content.</p>
<hr>
<p>Section two content.</p>
```

Like `<br>`, it is self-closing.

## Checkpoint

Run the page. The recap should have one paragraph about the discussion, the book title in emphasis, the meeting date in strong importance, and one controlled line break.

## Your Tasks

The starter `index.html` has an empty body:

1. Add an `<h1>` title for the recap (e.g., "Book Club Recap").
2. Add a `<p>` with at least two sentences about a book or topic you choose.
3. Wrap the book or topic title in `<em>`.
4. Add a second `<p>` containing a date or important detail wrapped in `<strong>`.
5. Add a self-closing `<br>` inside the first paragraph, between two sentences (like `<p>First sentence.<br>Second sentence.</p>`).
6. Add a `<hr>` between the two paragraphs.

## Payoff

Your book-club recap is readable, the important details stand out, and the line break appears exactly where you need it.
