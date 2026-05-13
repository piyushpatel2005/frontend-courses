---
title: Hyperlinks
slug: hyperlinks
order: 1
language: html
validationRules: []
hints:
  - "The anchor tag syntax is: <a href=\"URL\">link text</a>"
  - "Use target=\"_blank\" to open a link in a new tab — add rel=\"noopener noreferrer\" for security."
  - "Relative links point to files on the same site: href=\"about.html\" or href=\"../index.html\""
  - "An anchor with href=\"#section-id\" jumps to the element with that id on the same page."
---

# Hyperlinks

The `<a>` (anchor) tag is what makes the web a *web* — it connects pages together. Without links, every page would be an island.

## Basic link syntax

```html
<a href="https://www.example.com">Visit Example</a>
```

- `href` (HyperText REFerence) — the destination URL. Without it, `<a>` is not a hyperlink.
- The text between the tags is what the user clicks.

## Link types

### External links (absolute URL)

Point to a page on a different website:

```html
<a href="https://www.google.com">Google</a>
```

Always use **full URLs** (including `https://`) for external sites.

### Internal links (relative path)

Point to a page within the same website:

```html
<!-- Link to about.html in the same folder -->
<a href="about.html">About</a>

<!-- Link to a file in the parent folder -->
<a href="../index.html">Home</a>
```

Relative paths change depending on where the current file sits in the folder structure.

### Opening links in a new tab

Add `target="_blank"`. Always pair it with `rel="noopener noreferrer"` for security:

```html
<a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Google (new tab)</a>
```

### Anchor links (jump to a section)

Use an element's `id` as the `href` target to scroll to that part of the page:

```html
<a href="#contact">Jump to Contact</a>
...
<h2 id="contact">Contact Us</h2>
```

This is how "Back to top" links and table-of-contents navigation work.

## Exercise

In the starter `index.html` you have two empty sections. Your tasks:

1. Add a `<nav>` containing:
   - An external link to `https://www.wikipedia.org` that opens in a **new tab**.
   - An anchor link that jumps to the `#about` section on the same page.
2. Add a `<section id="about">` below the nav with an `<h2>` heading and a `<p>`.
