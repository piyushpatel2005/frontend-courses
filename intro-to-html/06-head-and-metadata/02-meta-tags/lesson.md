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
---

The walking club is sharing its route page with new members. The visible page stays the same. Metadata helps phone browsers size it and gives sharing services a title and summary to use. Those services decide what to display, so metadata is a suggestion rather than a guaranteed preview.

## What to look for

This is a reading lesson, not an editor exercise. Use it as a reference for meta tags that handle encoding, viewport, search description, social sharing (Open Graph), author, and crawl instructions.

You already set the route page’s title, viewport, and description. Here are other metadata fields you might meet when sharing it.

## Read the attributes

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

The `robots` tag gives instructions to cooperating search crawlers. `index, follow` is the usual default. `noindex` asks them not to list the page; `nofollow` separately asks them not to follow its links. Neither protects private content: anyone who can access the URL can still read the page.

```html
<meta name="robots" content="index, follow" />
```

## Read a shared-link preview

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

The example.com URLs are illustrative. A published sharing image needs a real, reachable image URL. Before moving on, find the tag that supplies a search summary and the property that supplies a social title; they use different attribute names (`name` and `property`).

## Learn more

MDN’s official documentation explains the available metadata, including description-related tags used by search engines and social previews. Read [MDN’s reference for the HTML meta element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta) when you want to go further.
