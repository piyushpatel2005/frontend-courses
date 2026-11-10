---
title: Images
slug: images
order: 3
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
  - "The <img> tag is a void element with no closing tag: <img src=\"path/to/image.jpg\" alt=\"description\" />"
  - "alt text is not optional — it's read aloud by screen readers and shown when the image fails to load."
  - "Use width and height attributes to reserve space and prevent layout shifts."
  - "For decorative images that add no meaning, use alt=\"\" (empty string) so screen readers skip them."
---

Links connect pages; images bring visual information into them. Add a photo strip to the supplied walking-club page in `index.html`. You will write image sources and text alternatives, reserve space for one image, and turn one image into a link.

The `<img>` element is void: it has no content or closing tag. Its trailing `/` is optional in HTML.

## Basic syntax

```html
<img src="cat.jpg" alt="A tabby cat sitting on a windowsill" />
```

| Attribute | Required | Description |
|-----------|----------|-------------|
| `src` | Yes | Path or URL to the image file |
| `alt` | Yes | Alternative text description |
| `width` | No | Width in pixels |
| `height` | No | Height in pixels |

## The `src` attribute

`src` can be a relative path to an image in the same project or an absolute URL:

```html
<!-- Relative path -->
<img src="images/logo.png" alt="Company logo" />

<!-- Absolute URL -->
<img src="https://commons.wikimedia.org/wiki/Special:FilePath/Fronalpstock_big.jpg?width=320" alt="Mountain landscape" />
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

Setting `width` and `height` lets the browser reserve space before the image loads. That helps avoid layout jumps while the image loads; CSS can still affect the final size.

Keep width and height in the image's proportions. Later, CSS such as `max-width: 100%; height: auto;` can shrink an image to fit its container while the HTML dimensions still describe its aspect ratio.

## Linking an image

Wrap an `<img>` in an `<a>` tag to make it a clickable link. When the image is the link’s only content, its alt text should explain the destination or action, not just its appearance:

```html
<a href="https://www.example.com">
    <img src="banner.jpg" alt="Visit Example.com" />
</a>
```

## Check your page

Preview the page. If remote images cannot load in the embedded preview, read their descriptive alt text and check your markup; the tests do not require a network connection. Every meaningful image should have a useful `alt` description; at least one should reserve visible space with `width` and `height`, and one image should be inside a link. You do not need to open an external page to complete the exercise.

Edit `index.html`, press **Run** to inspect your page, then **Submit** to check the tasks. You can submit after each step; later tasks may still be incomplete.

The relative filenames above are syntax examples, not files supplied here. For this exercise, you may use the public Wikimedia image URL shown above twice with different widths, or choose two public HTTPS images. Remote files may be unavailable; the checks validate markup, not successful downloads or the accuracy of a description. Read your alt text against the image yourself.

## Your Tasks

1. Add at least two `<img>` elements with public HTTPS image URLs in `src`.
2. Give **both images** non-empty, descriptive `alt` text.
3. Give at least one image positive whole-number `width` and `height` attributes, without `px`.
4. Wrap one image in an `<a href="https://...">` so it links to a useful page.

Your walking-club page can now communicate with images without leaving visitors who use assistive technology behind.
