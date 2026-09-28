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

A titled, sized iframe for the hall’s transit-map embed, with restricted permissions and lazy loading.

## Target

Your preview reserves space for the map iframe. The remote page may not load in the course preview; check the markup even if the frame stays blank.

## One idea: an iframe is another page with its own boundary

`<iframe>` displays another HTML page inside yours. The embedded page remains a separate document, so it needs a clear `title` for screen readers and careful permissions.

```html
<iframe
    src="https://example.com"
    width="800"
    height="450"
    title="Example Domain information page"
    sandbox="allow-scripts"
    loading="lazy"
></iframe>
```

`src` points to the page. `width` and `height` reserve space before it loads. `sandbox` starts restrictive; add only the tokens the embed requires. `loading="lazy"` waits until the frame is near the viewport.

## Checkpoint

The example above uses a documentation site, not a transit map; its frame may be blank because that site does not permit embedding. For the hall page, use a map provider’s **embed URL**, not the normal map page URL. Preview the reserved space and inspect the iframe attributes; playback of remote content is not required to pass the checks.

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

1. Add one `<iframe>` for the transit map below the page heading.
2. Give it a `src` pointing to a public map **embed URL** (for example, OpenStreetMap’s export/embed URL).
3. Give it a descriptive `title` identifying the map.
4. Set both `width` and `height` to reserve space.
5. Add `sandbox="allow-scripts"` to limit its permissions.
6. Add `loading="lazy"` so it can wait until near the viewport.

## Payoff

The visitor page now has a clearly described, constrained space for outside content.
