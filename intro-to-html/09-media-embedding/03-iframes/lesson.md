---
title: Iframes
slug: iframes
order: 3
language: html
summary: Understand iframe titles, sizing, sandbox permissions, and lazy loading through worked examples.
seo_title: Embed Pages with HTML Iframes
seo_description: Learn to use HTML iframes for external content with accessible titles and sandbox security.
seo_keywords:
  - HTML iframe
  - iframe sandbox
  - embedded content
  - HTML security
lesson_type: informational
---

# Iframes

A video or audio element loads a media file. An `<iframe>` embeds a separate HTML document, such as a map on a visitor page. The examples here are for reading; this lesson does not load embedded pages. The course preview rejects nested frames before rendering and also blocks them through its content security policy, so pasting these examples into that preview would not prove whether a provider allows embedding. Test real embeds separately on a page you control.

## Name the embedded page

This small example uses `srcdoc` to provide the embedded HTML directly, without contacting another website:

```html
<iframe
  srcdoc="<p>The library opens at 10 a.m.</p>"
  title="Library opening notice"
  width="400"
  height="160"
  sandbox
></iframe>
```

The frame's `title` describes its contents to assistive technology; it is not a visible heading. Width and height reserve space in pixels. An empty `sandbox` applies restrictions to the embedded document.

For a remotely hosted page, use `src` instead. If both attributes are present, `srcdoc` takes precedence over `src`.

## Read a map embed

This worked example reserves a map area on Riverlight Community Hall's visitor page:

```html
<h1>Visiting Riverlight Community Hall</h1>
<iframe
  src="https://www.openstreetmap.org/export/embed.html?bbox=-0.15%2C51.50%2C-0.12%2C51.52&amp;layer=mapnik"
  title="Area map for Riverlight Community Hall"
  width="800"
  height="450"
  sandbox="allow-scripts"
  loading="lazy"
></iframe>
```

The `src` uses an embed address rather than a regular map page. In an HTML attribute, the query separator is written as `&amp;`. These coordinates show an example area in London, not a verified location for the fictional hall.

`loading="lazy"` lets the browser defer loading a frame that is not yet near the viewport. The width and height still reserve its space before the embedded document loads.

## Choose permissions deliberately

Sandbox tokens lift particular restrictions:

| Token | Permission |
| --- | --- |
| `allow-scripts` | Execute scripts inside the frame |
| `allow-forms` | Send form data |
| `allow-popups` | Open new windows |
| `allow-same-origin` | Retain the embedded page's normal origin rather than an opaque origin |

The map example allows scripts only; it is an illustration of restricted markup, not a promise that the provider works with those permissions. Combining scripts and same-origin permissions is especially risky when embedding content from your own origin. A sandbox is one restriction mechanism, not a guarantee that arbitrary content is safe. The separate `allow` attribute controls permissions such as camera or fullscreen; it does not replace `sandbox`. Grant only the features your chosen content genuinely needs.

A provider can forbid framing through response headers, and a sandbox can prevent required features from working. A blank or blocked frame therefore does not by itself mean the HTML is wrong. Before publishing a real embed, check the provider's documented embed address and required permissions; do not weaken the sandbox by trial and error.
