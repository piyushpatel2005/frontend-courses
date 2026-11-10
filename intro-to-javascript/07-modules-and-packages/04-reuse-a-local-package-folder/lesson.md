---
title: Reuse a local package folder
slug: reuse-a-local-package-folder
order: 4
language: javascript
lesson_type: coding
runtime: esm
esm:
  entry: src/main.js
  html: index.html
  test_entry: src/main.test.js
summary: "Expose a local module through an index file and distinguish it from npm installation."
seo_title: "Reuse a local package folder | Introduction to JavaScript"
seo_description: "Expose a local module through an index file and distinguish it from npm installation."
seo_keywords: [javascript packages, package manifest, local re-exports]
hints:
  - "Check the relative path from the importing file, including its .js extension."
---

The shift card works. Another page could reuse its formatting without knowing which file inside `format/` holds the function. Make a small **local package-like folder** with a public entry file. This lesson starts with the completed shift card from the previous lesson.

`src/packages/shift-labels/index.js` can re-export a function from `../../format/shift.js`. Then `src/main.js` imports from `./packages/shift-labels/index.js`. The index file is a doorway to a module you already wrote; it does not download anything.

`package.json` is shown read-only to illustrate a package manifest's name and version. **This ESM preview does not run `npm install`, npm scripts, Node.js, or a terminal.** The manifest does not install or resolve dependencies here. In a separate local Node project, a package manager could use a manifest to manage dependencies; this lesson only uses relative files already in the File Explorer.

Open the new index file, add its re-export, then update the entry file. Run: the card should change from **Garden meetup at Library — 2 volunteers** to **Shift: Garden meetup at Library — 2 volunteers**. If you see an unresolved import, count the `..` segments from the `packages/shift-labels` folder back to `src`.

## Your Tasks

1. Re-export `formatShift` from `../../format/shift.js` in `src/packages/shift-labels/index.js`.
2. Change `src/main.js` to import `formatShift` from `./packages/shift-labels/index.js` and display `Shift: Garden meetup at Library — 2 volunteers`.

