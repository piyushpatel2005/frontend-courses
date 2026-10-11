---
title: HTML Entities
slug: html-entities
order: 3
language: html
summary: Learn how HTML entities display reserved characters, symbols, and non-breaking spaces as text.
seo_title: "HTML Entities: Reserved Characters and Symbols"
seo_description: Learn to use HTML entities for reserved characters, symbols, numeric codes, and non-breaking spaces in web pages.
seo_keywords: [HTML entities, HTML special characters, ampersand entity, non-breaking space, numeric entities]
validationRules: []
hints:
  - "Use &lt; for < and &gt; for > when you want to display them as text (not as tags)."
  - "&amp; is the entity for the & character itself."
  - "&nbsp; is a non-breaking space — useful to prevent text from wrapping at a specific point."
  - "Write named entities with the terminating semicolon, such as &copy; or &amp;."
---

# HTML Entities

## Mission

The walking-club route notes need to show a trail rule, a copyright line, and “Maps & Snacks” exactly as written. Some of those characters mean something special to HTML, so use entities to make the browser display the intended text. Your preview should show the symbols, not broken markup.

## What you'll build

A route notes snippet that displays comparison operators, a copyright symbol, an ampersand, and a non-breaking distance label — all as visible text using HTML entities.

The starter supplies the document and heading; add four short route notes below it, each in its own `<p>`. The tests check these paragraphs, not the heading or page scripts.

## Escape characters that HTML reads as markup

An entity starts with `&` and ends with `;`. Use it when you need a reserved character to appear as text.

```html
<p>5 &lt; 10</p>    <!-- displays: 5 < 10 -->
<p>10 &gt; 5</p>    <!-- displays: 10 > 5 -->
<p>Maps &amp; Snacks</p>
```

A `<` before a tag name starts markup, so `&lt;` is the safe way to show it as text. A `>` in ordinary text does not usually need escaping, but `&gt;` makes the pair easy to recognize. `&amp;` displays a literal ampersand.

## Keep small units together

`&nbsp;` is a non-breaking space: it keeps the words on either side on the same line. Use it for a unit such as a distance, not to create page layout spacing.

```html
<p>Meet at the 3&nbsp;km marker.</p>
```

## A compact symbol kit

| Entity | Character | Useful for |
|--------|-----------|------------|
| `&lt;` | `<` | Less-than sign |
| `&gt;` | `>` | Greater-than sign |
| `&amp;` | `&` | Ampersand |
| `&quot;` | `"` | Double quote |
| `&apos;` | `'` | Apostrophe / single quote |
| `&nbsp;` | (space) | Non-breaking space |
| `&copy;` | © | Copyright symbol |
| `&mdash;` | — | Em dash |

You can also use numeric forms such as `&#60;` or `&#x3C;` for `<`, but named entities are often easier to read.

## Checkpoint

Run the page. You should see the comparison signs, copyright symbol, and ampersand as ordinary text. If a line disappears or becomes a tag, inspect each entity for its opening `&` and closing `;`.

## Your Tasks

1. Display the text: `5 < 10 and 10 > 5` using entities.
2. Show a copyright line using `&copy;`, including the words `All rights reserved`.
3. Use `&amp;` to display a literal ampersand, for example `Maps & Snacks`.
4. Use `&nbsp;` to prevent a line break between two words.

## Payoff

Edit `index.html`, Run to read all four notes, then Submit. The checks see the browser’s parsed text, so they cannot distinguish a typed © from `&copy;`. Practise writing the entity even though either produces the same character.
