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
---

# Iframes

## Mission

The Riverlight Community Hall wants to place a public transit map inside its visitor page. Embed the map in a frame that names what it contains and limits permissions the map does not need.

## What you'll build

A titled, sized iframe embedding an external page with sandbox permissions that allow only scripts, demonstrating lazy loading and responsible embedded-content practices.

The Riverlight Community Hall wants to place a public transit map inside its visitor page. Embed the map in a frame that names what it contains and limits permissions the map does not need.

## Target

Your preview will show one titled embedded page with a defined size and a sandbox boundary.

## One idea: an iframe is another page with its own boundary

`<iframe>` displays another HTML page inside yours. The embedded page remains a separate document, so it needs a clear `title` for screen readers and careful permissions.

```html
<iframe
    src="https://example.com"
    width="800"
    height="450"
    title="Riverlight transit map"
    sandbox="allow-scripts"
    loading="lazy"
></iframe>
```

`src` points to the page. `width` and `height` reserve space before it loads. `sandbox` starts restrictive; add only the tokens the embed requires. `loading="lazy"` waits until the frame is near the viewport.

## Checkpoint

Run the page. You should see a reserved frame area with a meaningful title in the markup. If the embedded page refuses to appear, it may block framing with `X-Frame-Options` or Content Security Policy; choose an embed URL the provider supports.

## Permission choices

| Sandbox token | Allows |
|---|---|
| `allow-scripts` | JavaScript in the embedded page |
| `allow-forms` | Form submission |
| `allow-popups` | Opening new windows |
| `allow-same-origin` | The frame's normal origin behavior |

Do not add permissions by habit. Cross-origin frames cannot freely read each other's DOM, and a frame with unnecessary permissions increases risk.

## Your Tasks

Add the transit-map frame:

1. Add an `<iframe>` that embeds a public webpage (for example `https://example.com`).
2. Set the `src` attribute on the iframe.
3. Add a meaningful `title` attribute for accessibility.
4. Set both `width` and `height` on the iframe.
5. Add a `sandbox` attribute that allows scripts.

## Payoff

The visitor page now has a clearly described, constrained space for outside content.
