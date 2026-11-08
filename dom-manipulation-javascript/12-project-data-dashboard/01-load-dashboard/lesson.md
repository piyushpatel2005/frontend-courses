---
title: "Load Dashboard"
slug: load-dashboard
order: 1
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Inspect a trail dashboard that renders mock API data with loading, empty, and failure states.
seo_title: Trail dashboard API fixture demo
seo_description: Read a runnable trail dashboard that uses an offline fetch-shaped fixture, response.ok, JSON, and safe DOM updates.
seo_keywords:
  - offline API fixture
  - DOM loading state
  - response.ok
---

# Load a dashboard from an offline API fixture

Run the trail dashboard. It starts with Loading entries, then shows three trails. The `<em>` characters in the last title should stay visible as text. This completed demo uses trail data; the exercises will build a separate community events dashboard and keep its event data across stages.

Follow `loadEntries()` in `script.js`: it waits for `dashboardFetch`, checks `response.ok`, reads JSON, then passes `data.items` to `render`. The response body is an object containing an array, not a bare array. `render` clears earlier rows before inserting the new ones.

```javascript
const response = await dashboardFetch(API_URL);
if (!response.ok)
  throw new Error(`HTTP ${response.status}`);
const data = await response.json();
render(data.items);
```

`dashboardFetch` is an offline fetch-shaped function returning real Response objects. Its fixture snapshots the items when a request starts. The expression `items.map(item => ({ ...item }))` copies each item into a fresh object, so changing the fixture later does not change that request's captured data. You can read this as setup rather than code to reproduce.

Try `failNext: true` and Run again. The first request should fail and reveal Retry; clicking Retry should recover because the mock resets that flag after reading it. Next, temporarily replace the fixture's items array with `[]`; the page should announce No matching entries. Restore the three trails afterwards.

Loading clears stale rows and hides Retry. A failure reveals Retry; success shows a count or an empty message. The next exercise separates those changes into small helpers so you can check each one before assembling the page.

No live endpoint is involved here. To deploy against a real service, replace the fetch-shaped call with `fetch` and check the service's response shape. A cross-origin service must also allow the page through CORS.
