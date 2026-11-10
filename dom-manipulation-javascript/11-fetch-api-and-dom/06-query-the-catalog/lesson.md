---
title: "Query the catalog safely"
slug: query-the-catalog
order: 6
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Search a mock catalog using URLSearchParams and safely render matches.
seo_title: "Query the catalog safely | JavaScript DOM"
seo_description: Search a mock catalog using URLSearchParams and safely render matches.
seo_keywords: search query, URLSearchParams, DOM list
---

Search the catalog for `tea & honey`. The ampersand belongs inside one `q` value, not between two parameters. `URLSearchParams` handles that encoding; `textContent` has a different job when the result reaches the page.

The form listener and async loader are supplied. Start by stopping navigation, then build and display the request URL. Finally render the returned names and an empty message. The mock reads the actual URL and filters local products.

Edit `script.js`, Run to inspect the preview, then Submit to check your work. The HTML, styles, offline fixture, and event/request plumbing are supplied. Functions assigned to `window` can also be called independently by the checks.

## Your Tasks

1. Prevent navigation in the supplied `#catalog-form` submit handler.
2. Make `catalogURL(term)` return `/api/catalog` with the trimmed term encoded as a `q` parameter using `URLSearchParams`. Include `q` even for an empty term.
3. Make `showCatalogURL(url)` display the URL as literal text in `#request-url`.
4. Make `renderProducts(products)` replace `#results` with one text-only `li` per product name, clearing it for an empty array.
5. Make `showCatalogEmpty()` announce `No matches.` in `#search-status`.

Search a missing name, then clear the field to restore every product. The fixture makes no network request. Loading and failures return in the dashboard; this page isolates query construction.
