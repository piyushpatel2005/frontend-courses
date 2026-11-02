---
title: Links between project files
slug: relative-file-paths
order: 2
language: html
lesson_type: coding
runtime: srcdoc
summary: Write relative and root-relative link paths by reading the current page’s
  place in a small site.
seo_title: Links between project files | Introduction to HTML
seo_description: Write relative and root-relative link paths by reading the current
  page’s place in a small site.
seo_keywords:
- HTML paths
- relative links
- root relative links
- HTML href
---

# Links between project files

The café navigation used a full website address and a fragment. A site with several pages also needs links between files. A relative path starts from the current page’s folder, so the same text can point somewhere different after you move that page.

Consider a library site with these files:

```text
library/
  index.html
  events/
    talks.html       ← current page
    booking.html
```

From `events/talks.html`, `booking.html` stays in `events`, while `../index.html` moves up to the library folder. On a hosted site, `/index.html` starts at the website root, regardless of the current folder. Use forward slashes, and match filename capitalization.

## Read the café’s folders

Your exercise uses a different site:

```text
site/
  index.html
  contact.html
  events/
    repair.html      ← the page you are editing
    schedule.html
```

Treat `index.html` in the editor as the source for `events/repair.html` in that tree. The preview does not host this folder tree or the destination pages. This exercise checks the authored paths, not navigation; do not click through to missing pages.

The starter supplies three labeled anchors without destinations. Edit their opening tags in `index.html`. Keep their labels: a reader should know the destination before activating a link.

## Your Tasks

1. Give the Schedule link `href="schedule.html"` to reach its sibling in `events`.
2. Give the Home link `href="../index.html"` to move up one folder.
3. Give the Contact link `href="/contact.html"` to start at the site root.

Run to see all three labels become keyboard-reachable links, then Submit to check the paths. The next lesson adds images; their `src` paths follow the same folder rules.
