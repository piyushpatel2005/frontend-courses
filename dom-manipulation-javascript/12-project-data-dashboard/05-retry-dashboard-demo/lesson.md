---
title: Retry requests without stale results
slug: retry-dashboard-demo
order: 5
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Inspect request cancellation and retry behavior in a trail search dashboard.
seo_title: AbortController dashboard retry demo
seo_description: See an offline API dashboard retry failed requests and protect its list from late responses with AbortController.
seo_keywords:
  - AbortController demo
  - stale response
  - retry UI
---

# Retry requests without stale results

Search can create overlapping requests. In the trail demo, set the fixture delay high, submit one term, then change the term and submit again. Only the latest request should be allowed to paint the list. Press Retry after deliberately setting `failNext: true` to see the failed-request path too.

The code uses two complementary guards. `AbortController` cancels a prior request when the mock supports a signal; `latestRequest` also checks identity after `response.json()`, so even a response that arrives late cannot overwrite newer results. The mock delays and failures are controllable in `window.dashboardFixture`, but it never uses the network.

```javascript
controller?.abort();
controller = new AbortController();
const request = ++latestRequest;
const response = await dashboardFetch(requestURL(), { signal: controller.signal });
if (!response.ok) throw new Error(`HTTP ${response.status}`);
const data = await response.json();
if (request !== latestRequest) return;
```

An abort is expected during rapid searching: ignore its `AbortError` rather than displaying a failure. Ordinary errors should announce the problem and reveal Retry; the button reruns the current query. Real fetch uses the same `{ signal }` option, subject to the remote API's CORS policy. Inspect that control flow before finishing your event dashboard.
