---
title: Hyperlinks
slug: hyperlinks
order: 1
language: html
summary: Create external, internal, new-tab, and in-page anchor links with HTML.
seo_title: "HTML Hyperlinks and Anchor Links | Introduction to HTML"
seo_description: Learn how to create external, relative, new-tab, and in-page anchor links with the HTML anchor tag.
seo_keywords:
  - HTML links
  - anchor tag
  - relative links
  - anchor links
validationRules: []
hints:
  - "The anchor tag syntax is: <a href=\"URL\">link text</a>"
  - "Use target=\"_blank\" to open a link in a new tab — add rel=\"noopener noreferrer\" for security."
  - "Relative links point to files on the same site: href=\"about.html\" or href=\"../index.html\""
  - "An anchor with href=\"#section-id\" jumps to the element with that id on the same page."
---

# Hyperlinks

## Mission

Build the navigation strip for a neighborhood repair café page. Visitors should be able to open a useful outside resource, then jump straight to the café's about section.

## What you'll build

A repair-café navigation strip with an external link opening in a new tab and an in-page anchor link to the about section.

The `<a>` (anchor) tag connects pages and makes the web navigable.

## Basic link syntax

```html
<a href="https://www.example.com">Visit Example</a>
```

- `href` (HyperText REFerence) is the destination URL. Without it, `<a>` is not a hyperlink.
- The text between the tags is what the user clicks.

## Link types

### External links (absolute URL)

Use an external link for a page on another website:

```html
<a href="https://www.google.com">Google</a>
```

Use the full URL, including `https://`, for external sites.

### Internal links (relative path)

Use an internal link for a page on the same website:

```html
<!-- Link to about.html in the same folder -->
<a href="about.html">About</a>

<!-- Link to a file in the parent folder -->
<a href="../index.html">Home</a>
```

A relative path depends on where the current file sits in the folder structure.

### Opening links in a new tab

Add `target="_blank"` to open a link in a new tab. Pair it with `rel="noopener noreferrer"` for security:

```html
<a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Google (new tab)</a>
```

### Anchor links (jump to a section)

Use an element's `id` as an `href` target to move to that part of the page:

```html
<a href="#contact">Jump to Contact</a>
...
<h2 id="contact">Contact Us</h2>
```

An `id` gives an element a **unique identifier** on the page, so no two elements should use the same one. The `#` in `href` tells the browser to move to that element instead of loading a new page.

This is how "Back to top" links and table-of-contents navigation work.

## Checkpoint

Preview the page and use both links. The external resource should open in a new tab; the `#about` link should move to the section with that exact `id`. If the jump does nothing, compare the `href` after `#` with the section's `id`.

## Your Tasks

In the starter `index.html` you have two empty sections. Your tasks:

1. Add an external link (`<a href="https://www.wikipedia.org">`) in a `<nav>`.
2. Make that external link open in a new tab using `target="_blank"`.
3. Add an anchor link `<a href="#about">` in the nav.
4. Add a `<section id="about">` below the nav with an `<h2>` and a `<p>`.

## Payoff

Your repair-café page now gives visitors a safe route outward and a quick route to the information they need on the page.
