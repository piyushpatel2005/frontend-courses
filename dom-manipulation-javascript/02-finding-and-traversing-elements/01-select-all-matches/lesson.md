---
title: Find every match with querySelectorAll
slug: select-all-matches
order: 1
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Use querySelectorAll and forEach to update every matching element in a static
  list.
seo_title: Find every match with querySelectorAll | Beginner JavaScript DOM
seo_description: Use querySelectorAll and forEach to update every matching element
  in a static list. Practice in a live JavaScript DOM preview.
seo_keywords:
- JavaScript DOM
- querySelectorAll
- NodeList
- forEach
---

One `querySelector` found the first tip. A neighborhood market board has three stalls, and all three need an open label. `querySelectorAll(".stall")` returns a **static NodeList** of matches in document order. It can hold zero, one, or many elements. `forEach` visits each element and gives it a temporary name (`stall`) inside the callback.

```javascript
const stalls = document.querySelectorAll(".stall");
stalls.forEach((stall) => {
  stall.textContent += " — open";
});
```

Run the preview: the suffix appears on each stall, not only the first. Read the callback aloud: “for each stall, append the open label.” An empty list simply runs the callback zero times; no error occurs. Try adding a fourth `.stall` paragraph in HTML and running again, then remove it. Because the NodeList is static, a new element added *after* the query would require a new query to be included. The next exercise gives you a different list and label.
