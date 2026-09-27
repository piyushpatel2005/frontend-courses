---
title: 'Exercise: keep the latest result'
slug: exercise-keep-the-latest-result
order: 8
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Use AbortController to keep only the newest lookup result in a DOM preview.
seo_title: 'Abort stale fetch requests | Exercise'
seo_description: Use AbortController to keep only the newest lookup result in a DOM preview.
seo_keywords: abort fetch, latest response, JavaScript exercise
---

# Exercise: keep the latest result

A ferry board has two routes; only the most recent selection should win. The preview is intentionally powered by an **explicit in-page mock fetch**, so it works offline and never claims to show live data.

The previous district lookup canceled a slow old request. Now a ferry board must do the same for two route buttons. The supplied `mockFetch(url, { signal })` records a local request, waits for a predictable timer, and rejects with `AbortError` if canceled. It never contacts a ferry service.

For an unrelated temperature display the pattern is:

```javascript
let currentController;
async function checkWeather(city) {
  currentController?.abort();
  currentController = new AbortController();
  try {
    const response = await mockFetch(`/api/weather?city=${encodeURIComponent(city)}`, {
      signal: currentController.signal
    });
    const data = await response.json();
    label.textContent = data.summary;
  } catch (error) {
    if (error.name !== "AbortError") label.textContent = "Lookup failed.";
  }
}
```

In the ferry board, click **Slow pier** and immediately **Fast pier**. The board should end on Fast even when the slow timer has elapsed. `AbortError` is not a service outage; don't replace the newer loading or ready message with an error from the canceled request. Run the preview, then Submit for checks that exercise both cancellation and the final DOM state.

## Your Tasks

1. On a second route click, abort the previous request via `AbortController` and pass the current controller's `signal` into `mockFetch`.
2. Show `Loading route…` for a new lookup and safely display the latest route name and status `Route ready.` after it resolves; ignore `AbortError` so an old request cannot overwrite the newer display.
