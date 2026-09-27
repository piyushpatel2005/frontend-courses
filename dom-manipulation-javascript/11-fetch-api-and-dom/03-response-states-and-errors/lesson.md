---
title: 'Handle loading, empty, and failed responses'
slug: response-states-and-errors
order: 3
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Distinguish HTTP failures, network rejections, and empty data in a browser interface.
seo_title: 'Fetch response.ok, loading and error states | Beginner'
seo_description: Distinguish HTTP failures, network rejections, and empty data in a browser interface.
seo_keywords: response.ok, fetch error handling, empty state
---

# Handle loading, empty, and failed responses

A library desk must report both successful and unsuccessful lookups. The preview is intentionally powered by an **explicit in-page mock fetch**, so it works offline and never claims to show live data.

A library lookup can fail in two different ways. A server may respond with HTTP 503; **`fetch` still resolves** to a `Response`, so inspect `response.ok` before reading JSON. A disconnected network or CORS denial instead rejects the Promise and goes to `catch`. Both need a useful message rather than an unhandled error.

```javascript
async function readRecord() {
  status.textContent = "Loading…";
  try {
    const response = await mockFetch("/api/record");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    status.textContent = data.length ? "Ready." : "No records found.";
  } catch (error) {
    status.textContent = `Could not load: ${error.message}`;
  }
}
```

The preview uses four selectable **offline mock scenarios**: records, empty array, HTTP failure, and a simulated network rejection. It does not report live service availability. Run each selection. Loading appears before the Promise settles; empty is a successful result, not an error. The catch message avoids pretending an HTTP response existed when the network never delivered one.

Notice that JSON parsing happens *after* the `ok` check. An error body need not have the same shape as a successful array. The next exercise asks you to give a different noticeboard these same four honest states.

## Learn more

MDN's [`Response.ok`](https://developer.mozilla.org/en-US/docs/Web/API/Response/ok) documents the success-status check.
