---
title: Load a script when the page is ready
slug: defer-and-initialization
order: 3
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Place an external JavaScript file in the head with defer so it safely uses
  document.body.
seo_title: Load a script when the page is ready | Beginner JavaScript DOM
seo_description: Place an external JavaScript file in the head with defer so it safely
  uses document.body. Practice in a live JavaScript DOM preview.
seo_keywords:
- JavaScript DOM
- script defer
- external script
- DOM initialization
---

A script can run before the browser has reached the body. At that moment `document.body` can still be `null`; writing to it would fail. The workshop sign below uses a `<script>` in the **head**, but its `defer` attribute tells the browser to download the file while parsing HTML and execute it only after the document has been parsed. `defer` applies to this external `src` script, not to inline script text.

```html
<script src="script.js" defer></script>
```

Open `index.html`: the script tag appears before `<body>` in the file. Then open `script.js`. Its single assignment happens safely because the deferred script waits for the body. The CSS rule uses that assigned attribute to turn the waiting sign into a ready sign; no button click or timer is needed.

```javascript
document.body.dataset.ready = "yes";
```

Run the preview and look for **Workshop open**. Remove `defer` temporarily, run again, and notice why a head script cannot reliably touch the body immediately; restore `defer` before continuing. You will give the next page its own safe initialization.
