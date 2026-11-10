---
title: Build a shift card
slug: build-a-shift-card
order: 3
language: javascript
lesson_type: coding
runtime: esm
esm:
  entry: src/main.js
  html: index.html
  test_entry: src/main.test.js
summary: "Organize shift data and formatting across local modules."
seo_title: "Build a shift card | Introduction to JavaScript"
seo_description: "Organize shift data and formatting across local modules."
seo_keywords: [javascript project, file explorer, relative module paths]
hints:
  - "Check the relative path from the importing file, including its .js extension."
---

The volunteer desk needs a small shift card. Keep data and presentation separate: the shift record belongs in `src/data/shifts.js`; the wording belongs in `src/format/shift.js`. You can browse both folders in the File Explorer.

`../data/shifts.js` climbs from the `format` folder to `src`, then enters `data`. The entry file can import from `./format/shift.js`. Neither path is a website or an installed package. The starter already renders the first shift; you will add the location without duplicating the record in the entry file.

Run before editing to see **Garden meetup — 2 volunteers**. Then add the location and run again. The finished card reads **Garden meetup at Library — 2 volunteers**. If the card disappears, check paths from the file doing the importing, not from `index.html`.

## Your Tasks

1. Add `location: "Library"` to the first shift object in `src/data/shifts.js`.
2. In `src/format/shift.js`, update `formatShift(shift)` to include `at Library` between the label and the volunteer count, using the shift's `location` property.

