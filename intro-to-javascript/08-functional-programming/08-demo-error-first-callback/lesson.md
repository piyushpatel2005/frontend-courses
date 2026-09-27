---
title: "Demo: Handle an Error-First Callback"
slug: demo-error-first-callback
order: 8
language: javascript
lesson_type: interactive
summary: Run both success and failure branches of a synchronous error-first callback.
seo_title: "Error-First Callback Demo | Introduction to JavaScript"
seo_description: Trace JavaScript callback(error, result) calls when a route lookup succeeds or fails.
seo_keywords: [javascript callback, error first callback, result handling]
---

# Look up a delivery route

A route lookup passes two values to its callback: `(error, result)`. Exactly one is meaningful on each path. This example is synchronous; later APIs can also invoke callbacks after a delay.

```javascript run
function lookupRoute(code, callback) {
  const routes = { R1: "Market", R2: "Depot" };
  if (!routes[code]) {
    callback(new Error("Unknown route"), null);
    return;
  }
  callback(null, routes[code]);
}

function showRoute(error, destination) {
  console.log(error ? error.message : `Deliver to ${destination}`);
}
lookupRoute("R1", showRoute);
lookupRoute("R9", showRoute);
```

Run both calls and watch which callback argument is usable each time. Next, use the same error/result contract for a seat reservation with its own validation rules.
