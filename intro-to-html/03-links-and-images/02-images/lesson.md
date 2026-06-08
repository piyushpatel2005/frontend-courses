---
title: Images
slug: images
order: 2
language: html
validationRules: []
hints:
  - "The <img> tag is self-closing: <img src=\"path/to/image.jpg\" alt=\"description\" />"
  - "alt text is not optional — it's read aloud by screen readers and shown when the image fails to load."
  - "Use width and height attributes to reserve space and prevent layout shifts."
  - "For decorative images that add no meaning, use alt=\"\" (empty string) so screen readers skip them."
---

# Images

The `<img>` tag embeds images in a page. It is a **self-closing** (void) element — it has no content and no closing tag.

## Basic syntax

```html
<img src="cat.jpg" alt="A tabby cat sitting on a windowsill" />
```

| Attribute | Required | Description |
|-----------|----------|-------------|
| `src` | Yes | Path or URL to the image file |
| `alt` | Yes | Alternative text description |
| `width` | No | Width in pixels (or CSS units) |
| `height` | No | Height in pixels (or CSS units) |

## The `src` attribute

`src` can be a relative path (image in the same project) or an absolute URL:

```html
<!-- Relative path -->
<img src="images/logo.png" alt="Company logo" />

<!-- Absolute URL -->
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Fronalpstock_big.jpg/240px-Fronalpstock_big.jpg" alt="Mountain landscape" />
```

## Why `alt` text matters

- **Accessibility**: Screen readers read `alt` text aloud for users who cannot see the image.
- **Fallback**: If the image fails to load, the browser displays the alt text.
- **SEO**: Search engines use alt text to understand image content.

```html
<!-- Good: descriptive alt text -->
<img src="sunset.jpg" alt="Orange and pink sunset over the Pacific Ocean" />

<!-- Bad: missing alt text -->
<img src="sunset.jpg" />

<!-- Correct for purely decorative images -->
<img src="divider.png" alt="" />
```

## Controlling size

```html
<img src="photo.jpg" alt="Profile photo" width="200" height="200" />
```

Setting `width` and `height` is a good practice — the browser can reserve the correct space before the image loads, preventing annoying layout jumps.

> **Tip:** For responsive images, omit the pixel attributes and use CSS `width: 100%; height: auto;` instead.

## Linking an image

Wrap `<img>` in an `<a>` tag to make it a clickable link:

```html
<a href="https://www.example.com">
    <img src="banner.jpg" alt="Visit Example.com" />
</a>
```

## Exercise

1. Add at least **two** `<img>` elements using public image URLs.
2. Ensure **every image** has a meaningful `alt` attribute.
3. Add `width` and `height` attributes to at least one `<img>`.
4. Wrap one image in an `<a>` tag so clicking it opens a link.
