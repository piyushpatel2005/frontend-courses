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

Search this seed library for `mint & lime`. The list should show one match, and the request line should contain `%26`. That is the encoded ampersand.

In a query string, `&` separates parameters. Appending raw input as `?q=mint & lime` would give that character the wrong job. `URLSearchParams` treats the input as one value and encodes it when the object becomes a string:

```javascript
const params = new URLSearchParams({
  q: "red beans & rice"
});
const url = `/api/seeds?${params}`;
// /api/seeds?q=red+beans+%26+rice
```

The form handler trims leading and trailing spaces, prevents navigation, and awaits the mock response. The mock reads `q` back from the URL and filters a fixed local list. This demonstrates the request contract, not a live search service.

Try `clover`, then an unmatched word, then a blank search. You should see one row, an empty message, and all seeds. The supplied `filter` keeps entries whose lowercase name `includes` the lowercase query. An empty query matches every name.

URL encoding does not make text safe to insert as HTML. The renderer still creates `li` nodes and assigns `textContent`. The next exercise uses the same query pattern with different catalog data and separate helpers for the URL and the visible result.
