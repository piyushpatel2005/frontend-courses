---
title: HTML Entities
slug: html-entities
order: 3
language: html
validationRules: []
hints:
  - "Use &lt; for < and &gt; for > when you want to display them as text (not as tags)."
  - "&amp; is the entity for the & character itself."
  - "&nbsp; is a non-breaking space — useful to prevent text from wrapping at a specific point."
  - "Entity names are case-sensitive: &copy; works but &COPY; does not."
---

# HTML Entities

Some characters have special meaning in HTML — like `<` and `>` which start and end tags. If you want to *display* these characters as text, you must use **HTML entities**.

## What is an entity?

An HTML entity is a code that the browser converts to the actual character. It always starts with `&` and ends with `;`.

```html
<p>5 &lt; 10</p>    <!-- displays: 5 < 10 -->
<p>10 &gt; 5</p>    <!-- displays: 10 > 5 -->
```

## Common entities

| Entity | Character | Description |
|--------|-----------|-------------|
| `&lt;` | `<` | Less-than sign |
| `&gt;` | `>` | Greater-than sign |
| `&amp;` | `&` | Ampersand |
| `&quot;` | `"` | Double quote |
| `&apos;` | `'` | Apostrophe / single quote |
| `&nbsp;` | (space) | Non-breaking space |
| `&copy;` | © | Copyright symbol |
| `&reg;` | ® | Registered trademark |
| `&trade;` | ™ | Trademark symbol |
| `&euro;` | € | Euro sign |
| `&pound;` | £ | Pound sign |
| `&mdash;` | — | Em dash |
| `&ndash;` | – | En dash |
| `&hellip;` | … | Ellipsis |

## Numeric entities

Every entity can also be written as a numeric code using the Unicode code point:

```html
&lt;   is the same as &#60;  or &#x3C;
&copy; is the same as &#169; or &#xA9;
```

Use whichever form is clearest. Named entities like `&copy;` are usually more readable.

## Non-breaking space (`&nbsp;`)

A regular space allows the browser to break a line there. `&nbsp;` prevents the line break:

```html
<!-- No line break between "100" and "km/h" -->
<p>The car travels at 100&nbsp;km/h.</p>
```

Also useful for adding extra spacing (though CSS is usually better for this).

## Entities in code examples

If you're writing HTML tutorials and want to show `<h1>` literally on the page:

```html
<p>The heading tag looks like this: &lt;h1&gt;Title&lt;/h1&gt;</p>
```

Displays as: The heading tag looks like this: `<h1>Title</h1>`

## Exercise

1. Display the text: `5 < 10 and 10 > 5` using entities.
2. Show a copyright line: `© 2024 Your Name. All rights reserved.`
3. Use `&amp;` to display a literal `&` (e.g., `HTML & CSS`).
4. Use `&nbsp;` to prevent a line break between two words.
