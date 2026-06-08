---
title: Iframes
slug: iframes
order: 3
language: html
validationRules: []
hints:
  - "The src attribute is the URL of the page to embed."
  - "Use width and height to set dimensions, or control size with CSS."
  - "The sandbox attribute restricts what the embedded page can do — a good security practice."
  - "Not all websites allow embedding — if a page has X-Frame-Options: DENY you cannot iframe it."
---

# Iframes

The `<iframe>` (inline frame) element embeds another HTML page inside the current page. This is how YouTube embeds, Google Maps embeds, and many third-party widgets work.

## Basic syntax

```html
<iframe
    src="https://www.example.com"
    width="800"
    height="450"
    title="Example website"
></iframe>
```

Always include a `title` for accessibility — screen readers announce it to describe the iframe's content.

## Common attributes

| Attribute | Description |
|-----------|-------------|
| `src` | URL of the page to embed |
| `width` | Width in pixels (or use CSS) |
| `height` | Height in pixels (or use CSS) |
| `title` | Accessible description of the content |
| `sandbox` | Applies security restrictions (see below) |
| `allowfullscreen` | Allows the iframe to go full screen (needed for video embeds) |
| `loading` | `lazy` defers loading until scrolled near |
| `frameborder` | Deprecated — use CSS `border: none` instead |

## Embedding a YouTube video

YouTube (and most video platforms) provide embed codes that use iframes:

```html
<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
></iframe>
```

## The `sandbox` attribute

`sandbox` is a security feature that restricts what the embedded page can do:

```html
<!-- Most restrictive — blocks scripts, forms, popups, and more -->
<iframe src="..." sandbox></iframe>

<!-- Allow only form submission -->
<iframe src="..." sandbox="allow-forms"></iframe>

<!-- Allow scripts and same-origin access -->
<iframe src="..." sandbox="allow-scripts allow-same-origin"></iframe>
```

Common sandbox tokens:

| Token | Allows |
|-------|--------|
| `allow-scripts` | JavaScript execution |
| `allow-forms` | Form submission |
| `allow-same-origin` | Treats iframe as same origin |
| `allow-popups` | Opening new windows |
| `allow-top-navigation` | Navigating the top-level window |

## Limitations

- Sites can block embedding using the `X-Frame-Options` or `Content-Security-Policy` HTTP headers
- Cross-origin iframes cannot access each other's DOM (security restriction)
- Iframes add extra HTTP requests and can slow page load

## Exercise

1. Add an `<iframe>` that embeds a public webpage (for example `https://example.com`).
2. Set the `src` attribute on the iframe.
3. Add a meaningful `title` attribute for accessibility.
4. Set both `width` and `height` on the iframe.
5. Add a `sandbox` attribute that allows scripts.
