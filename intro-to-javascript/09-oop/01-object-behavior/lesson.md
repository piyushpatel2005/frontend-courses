---
title: "Demo: A notebook object"
slug: demo-object-behavior
order: 1
language: javascript
lesson_type: interactive
summary: Run a worked JavaScript example of a notebook object.
seo_title: "Demo: A notebook object | Introduction to JavaScript"
seo_description: Run and trace a worked JavaScript OOP example before the exercise.
seo_keywords: javascript, oop, object methods, this
---

# A notebook object

A field notebook tracks its own page count. Its `pages` property holds state; `addPages` changes that state with `this.pages`. Run it and compare the two lines.

```javascript run
const notebook = {
  label: "Field notes",
  pages: 4,
  addPages(count) { this.pages += count; }
};
console.log(`${notebook.label}: ${notebook.pages}`);
notebook.addPages(3);
console.log(`${notebook.label}: ${notebook.pages}`);
```

## What to notice

Try changing `3` to `1`. Next, create a **car** with its own data and method.
