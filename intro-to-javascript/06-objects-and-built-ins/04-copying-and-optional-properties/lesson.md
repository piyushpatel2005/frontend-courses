---
title: "Copying And Optional Properties"
slug: copying-and-optional-properties
order: 4
language: javascript
lesson_type: coding
summary: Copy an object and read optional nested data without treating zero as missing.
seo_title: Object copies and optional properties | Introduction to JavaScript
seo_description: Copy an object and read optional nested data without treating zero as missing.
seo_keywords: [javascript, copying and optional properties, beginner programming]
hints:
  - Complete one numbered change and inspect its supplied checkpoint before moving on.
---


You can read and update a record. Before editing one for a new purpose, decide whether the old record should change too. Assignment shares the same object; object spread creates a new outer object.

```javascript run
const original = { title: "Atlas", details: { shelf: "A2" } };
const revised = { ...original, title: "Field Atlas" };
console.log(original.title, revised.title);
console.log(original.details === revised.details);
console.log(original.publisher?.city ?? "City unknown");
```

In `{ ...original, title: "Field Atlas" }`, spread copies the original's own enumerable properties, then the later `title` replaces that property in the new object. The old title stays unchanged. This is a **shallow** copy: the nested `details` object is still shared. To change its shelf independently, also copy it, for example `{ ...original, details: { ...original.details, shelf: "B3" } }`.

`record.contact?.city` stops and produces `undefined` when `contact` is `null` or `undefined`. It does not create the missing contact, validate its shape, or hide other errors. Follow it with `??` when you need a display default. `?.` also supports optional calls, such as `record.notify?.()`; it skips a missing function, but a present non-function still throws.

Your source record has a real zero count and no contact. Preserve that zero while supplying a missing-city label.

Edit `script.js`. Leave the supplied probes in place; Run after each change and Submit to check the ordered tasks.

## Your Tasks

1. Set `revised` to `{ ...source, label: "Evening" }`, leaving the source label unchanged.
2. Set `city` using `source.contact?.city ?? "Unknown"`.
3. Set `count` using `source.remaining ?? 5` so zero stays zero.
