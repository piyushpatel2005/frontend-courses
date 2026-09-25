---
title: The Head Element and Page Title
slug: title-and-head
order: 1
language: html
summary: Learn what belongs in HTML head, including title, character encoding, and viewport metadata.
seo_title: HTML Head Element and Page Title
seo_description: Learn how the HTML head works and how to set a page title, UTF-8 character encoding, viewport tag, and stylesheet link.
seo_keywords: [HTML head, HTML title, meta charset, viewport meta tag, HTML stylesheet]
validationRules: []
hints:
  - "The <head> is not displayed on the page — it holds instructions for the browser."
  - "<title> sets the text in the browser tab and is used by search engines."
  - "<meta charset=\"UTF-8\"> should always be the first tag inside <head>."
  - "You can link external resources (stylesheets, fonts) and add scripts inside <head>."
---

# The Head Element and Page Title

## Mission
Set up a complete `<head>` so the browser tab shows a meaningful title, the page renders correctly on mobile, and search engines can describe the page accurately.

## What you'll build
A walking-club page with a proper `<head>` containing charset, viewport, title, description, and a stylesheet link — the hidden foundation every real page needs.

A city walking-club page already has visible content, but its browser tab still says “My Page.” Set up the hidden document information so the tab has a useful name and the page behaves well on a phone. Your visible win is a specific browser-tab title backed by a complete `<head>`.

## The browser's setup area

`<body>` holds the content visitors see. `<head>` holds instructions and page information for the browser, search tools, and linked files.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Saturday River Walk — City Walking Club</title>
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <!-- Visible content here -->
</body>
</html>
```

Put `<meta charset="UTF-8" />` first inside `<head>` so the browser decodes text correctly. The viewport tag tells a phone browser to use the device width instead of shrinking a desktop-sized page.

## Name the tab and describe the page

`<title>` appears in the browser tab, history, bookmarks, and often search results. Keep it short, specific, and unique. A description meta tag gives search engines a concise summary they may show beneath that title.

```html
<title>Saturday River Walk — City Walking Club</title>
<meta name="description" content="A relaxed Saturday morning walk along the river, with meeting details and route notes." />
```

A `<link>` connects the document to a stylesheet, while a `<script>` can connect JavaScript when a page needs it.

## Checkpoint

Run the page and look at its browser tab or preview title. It should name the walking-club page, even though the title is not in the visible body. If text appears in the page instead, move that element inside `<head>`.

## Your Tasks

1. Set a descriptive `<title>` for the page (not just "My Page").
2. Add a `<meta name="viewport">` tag.
3. Add a `<meta name="description" content="...">` tag with a meaningful description.
4. Add a `<link>` to an external stylesheet (the file doesn't need to exist — just the tag).

## Payoff

The walking-club page now carries useful browser and search information before visitors read its first heading.