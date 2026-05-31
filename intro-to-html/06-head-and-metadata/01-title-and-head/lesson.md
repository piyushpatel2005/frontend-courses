---
title: The Head Element and Page Title
slug: title-and-head
order: 1
language: html
validationRules: []
hints:
  - "The <head> is not displayed on the page — it holds instructions for the browser."
  - "<title> sets the text in the browser tab and is used by search engines."
  - "<meta charset=\"UTF-8\"> should always be the first tag inside <head>."
  - "You can link external resources (stylesheets, fonts) and add scripts inside <head>."
---

# The Head Element and Page Title

Every HTML document has two main sections: `<head>` and `<body>`. The `<body>` is what users see. The `<head>` is what the *browser* reads to prepare the page.

## What goes in `<head>`?

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Page Title</title>
    <link rel="stylesheet" href="style.css" />
    <script src="app.js" defer></script>
</head>
<body>
    <!-- Visible content here -->
</body>
</html>
```

Common head elements:

| Tag | Purpose |
|-----|---------|
| `<meta charset>` | Character encoding — always UTF-8 |
| `<meta name="viewport">` | Makes the page responsive on mobile |
| `<title>` | Browser tab title, search result title |
| `<link>` | Links to stylesheets, icons, fonts |
| `<script>` | Links to JavaScript files |
| `<meta name="description">` | Summary shown in search results |
| `<meta name="author">` | Document author |

## The `<title>` element

`<title>` sets the text displayed in:
- The browser tab
- Browser history and bookmarks
- Search engine results pages (SERPs)

```html
<title>About Us — Acme Corporation</title>
```

Good titles are concise, descriptive, and unique per page. A common pattern is `Page Name — Site Name`.

## Character encoding

```html
<meta charset="UTF-8" />
```

This tells the browser how to decode the bytes in the HTML file. UTF-8 supports virtually every character in every language. Always place this as the **very first** tag inside `<head>` — before anything else, including `<title>`.

## The viewport meta tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

Without this, mobile browsers zoom out and show a desktop-sized page. This tag tells them to use the actual device width.

## Exercise

1. Set a descriptive `<title>` for the page (not just "My Page").
2. Add a `<meta name="viewport">` tag.
3. Add a `<meta name="description" content="...">` tag with a meaningful description.
4. Add a `<link>` to an external stylesheet (the file doesn't need to exist — just the tag).
