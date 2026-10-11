---
title: Iframes
slug: iframes
order: 3
language: html
summary: Embed external pages safely with iframe titles, sizing, sandboxing, and lazy loading.
seo_title: Embed Pages with HTML Iframes
seo_description: Learn to use HTML iframes for external content with accessible titles and sandbox security.
seo_keywords:
  - HTML iframe
  - iframe sandbox
  - embedded content
  - HTML security
validationRules: []
hints:
  - "The src attribute is the URL of the page to embed."
  - "Use width and height to set dimensions, or control size with CSS."
  - "The sandbox attribute restricts what the embedded page can do — a good security practice."
  - "Not all websites allow embedding — if a page has X-Frame-Options: DENY you cannot iframe it."
lesson_type: coding
---

# Iframes

A video or audio element loads a media file. An `<iframe>` embeds a separate HTML document. Use one to reserve a map area on the hall's visitor page.

## Name the embedded page

This small example uses `srcdoc` to provide the embedded HTML directly. It does not contact another website:

```html
<iframe
  srcdoc="<p>The library opens at 10 a.m.</p>"
  title="Library opening notice"
  width="400"
  height="160"
  sandbox
></iframe>
```

`srcdoc` is useful for this self-contained example. For a remotely hosted page, use `src` instead, as you will in the exercise. Do not copy `srcdoc` into the map frame: it takes precedence over `src`.

The frame's `title` describes its contents to assistive technology; it is not a visible heading. Width and height reserve space in pixels. `loading="lazy"` lets the browser defer loading a frame that is not yet near the viewport.

## Choose permissions deliberately

An empty `sandbox` applies restrictions. Tokens lift particular restrictions:

| Token | Permission |
| --- | --- |
| `allow-scripts` | Run scripts inside the frame |
| `allow-forms` | Submit forms |
| `allow-popups` | Open new windows |
| `allow-same-origin` | Retain the embedded page's normal origin rather than an opaque origin |

For this exercise, allow scripts only. Do not add forms, popups, or other permissions just to remove an error. Combining scripts and same-origin permissions is especially risky when embedding content from your own origin. A sandbox is one restriction mechanism, not a guarantee that arbitrary content is safe.

## Add the map frame

Use this OpenStreetMap embed address in `src`:

```text
https://www.openstreetmap.org/export/embed.html?bbox=-0.15%2C51.50%2C-0.12%2C51.52&layer=mapnik
```

These coordinates are an example area in London, not a verified location for the fictional hall. In an HTML attribute, write the query separator as `&amp;`.

## Your Tasks

1. Add exactly one `<iframe>` below the page heading.
2. Set its `src` to the supplied OpenStreetMap embed address. Leave `srcdoc` off.
3. Give it a title that identifies both the map and Riverlight Community Hall.
4. Set positive whole-number `width` and `height` attributes, such as `800` and `450`.
5. Set `sandbox="allow-scripts"`, with no other permissions.
6. Set `loading="lazy"`.

Edit `index.html`, Run to inspect the reserved frame area, then Submit. The checks inspect your iframe markup, not the map's internal page.

A provider can forbid framing through response headers, and a sandbox or the course preview can prevent required features from working. A blank or blocked frame therefore does not by itself mean your HTML is wrong. This exercise does not promise that the map will load under these restrictions. Before using a real embed, check the provider's documented embed address and permissions; do not weaken the sandbox by trial and error.
