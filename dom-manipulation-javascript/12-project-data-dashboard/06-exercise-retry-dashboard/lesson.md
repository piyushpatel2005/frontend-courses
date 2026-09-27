---
title: Finish a resilient event dashboard
slug: exercise-retry-dashboard
order: 6
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Finish the event dashboard with retry and newest-response protection.
seo_title: Build resilient API dashboard retry
seo_description: Add retry, AbortController cancellation, and latest-request guards to an offline vanilla JavaScript dashboard.
seo_keywords:
  - AbortController exercise
  - stale response prevention
  - retry dashboard
---

# Finish a resilient event dashboard

Your event search works, but rapid submissions can leave an old request running. Use the preceding trail demo to make the latest search win and leave Retry available for genuine failures. The starter retains your previous working dashboard; finish the marked TODOs in `script.js`.

In a separate weather widget, the smallest request identity guard would be:

```javascript
let newest = 0;
async function refresh() {
  const id = ++newest;
  const reading = await readWeather();
  if (id !== newest) return;
  showWeather(reading);
}
```

For this dashboard, add `AbortController` so a newly started request cancels the previous one, and pass its signal into `dashboardFetch`. Also compare a monotonic request ID after awaiting JSON and in `catch` so late or aborted results never replace current results or show a false error. Keep ordinary failure feedback and the Retry button. Try a missing query, then a real title; only the newest response belongs on screen.

## Your Tasks

1. Preserve the event search and failure UI; a failed request must reveal Retry, and clicking Retry must load the current search and hide the button on success.
2. Cancel an in-flight request with `AbortController` when a newer search starts, and keep only the newest search result in the list.
3. Ignore cancelled requests in the error handler; rapid searches must not display a false error or reveal Retry after the successful latest request.

The finished dashboard runs entirely on a mock fetch fixture. To connect it later, replace the fetch-shaped call with a CORS-enabled endpoint and verify its response contract. Your page now handles delayed data as carefully as immediate DOM updates.
