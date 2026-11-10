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

Your signal pages can organize text. A visitor now needs a way to reach another page or a particular part of this one. Add navigation to a neighborhood repair café page, a separate example from the Meridian signals.

The starter supplies a heading and an empty `<nav>`. A nav groups navigation links; a `<section>` groups a topic. Both have ordinary opening and closing tags, and you will return to their meaning in the semantic HTML module.

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

Use the full URL, including `https://`, for external sites. A link can be reached with Tab and activated with Enter; choose text that explains its destination instead of “click here.”

### Internal links (relative path)

Use an internal link for a page on the same website:

```html
<!-- Link to about.html in the same folder -->
<a href="about.html">About</a>

<!-- Link to a file in the parent folder -->
<a href="../index.html">Home</a>
```

A relative path depends on where the current file sits in the folder structure. `images/logo.png` starts in the current folder; `../` goes up one folder. A leading `/`, as in `/about.html`, starts at the site root instead. File paths are not paths on your own computer, and their letter case must match the hosted filenames. These filenames illustrate a multi-page site; `about.html` is not supplied in this exercise, so do not expect that example path to load in the preview. `example.com` is an example address, not a repair-café resource.

### Opening links in a new tab

Add `target="_blank"` to open a link in a new tab. In this exercise, pair it with `rel="noopener noreferrer"`: `noopener` prevents access to the opening page through `window.opener`, and `noreferrer` omits the referring page address. Modern browsers already treat an ordinary `target="_blank"` link as having `noopener` unless you opt into an opener. Writing it explicitly makes the intent clear. `noreferrer` is a separate privacy choice, not a requirement for every new-tab link. Use a label that warns readers about the new tab:

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

## Check your page

Preview the page and inspect both link labels. Test the `#about` link after adding its target; on a short page, the whole section may already be visible, so there may be no noticeable scroll. Compare the `href` after `#` with the section's `id`. You do not need to open Wikipedia to pass; the checks inspect the link attributes without contacting another site.

Edit `index.html`, press **Run** to inspect your page, then **Submit** to check the tasks. You can submit after each step; later tasks may still be incomplete.

## Your Tasks

The starter supplies a heading and an empty `<nav>`. Add the links inside that nav, then the about section after it.

1. Inside the supplied `<nav>`, add a link to `https://www.wikipedia.org` with readable link text.
2. Make that same external link open in a new tab with `target="_blank"` and `rel="noopener noreferrer"`.
3. Add a second link in the nav with `href="#about"` and readable link text.
4. Add a `<section id="about">` below the nav.
5. Inside that section, add an `<h2>` naming it.
6. Add a `<p>` describing the repair café inside the section.

Your repair-café page now gives visitors a safe route outward and a quick route to the information they need on the page.
