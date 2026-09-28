---
title: 'Abort outdated requests'
slug: abort-outdated-requests
order: 7
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Cancel a previous asynchronous lookup so slow results cannot replace fresh ones.
seo_title: 'AbortController fetch race prevention | Beginner'
seo_description: Cancel a previous asynchronous lookup so slow results cannot replace fresh ones.
seo_keywords: AbortController, stale fetch, race condition
---

# Abort outdated requests

A town guide offers rapid neighborhood lookups. The preview is intentionally powered by an **explicit in-page mock fetch**, so it works offline and never claims to show live data.

Imagine a slow neighborhood lookup followed quickly by a fast one. Without protection, the slow response may arrive last and overwrite the newer choice. `AbortController` provides a `signal` for a request; calling `abort()` tells fetch to reject it with an `AbortError`. A mock that accepts the same `{ signal }` option lets us demonstrate that behavior offline.

```javascript
let controller;
async function showDistrict(name) {
  controller?.abort();
  controller = new AbortController();
  try {
    const response = await mockFetch(`/api/district?q=${encodeURIComponent(name)}`, {
      signal: controller.signal
    });
    const district = await response.json();
    document.querySelector("#district").textContent = district.name;
  } catch (error) {
    if (error.name !== "AbortError") throw error;
  }
}
```

Click **Slow: North** then quickly **Fast: South**. The southern name remains even after the slow lookup would have finished. This fixture uses timers to mimic request latency, not network access. Inspect the controller in `script.js`: aborting previous work matters when a request is pending; an abort is an expected change of mind and should not be shown as a user-facing failure.

In a real network request, use `fetch(url, { signal: controller.signal })`. Some work after `fetch` may still continue independently, so complex multi-step operations can also check a request ID before painting the DOM. The exercise practices cancellation in a smaller view.

## Learn more

MDN's [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) shows its signal and cancellation methods.
