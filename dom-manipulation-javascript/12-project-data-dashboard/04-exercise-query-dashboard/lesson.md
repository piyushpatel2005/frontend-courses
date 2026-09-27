---
title: Add event search to the dashboard
slug: exercise-query-dashboard
order: 4
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Add a labelled search form and encoded server-style filtering to the event dashboard.
seo_title: Build dashboard search with URLSearchParams
seo_description: Build event search using a labelled form, URLSearchParams, and empty-state feedback without page navigation.
seo_keywords:
  - URLSearchParams exercise
  - event filtering
  - accessible search
---

# Add event search to the dashboard

Keep the event dashboard from the first exercise and connect the already-labelled search field. The preceding trail demo shows how to prevent form navigation and send an encoded `q` parameter; the event fixture already knows how to read it. Your starter retains the working load/error/empty states so you can focus on search.

For a separate library catalogue, the browser might prepare its query like this:

```javascript
const params = new URLSearchParams();
params.set("q", titleField.value.trim());
const url = `/catalogue?${params}`;
```

Use the `#search-form` and `#search` controls already in `index.html`. Make a function that returns `API_URL` when the field is empty, or `API_URL` plus an encoded `q` query when nonempty. Pass that URL into the existing `dashboardFetch` call. Submit the form without navigating, and reuse `loadEntries()` so Loading and empty feedback remain visible. Search for `Repair`, then a missing title, then clear the field.

## Your Tasks

1. Prevent `#search-form` submission from navigating and start a fresh dashboard load. The labelled input and existing loader are supplied.
2. Use `URLSearchParams` to encode the trimmed search as `q` in the request URL so reserved characters such as `&` reach the mock intact.
3. Show only the event rows matching the current search.
4. For a search with no matches, clear earlier rows and announce `No matching entries.`.
5. For a blank search, restore the full event list.

The fixture is still offline. A deployed fetch replacement needs a CORS-enabled endpoint that understands the same query parameter and JSON shape.
