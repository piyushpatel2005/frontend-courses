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

Your community events page already has a list, status region, and Retry button. Its `dashboardFetch` is a declared offline fixture, not a real network call. Use the preceding trail demo as a model; write the missing `render` and `loadEntries` bodies in `script.js`.

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

For your dashboard, read `{ items }` from the fixture response and make one row per event. Before awaiting it, show Loading and clear old rows. A non-OK response must show an error with a visible Retry button. On success, show the count or an explicit empty message. Run the preview: the fixture includes a title with literal `<em>` characters; it must never create an `em` element.

## Your Tasks

1. Render each fixture event as a safe text-only title and venue in `#entries`, and announce the result count in `#status`.
2. Show a loading status while the request is pending; on a failed response show an error and unhide `#retry`, which must start a fresh load.
3. Show an explicit empty message when the fixture returns zero items, without leaving old rows behind.

A real endpoint belongs at the `dashboardFetch(API_URL)` call; use `fetch("https://your-cors-enabled-api.example/events")` there only when a service permits cross-origin browser requests via CORS and returns the documented `{ items }` shape. This exercise remains fully offline.
