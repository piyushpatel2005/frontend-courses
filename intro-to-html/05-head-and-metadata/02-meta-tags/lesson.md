---
title: Meta Tags
slug: meta-tags
order: 2
language: html
lesson_type: informational
validationRules: []
hints: []
---

# Meta Tags

Meta tags live inside `<head>` and provide **metadata** — data about the page — to browsers, search engines, and social media platforms. Users never see meta tags directly on the page.

## The `<meta>` element

All meta tags are self-closing and use attributes to carry their information:

```html
<meta name="..." content="..." />
```

## Common meta tags

### Character encoding

```html
<meta charset="UTF-8" />
```

Always the very first tag in `<head>`. Tells the browser to use UTF-8 encoding (supports all languages and emoji).

### Viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

Makes the page responsive. Without it, mobile browsers render a zoomed-out desktop view.

### Description

```html
<meta name="description" content="Learn HTML from scratch with interactive coding exercises." />
```

Shown as the snippet under your page title in Google search results. Aim for 150–160 characters.

### Keywords *(mostly ignored today)*

```html
<meta name="keywords" content="HTML, web development, tutorial" />
```

Once used by search engines, but largely ignored now due to spam abuse. Still occasionally seen in older codebases.

### Author

```html
<meta name="author" content="Jane Smith" />
```

Identifies who wrote the page.

## Open Graph (social sharing)

These tags control how your page appears when shared on social media (Facebook, LinkedIn, etc.):

```html
<meta property="og:title" content="Learn HTML" />
<meta property="og:description" content="Interactive HTML lessons for beginners." />
<meta property="og:image" content="https://example.com/thumbnail.png" />
<meta property="og:url" content="https://example.com/learn-html" />
```

## Robots

```html
<!-- Tell search engines to index the page and follow its links (default) -->
<meta name="robots" content="index, follow" />

<!-- Prevent a page from appearing in search results -->
<meta name="robots" content="noindex, nofollow" />
```

## HTTP-Equiv

An older pattern that mimics HTTP headers in HTML:

```html
<!-- Redirect after 5 seconds -->
<meta http-equiv="refresh" content="5; url=https://example.com" />
```

## Summary

| Meta tag | Purpose |
|----------|---------|
| `charset` | Character encoding |
| `viewport` | Mobile scaling |
| `description` | Search snippet |
| `author` | Page author |
| `og:*` | Social media sharing |
| `robots` | Search engine crawl instructions |

A well-configured `<head>` with the right meta tags improves discoverability, accessibility, and the way your pages look when shared.
