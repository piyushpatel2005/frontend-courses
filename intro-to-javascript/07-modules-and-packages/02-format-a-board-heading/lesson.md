---
title: Format a board heading
slug: format-a-board-heading
order: 2
language: javascript
lesson_type: coding
runtime: esm
esm:
  entry: src/main.js
  html: index.html
  test_entry: src/main.test.js
summary: "Use a default function export alongside a named value."
seo_title: "Format a board heading | Introduction to JavaScript"
seo_description: "Use a default function export alongside a named value."
seo_keywords: [javascript default exports, named imports, module functions]
hints:
  - "Check the relative path from the importing file, including its .js extension."
---

The board has a label; now it needs a consistent heading. This lesson starts from the finished two-file board. Add a formatter in the label module and use it without changing the named `eventLabel` import.

A file can have many named exports but one default export. Their import shapes differ:

```javascript
import formatHeading, { eventLabel } from "./labels.js";
```

`formatHeading` has **no braces** because it is the default export. The named value keeps its braces. In `src/labels.js`, make the default function accept a label and return `Upcoming: ${label}`. Then use it in `src/main.js`.

Run the page: it should change from **Next: Garden meetup** to **Upcoming: Garden meetup**. The wording now lives in the reusable file. If the page goes blank, check that `default` appears on the function export and the import has no braces around the function name.

## Your Tasks

1. Add a default-exported `formatHeading(label)` function in `src/labels.js` that returns `Upcoming: ${label}`.
2. Import that default function in `src/main.js` and use it to set the `#result` text.

