---
title: 'Exercise: search the catalog'
slug: exercise-search-the-catalog
order: 6
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Search a mock catalog using URLSearchParams and safely render matches.
seo_title: 'Search API query strings in JavaScript | Exercise'
seo_description: Search a mock catalog using URLSearchParams and safely render matches.
seo_keywords: search query, URLSearchParams, DOM list
---

# Exercise: search the catalog

A small catalog needs an encoded search box. The preview is intentionally powered by an **explicit in-page mock fetch**, so it works offline and never claims to show live data.

The seed search showed why a raw `&` breaks hand-built query strings. The catalog fixture in this lesson reads the `q` parameter back from your URL; an incorrectly encoded term loses part of its value. Its data stays local, and `mockFetch` never reaches the network.

For another setting, a gallery could form its request like this:

```javascript
async function findPaintings(term) {
  const params = new URLSearchParams({ q: term });
  const response = await mockFetch(`/api/paintings?${params}`);
  return response.json();
}
```

The catalog starts with a search field and no results. Search `tea & honey` to see a single result, then search an unmatched term to see an empty message. Check the visible request URL: `%26` encodes the ampersand, while `textContent` protects any resulting title in the list. Avoid treating URL encoding as permission to put server text into `innerHTML`.

## Your Tasks

1. Prevent `#catalog-form` from navigating on submit.
2. Encode the trimmed query as `q` with `URLSearchParams` in a `/api/catalog` request and display that URL in `#request-url`.
3. Await the mock JSON response and replace `#results` with matching product names as literal list-item text.
4. For an unmatched query, clear old results and show `No matches.` in `#search-status`.
