---
title: Build an events dashboard
slug: exercise-load-dashboard
order: 2
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Build an offline event dashboard with safe cards and explicit loading, empty, and error UI.
seo_title: Build an events dashboard with API states
seo_description: Practice fetching mock event data, checking HTTP success, rendering safe list items, and announcing empty or error states.
seo_keywords:
  - mock fetch exercise
  - JavaScript dashboard
  - accessible status
---

# Build an events dashboard

Your community events page already has a list, status region, and Retry button. Its `dashboardFetch` is a declared offline fixture returning real `Response` objects, not a network call. Use the preceding trail demo as a model. The starter already fetches and parses JSON in `loadEntries()` and connects Retry; finish `render()` first, then add loading/error handling to `loadEntries()`.

Here is a **different** inventory-list pattern for safe DOM text. `replaceChildren()` clears old results before inserting new nodes:

```javascript
const shelf = document.querySelector("#shelf");
shelf.replaceChildren();
for (const product of products) {
  const row = document.createElement("li");
  row.textContent = product.name;
  shelf.append(row);
}
```

For your dashboard, the starter reads `{ items }` from the fixture response; make one row per event. Before awaiting it, show Loading and clear old rows. A non-OK response must show an error with a visible Retry button. On success, show the count or an explicit empty message. Run the preview: the fixture includes a title with literal `<em>` characters; it must never create an `em` element.

## Your Tasks

1. In `render(items)`, create safe text-only title and venue rows in `#entries` and announce the number found in `#status`. The request/JSON setup in `loadEntries()` is already supplied.
2. Show `Loading entries…` as soon as a load starts, while its response Promise is pending.
3. Check failed HTTP responses, show an error, and reveal Retry; clicking Retry starts a new load and hides the button after success.
4. When the fixture returns zero items, clear prior rows and announce `No matching entries.`.

A real endpoint belongs at the `dashboardFetch(API_URL)` call; use `fetch("https://your-cors-enabled-api.example/events")` there only when a service permits cross-origin browser requests via CORS and returns the documented `{ items }` shape. This exercise remains fully offline.
