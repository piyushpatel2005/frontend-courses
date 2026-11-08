---
title: "Select All Matches"
slug: select-all-matches
order: 1
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Find all matching stalls and use a callback to label each one.
seo_title: Find every match with querySelectorAll | Beginner JavaScript DOM
seo_description: Find all matching stalls and use a callback to label each one.
seo_keywords:
- JavaScript DOM
- querySelectorAll
- NodeList
- forEach
---

The market board has three stalls. `querySelector` would find only the first one; `querySelectorAll(".stall")` collects every matching element in document order.

Its result is a NodeList, a list of nodes rather than one element. A NodeList is not an Array: it has `forEach`, but not Array methods such as `map` or `filter`. Use `Array.from(stalls)` first when you need those methods. Use `forEach` to work on each match:

```javascript
const stalls = document.querySelectorAll(".stall");
stalls.forEach((stall) => {
  stall.textContent += " — open";
});
```

`(stall) => { ... }` is an arrow function. Here it is a **callback**: a function you give to `forEach`, which calls it once for each element. On each call, the `stall` parameter receives the next element. The name is yours to choose; it is not another selector. `+=` reads the existing text and adds the suffix.

Run the preview and check all three labels. Add a fourth `.stall` paragraph in `index.html`, then Run again. It receives the label too. Remove your extra paragraph afterward.

This NodeList is **static**: its membership records matches at query time. It still refers to real elements, so changing their text changes the page. Elements added after the query do not join that earlier list. A query with no matches returns an empty NodeList; `forEach` then calls the callback zero times. Later in this section you will compare this with a live collection.
