---
title: Read and change link attributes
slug: reading-and-changing-attributes
order: 3
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Read a link destination, change its attributes, and remove an old marker.
seo_title: Read and change link attributes | DOM Manipulation with JavaScript
seo_description: Read a link destination, change its attributes, and remove an old
  marker.
seo_keywords:
- JavaScript DOM
- getAttribute, setAttribute, and removeAttribute
- browser preview
- demo
---

The trail-map link starts with `href="#"`. Change its destination, read back the result, and remove a marker that is no longer needed.

An **attribute** is a named value on an HTML element. `getAttribute(name)` reads its stored string, or returns `null` if it is absent. `setAttribute(name, value)` writes it; `removeAttribute(name)` removes it entirely.

```javascript
const trailLink = document.querySelector("#trail-link");
const previousDestination = trailLink.getAttribute("href");
trailLink.setAttribute(
  "href", "https://example.org/trails"
);
trailLink.setAttribute(
  "aria-label", "Explore the local trail map"
);
trailLink.removeAttribute("data-placeholder");
```

The completed script displays the old and new destinations below the link. `aria-label` supplies an accessible name, overriding the link text for assistive technology. Usually descriptive visible text is enough; when you add an accessible name, keep the visible wording in it so the names agree.

Attributes and JavaScript properties are related but not interchangeable. `link.getAttribute("href")` reads the stored address, while `link.href` can return an absolute address resolved by the browser. Later you will compare a checkbox's default attribute with its current property.

Run and read the status. The address uses `example.org` as an illustrative destination; this lesson does not need a working remote page. Change the path, Run to see the new status, then restore it. Do not follow the link.
