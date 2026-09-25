---
title: Meta Tags
slug: meta-tags
order: 2
language: html
summary: Learn common HTML meta tags for character encoding, responsive design, search results, and social sharing.
seo_title: HTML Meta Tags for SEO and Sharing
seo_description: Learn common HTML meta tags, including charset, viewport, description, Open Graph, robots, and author metadata.
seo_keywords: [HTML meta tags, SEO meta tags, Open Graph tags, viewport meta tag, robots meta tag]
lesson_type: informational
validationRules: []
hints: []
---

# Meta Tags

## Mission

The walking club is sharing its route page with new members. The page itself stays the same, but its hidden metadata decides whether a phone displays it correctly and whether a shared link has a useful title and summary. Read the head as a small briefing for browsers and services.

## What you'll build

A concise reference of meta tags that handle encoding, viewport, search description, social sharing (Open Graph), author, and crawl instructions.

The walking club is sharing its route page with new members. The page itself stays the same, but its hidden metadata decides whether a phone displays it correctly and whether a shared link has a useful title and summary. Read the head as a small briefing for browsers and services.

## The core briefing

Meta tags live inside `<head>` and use attributes to carry information that visitors do not see in the page body.

```html
<meta name="..." content="..." />
```

Start every document with its character encoding, then give mobile browsers viewport instructions.

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

UTF-8 handles text from many languages and emoji. The viewport tag prevents many mobile browsers from beginning with a zoomed-out desktop view.

## Help people find and share the route

A description gives search tools a concise page summary. An author tag records who made the document. Search engines may use the description as the text beneath a result title, so write it for a person scanning results.

```html
<meta name="description" content="A relaxed river walk with meeting details, route notes, and accessibility information." />
<meta name="author" content="City Walking Club" />
```

Open Graph properties supply the title, description, image, and URL that many social platforms use in a shared-link preview.

```html
<meta property="og:title" content="Saturday River Walk" />
<meta property="og:description" content="Meeting details and route notes for this weekend's walk." />
<meta property="og:image" content="https://example.com/river-walk.png" />
<meta property="og:url" content="https://example.com/river-walk" />
```

## Choose crawl instructions carefully

The `robots` tag communicates whether search engines may index a page and follow its links. `index, follow` is the usual default; use `noindex, nofollow` only when a page should stay out of search results.

```html
<meta name="robots" content="index, follow" />
```

You may encounter older `http-equiv` tags that mimic HTTP headers, such as a delayed redirect. Prefer a server redirect when you control the server.

```html
<meta http-equiv="refresh" content="5; url=https://example.com" />
```

## Checkpoint

Imagine sharing the route URL in a group chat. The Open Graph title and description are the details a platform can use for the preview; the body text has not changed. Keep the title, description, and URL about the same page so the preview does not mislead visitors.

## Reference card

| Meta tag | Purpose |
|----------|---------|
| `charset` | Character encoding |
| `viewport` | Mobile scaling |
| `description` | Search snippet |
| `author` | Page author |
| `og:*` | Social media sharing |
| `robots` | Search engine crawl instructions |

The route page now has a clear hidden briefing: browsers can render it, search tools can describe it, and shared links can identify it.