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

Click Slow: North, then quickly click Fast: South. South should remain on the board even after the older lookup would have finished. Both results come from local timers; the demo never contacts a town service.

Without a guard, the last response to finish could replace the latest choice. An `AbortController` owns a `signal`. Give that signal to fetch in the options object, then call the controller's `abort()` when its work is no longer wanted.

```javascript
let controller;
async function startLookup(name) {
  controller?.abort();
  controller = new AbortController();
  const signal = controller.signal;
  // Use this signal for this call, including after await.
}
```

The `?.` means “call abort only if controller exists.” The first click has no earlier controller. Every later click cancels the previous one and creates a new controller; an aborted signal cannot be reset for reuse.

Read `lookUpDistrict()` in `script.js`. It checks the HTTP status, awaits JSON, then checks its own `signal.aborted` before writing to the DOM. That last check protects the page if other asynchronous work finishes despite cancellation. Checking a shared controller there would be wrong: it may already belong to a newer request.

The mock rejects with a `DOMException` named `AbortError` when cancelled. That name lets `catch` distinguish an expected cancellation from a genuine current failure. The fixture also checks signals that were already aborted before the call and removes listeners when its timer finishes.

Run the demo with a longer slow delay, such as `800`, to make the overlap easier to trigger. Restore it afterwards. The ferry exercise supplies the request plumbing so you can focus on the loading, cancellation, result, and error helpers.

## Learn more

MDN's [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) describes controllers and signals.
