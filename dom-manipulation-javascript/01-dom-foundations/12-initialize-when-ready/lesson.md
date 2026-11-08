---
title: "Initialize When Ready"
slug: initialize-when-ready
order: 12
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Initialize a DOM page whether its HTML is still parsing or already available.
seo_title: DOMContentLoaded and document.readyState | Vanilla JavaScript
seo_description: Connect a safe initializer with DOMContentLoaded, distinguish window from document, and handle scripts that arrive after parsing.
seo_keywords:
- DOMContentLoaded
- document.readyState
- window and document
- vanilla JavaScript initialization
---

A deferred file runs after parsing. Code can also arrive later, for example when another script loads it. If you always wait for `DOMContentLoaded`, late-arriving code can wait forever: that event has already happened.

## The document and its window

`document` is the current page's DOM. `window` is the browser's global object for that page; `window.document` refers to the same document. Browser services such as `setTimeout` also belong to this environment. Neither object is the HTML source file saved on disk. Changing the tree changes the live page, not that file.

The course preview has its own window and document. The outer course page has different ones. Stay in the preview when inspecting these examples; changing the course page is not part of the task.

## Initialize now, or wait once

`document.readyState` is `"loading"` while the browser parses the HTML. It becomes `"interactive"` after parsing and `"complete"` after the page's loading work finishes. For selecting elements, parsing is the boundary we need; images do not have to finish downloading.

`DOMContentLoaded` is an event on the document. It fires after parsing and deferred scripts have run. `addEventListener` registers a callback: pass a function value, not a call with parentheses. The browser supplies the event later and invokes the callback. `"DOMContentLoaded"` is the event's exact, case-sensitive name. `{ once: true }` removes this listener after its first call.

A notice initializer can choose between those two paths:

```javascript
function startNotice(doc, initialize) {
  if (doc.readyState === "loading") {
    doc.addEventListener("DOMContentLoaded", initialize, {
      once: true
    });
  } else {
    initialize();
  }
}
```

`initialize` is a parameter holding a function. In the listener registration we pass it for later. In the other branch `initialize()` calls it now. Checking and registering happen in the same synchronous turn, so the event cannot slip between those two statements.

## Connect the reading-room page

The HTML and CSS are supplied. Work in `script.js`. `showReady()` owns the visible update; `startPage(doc, initialize)` owns the timing. The last line connects them to the real preview document. Leave that call in place.

## Your Tasks

1. Complete `showReady()` so it sets `#startup-status` to `Reading room ready.` as plain text.
2. Complete `startPage(doc, initialize)`: when `doc.readyState` is `"loading"`, register `initialize` once for `DOMContentLoaded`; otherwise call it immediately. Do not call it during registration or register a listener after parsing.

After the first change, Submit can call your display function even before the connection works. After the second, Run should show the ready message automatically. The checks also use a native EventTarget fixture to exercise an unfinished parse and an already-parsed document separately. That fixture checks timing decisions; the preview itself uses the real document.

If you control a normal external script tag, `defer` remains the simpler default. This helper is useful when you cannot assume when your code begins.
