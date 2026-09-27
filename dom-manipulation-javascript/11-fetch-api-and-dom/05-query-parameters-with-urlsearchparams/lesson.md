---
title: 'Build a query with URLSearchParams'
slug: query-parameters-with-urlsearchparams
order: 5
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Encode a search query in a request URL without building query strings by hand.
seo_title: 'URLSearchParams fetch query encoding | Beginner'
seo_description: Encode a search query in a request URL without building query strings by hand.
seo_keywords: URLSearchParams, encode query, fetch URL
---

# Build a query with URLSearchParams

A seed library needs a search that can include spaces and symbols. The preview is intentionally powered by an **explicit in-page mock fetch**, so it works offline and never claims to show live data.

Typing `tea & honey` into a search box is not the same as appending `?q=tea & honey` to a URL. `&` separates query parameters and spaces need encoding. `URLSearchParams` accepts the input as a value and serializes it safely; it is **URL encoding**, not HTML escaping. When displaying the returned string, still use `textContent`.

```javascript
const params = new URLSearchParams({ q: "red beans & rice" });
const url = `/api/seeds?${params.toString()}`;
// q=red+beans+%26+rice; the server decodes the original value.
const response = await mockFetch(url);
const seeds = await response.json();
```

The mock parses the actual URL you pass and returns fixed in-page seed data. Try the search `mint & lime`; the preview shows a match and the URL line shows `%26` instead of an unescaped ampersand. This is a local request simulation, **not a real API search**. A real `fetch(url)` can use the same URL construction when a same-origin API exists; cross-origin servers must explicitly permit CORS.

The next exercise moves that exact encoding technique to a catalog, where the names and DOM targets are different.
