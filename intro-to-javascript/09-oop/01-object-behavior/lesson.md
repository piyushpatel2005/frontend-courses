---
title: "Object Behavior"
slug: object-behavior
order: 1
language: javascript
lesson_type: interactive
summary: "The previous section passed data into functions. An object can instead keep related state and operations together. This notebook has a page count and an `addPages` method that changes it."
seo_title: "A notebook object | Introduction to JavaScript"
seo_description: "The previous section passed data into functions. An object can instead keep related state and operations together. This notebook has a page count and an `addPages` method that changes it."
seo_keywords: javascript, oop, object methods, this
---

# A notebook object

The previous section passed data into functions. An object can instead keep related state and operations together. This notebook has a page count and an `addPages` method that changes it.

In `notebook.addPages(3)`, `notebook` is the receiver: the object before the dot. Inside this regular method, `this` refers to that receiver, so `this.pages` reads and updates its page count. The parameter `count` receives 3. Defining the method does not run it; the call does.

Keep the receiver when calling a method. Taking the method out into a variable and calling it on its own does not preserve the notebook as `this`. An arrow function also does not get its own `this` from a method call; use the method syntax shown here.

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

With an argument of 1, the second line would show 5 pages. Next, create a **car** with its own data and method.
