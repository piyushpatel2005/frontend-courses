---
title: Images
slug: images
order: 2
language: html
summary: Add images to HTML pages with src, meaningful alt text, dimensions, and image links.
seo_title: "HTML Images and Alt Text | Introduction to HTML"
seo_description: Learn how to add HTML images with src, descriptive alt text, dimensions, and clickable image links.
seo_keywords:
  - HTML images
  - img tag
  - alt text
  - image accessibility
validationRules: []
hints:
  - "The <img> tag is self-closing: <img src=\"path/to/image.jpg\" alt=\"description\" />"
  - "alt text is not optional — it's read aloud by screen readers and shown when the image fails to load."
  - "Use width and height attributes to reserve space and prevent layout shifts."
  - "For decorative images that add no meaning, use alt=\"\" (empty string) so screen readers skip them."
---

# Images

## Mission

Add a small photo strip to a local walking-club page. Each image should still make sense to a visitor who cannot see it, and one should lead somewhere useful when clicked.

## What you'll build

A walking-club photo strip with descriptive alt text, one image reserving space with dimensions, and one clickable image link.

The `<img>` tag puts an image on a page. It is a **self-closing** (void) element, so it has no content or closing tag.

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

`src` can be a relative path to an image in the same project or an absolute URL:

```html
<!-- Relative path -->
<img src="images/logo.png" alt="Company logo" />

<!-- Absolute URL -->
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Fronalpstock_big.jpg/240px-Fronalpstock_big.jpg" alt="Mountain landscape" />
```

## Why `alt` text matters

- **Accessibility**: Screen readers read `alt` text aloud for people who cannot see the image.
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

Setting `width` and `height` lets the browser reserve space before the image loads. That prevents distracting layout jumps.

> **Tip:** For responsive images, omit the pixel attributes and use CSS `width: 100%; height: auto;` instead.

## Linking an image

Wrap an `<img>` in an `<a>` tag to make it a clickable link:

```html
<a href="https://www.example.com">
    <img src="banner.jpg" alt="Visit Example.com" />
</a>
```

## Checkpoint

Preview the page with its images loaded, then imagine one fails. Every meaningful image should have a useful `alt` description; at least one should reserve visible space with `width` and `height`, and clicking one should follow its link.

## Your Tasks

1. Add at least **two** `<img>` elements using public image URLs.
2. Ensure **every image** has a meaningful `alt` attribute.
3. Add `width` and `height` attributes to at least one `<img>`.
4. Wrap one image in an `<a>` tag so clicking it opens a link.

## Payoff

Your walking-club page can now communicate with images without leaving visitors who use assistive technology behind.
