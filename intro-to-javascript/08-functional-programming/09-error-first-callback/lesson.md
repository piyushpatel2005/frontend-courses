---
title: "Error First Callback"
slug: error-first-callback
order: 9
language: javascript
lesson_type: interactive
summary: "A delivery route lookup reports either a destination or a failure. The callback has two parameters, `(error, result)`, whose positions form a contract: success supplies `null` then a result; failure supplies an `Error` then `null`."
seo_title: "Error-First Callback Demo | Introduction to JavaScript"
seo_description: "A delivery route lookup reports either a destination or a failure. The callback has two parameters, `(error, result)`, whose positions form a contract: success supplies `null` then a result; failure supplies an `Error` then `null`."
seo_keywords: [javascript callback, error first callback, result handling]
---


A delivery route lookup reports either a destination or a failure. The callback has two parameters, `(error, result)`, whose positions form a contract: success supplies `null` then a result; failure supplies an `Error` then `null`.

`new Error("Unknown route")` creates an error object; it does not throw it. The callback reads its `.message`. After calling back on failure, `return` exits the lookup so it cannot call back a second time on the success path. This example is synchronous. A callback does not, by itself, imply a delay.

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
