---
title: Query a dashboard with URLSearchParams
slug: query-dashboard-demo
order: 3
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Inspect a trail search that sends an encoded query to an offline API fixture.
seo_title: Dashboard search URLSearchParams demo
seo_description: Explore form submission and URLSearchParams for safe query construction in a runnable offline dashboard.
seo_keywords:
  - URLSearchParams demo
  - search form
  - API filtering
---

# Query a dashboard with URLSearchParams

The trail desk now needs a search box. Run the completed preview, enter part of a trail name, and press Search. The page stays put while only matching rows remain. Clear the field and search again to restore every trail.

The form listener prevents navigation. `requestURL()` trims the query and lets `URLSearchParams` encode characters such as spaces and `&` instead of concatenating raw user input. The offline fixture parses the URL and filters a snapshot of its items; it does not contact a server.

```javascript
const params = new URLSearchParams();
const term = input.value.trim();
if (term) params.set("q", term);
const url = params.size ? `${API_URL}?${params}` : API_URL;
```

The response still flows through the existing loading, error, and empty UI. This is a server-style query contract even though the demo uses mock data; a real API may use another parameter or response shape. Try searching for a nonexistent trail to see the empty state, then inspect the `requestURL()` call in `script.js`. Next, add the equivalent search to your event dashboard.
