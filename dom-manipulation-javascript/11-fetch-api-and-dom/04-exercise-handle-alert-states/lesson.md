---
title: 'Exercise: handle alert states'
slug: exercise-handle-alert-states
order: 4
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Give an alert viewer honest loading, empty, HTTP error, and network error feedback.
seo_title: 'Fetch loading, empty and errors | Exercise'
seo_description: Give an alert viewer honest loading, empty, HTTP error, and network error feedback.
seo_keywords: HTTP error, network error, loading state
---

# Exercise: handle alert states

A trail-alert board must say whether there are alerts or a request failed. The preview is intentionally powered by an **explicit in-page mock fetch**, so it works offline and never claims to show live data.

The previous library demo separated three outcomes: a nonempty array, an empty array, and a failed request. Here the selectable alert fixture also supports HTTP 503 and a rejected Promise. The values are deterministic local examples, not the current conditions on any trail.

An unrelated shipping-status viewer could start like this:

```javascript
async function checkShipment() {
  message.textContent = "Checking…";
  try {
    const response = await mockFetch("/api/shipment");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const events = await response.json();
    message.textContent = events.length ? "Events found." : "No events yet.";
  } catch (error) {
    message.textContent = `Unable to check: ${error.message}`;
  }
}
```

For the alert board, choose a scenario and click **Check alerts**. Read the status before and after the asynchronous result. Build alert items with `textContent`; use the status to distinguish “no alerts” from “could not check.” `response.ok` is required even though the mock returns a Response, because a Response with 503 is still delivered successfully to JavaScript.

## Your Tasks

1. On each click, set `#alert-status` to `Checking alerts…` immediately, then call the supplied `mockFetch` for the selected mode.
2. For a successful response, await JSON; safely render alert titles as `li` text, or say `No alerts right now.` when its array is empty.
3. Check `response.ok` before JSON and handle both HTTP errors and rejected network requests without leaving old alert items visible; show `Could not load alerts.` for either failure.
