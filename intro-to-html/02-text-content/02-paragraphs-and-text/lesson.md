---
title: Paragraphs, Emphasis, and Line Breaks
slug: paragraphs-and-text
order: 2
language: html
validationRules: []
hints:
  - "Wrap text in <p>...</p> to create a paragraph — the browser adds spacing automatically."
  - "Use <em> for emphasis (renders italic) and <strong> for importance (renders bold)."
  - "<br> inserts a single line break without starting a new paragraph. Don't overuse it."
  - "<hr> inserts a horizontal rule — a visual divider between sections."
---

# Paragraphs, Emphasis, and Line Breaks

After headings, paragraphs are the next most important text element. This lesson covers `<p>`, emphasis tags, line breaks, and horizontal rules.

## The `<p>` tag

Browsers collapse all whitespace in HTML. This means line breaks in your source file are ignored:

```html
<body>
    This is a sentence.
    This is another sentence.
</body>
```

Both sentences appear on the **same line** in the browser. To display them as separate paragraphs, wrap each in `<p>` tags:

```html
<body>
    <p>This is a paragraph.</p>
    <p>This is another paragraph.</p>
</body>
```

Now each paragraph gets its own block with spacing above and below.

## Line breaks: `<br>`

Sometimes you need a new line inside a paragraph without creating a new paragraph — for example, in a poem or address:

```html
<p>
    123 Main Street<br>
    Springfield, IL 62701
</p>
```

> `<br>` is a self-closing tag — it has no content and no closing tag.

**Tip:** Avoid using `<br>` to add vertical spacing between sections. That is CSS's job.

## Emphasizing text

| Tag | Default appearance | When to use |
|-----|-------------------|-------------|
| `<em>` | Italic | Stress emphasis — changes the *meaning* of the sentence |
| `<strong>` | Bold | Strong importance, urgency, or warning |
| `<i>` | Italic | Technical terms, foreign words, titles (no semantic emphasis) |
| `<b>` | Bold | Keywords, product names (no extra importance) |

```html
<p>This is <em>emphasized</em> text and this is <strong>important</strong> text.</p>
```

Prefer `<em>` and `<strong>` over `<i>` and `<b>` — they carry semantic meaning for screen readers.

## Horizontal rule: `<hr>`

`<hr>` draws a horizontal line to visually separate sections of content:

```html
<p>Section one content.</p>
<hr>
<p>Section two content.</p>
```

Like `<br>`, it is self-closing.

## Exercise

The starter page has an empty body. Build a short article:

1. Add an `<h1>` title.
2. Add at least **two** `<p>` paragraphs of text.
3. In one paragraph, use `<em>` and `<strong>` to emphasize some words.
4. Use a `<br>` inside one paragraph to create a line break mid-paragraph.
5. Add a `<hr>` between the two paragraphs.
