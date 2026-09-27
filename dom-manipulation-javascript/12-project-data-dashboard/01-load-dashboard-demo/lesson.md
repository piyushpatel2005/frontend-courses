---
title: Load a dashboard from an offline API fixture
slug: load-dashboard-demo
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

The trail desk needs a compact conditions list. Run the completed preview: it briefly says **Loading entries…**, then shows trail names. The small fixture in `script.js` is the entire data source: **no live request is made**.

Follow `loadEntries()` from `dashboardFetch(API_URL)` to `response.ok`, `response.json()`, then `render(data.items)`. The offline fixture returns a real `Response`, just like `fetch()` does; the URL is a local scenario key, not a live endpoint. A response can arrive but still have a failure status; throwing when `ok` is false sends it to the same visible error state as a rejected request. `render` uses `createElement` and `textContent`: the angle brackets in the last trail title display as characters, not markup.

```javascript
const response = await dashboardFetch(API_URL);
if (!response.ok) throw new Error(`HTTP ${response.status}`);
const data = await response.json();
render(data.items);
```

Try setting `window.dashboardFixture.items = []` in `script.js` before `loadEntries()` and run again to see the empty state. Or set `failNext: true` to reveal Retry. Restore the fixture afterwards. The status region announces each state; the list is cleared before a fresh request so old results cannot look current.

For an actual service, replace the **call** to `dashboardFetch(API_URL)` with `fetch("https://your-cors-enabled-api.example/events")` and adapt the expected JSON shape. An endpoint on another origin must allow this page via CORS; changing JavaScript cannot bypass that policy. The next lesson asks you to build the same pattern for events.
