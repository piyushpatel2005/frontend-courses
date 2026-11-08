---
title: "Keep The Latest Result Practice"
slug: keep-the-latest-result-practice
order: 8
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Use AbortController to keep only the newest lookup result in a DOM preview.
seo_title: 'Abort stale fetch requests | Exercise'
seo_description: Use AbortController to keep only the newest lookup result in a DOM preview.
seo_keywords: abort fetch, latest response, JavaScript exercise
---

# keep the latest result

The ferry board already connects each button to an async request. Finish the four state helpers so a slow old selection cannot replace a newer one. All routes come from the local timed fixture; this is not a ferry timetable.

`beginRoute()` creates and returns a fresh signal on every click. Add cancellation before that creation. Keep a local signal for each operation: checking a shared controller after `await` could inspect the newer request instead of the one that just finished. The rendering helper receives the correct signal.

Edit `script.js`, Run to inspect the preview, then Submit to check your work. The HTML, styles, offline fixture, and event/request plumbing are supplied. Functions assigned to `window` can also be called independently by the checks.

## Your Tasks

1. Make `showRouteLoading()` announce `Loading route…`.
2. In `beginRoute()`, abort the previous controller before replacing it. The supplied loader passes the returned signal to `mockFetch`.
3. Make `showRouteResult(data, signal)` leave the DOM untouched when `signal.aborted`; otherwise show `data.name` as literal text and announce `Route ready.`.
4. Make `showRouteError(error, signal)` ignore `AbortError` and any error from an aborted signal; retain `Lookup failed.` for a genuine current failure.

Click Slow pier and then Fast pier before the first result returns. Fast pier should remain. The signal check after JSON is useful even if a fetch-shaped dependency finishes despite cancellation.
