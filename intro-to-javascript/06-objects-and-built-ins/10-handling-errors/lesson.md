---
title: Throwing and catching errors
slug: handling-errors
order: 10
language: javascript
lesson_type: coding
summary: Validate a function input and handle malformed JSON at the boundary.
seo_title: Throwing and catching errors | Introduction to JavaScript
seo_description: Validate a function input and handle malformed JSON at the boundary.
seo_keywords: [javascript, handling errors, beginner programming]
hints:
  - Complete one numbered change and inspect its supplied checkpoint before moving on.
---

# Throwing and catching errors

The JSON lesson supplied valid text. A real input may not parse. A thrown error interrupts the current operation and travels back through callers until a matching `catch` handles it. Without a handler, the run stops.

```javascript run
function readQuantity(text) {
  const value = Number(text);
  if (!Number.isInteger(value) || value <= 0) {
    throw new Error("Quantity must be a positive integer");
  }
  return value;
}
try {
  console.log(readQuantity("2.5"));
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Quantity check finished");
}
```

`new Error(message)` creates an error object. `throw` sends it out of the normal return path. The `catch` parameter receives that object, and `.message` reads its explanation. `finally` runs after success or failure and is useful for cleanup; avoid returning from `finally`, because that can replace a result or hide an error.

Catch an error where you can make a useful decision. The parsing helper below deliberately returns `null` for malformed JSON; a valid JSON `null` has the same result, so this contract cannot distinguish those two cases. It is a small fallback policy, not general data validation. Parsing success alone does not prove an object's fields are correct.

The two helper probes are guarded separately. Finish either helper without needing the other one.

Edit `script.js`. Leave the supplied probes in place; Run after each change and Submit to check the ordered tasks.

## Your Tasks

1. Complete `readCapacity(value)` to return a nonnegative integer or throw `Error("Invalid capacity")` otherwise.
2. Complete `parseOrNull(text)` with `try`/`catch`, returning parsed JSON on success and `null` after a parsing error.
