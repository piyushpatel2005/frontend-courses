---
title: Compare a live HTMLCollection with a static NodeList
slug: live-collections-and-static-lists
order: 7
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Watch a live HTMLCollection update after a new match is added while an earlier NodeList stays unchanged.
seo_title: Live HTMLCollection vs static NodeList | Beginner JavaScript DOM
seo_description: Compare getElementsByClassName with querySelectorAll and safely iterate a snapshot before adding DOM elements.
seo_keywords:
- HTMLCollection live
- NodeList static
- getElementsByClassName
- safe DOM iteration
---

The market board used `querySelectorAll` to capture a **static NodeList**. At a pond survey, `getElementsByClassName("sighting")` instead returns a **live HTMLCollection**: its membership changes as matching elements enter or leave the document. These two lists are taken before a new sighting is added.

```javascript
const live = document.getElementsByClassName("sighting");
const staticList = document.querySelectorAll(".sighting");
const original = Array.from(live);
original.forEach((entry) => {
  entry.textContent += " — checked";
});
const next = document.createElement("li");
next.className = "sighting";
next.textContent = "Heron — new";
document.getElementById("sightings").appendChild(next);
```

Run: the original two sightings gain **— checked**; the new heron stays **— new**. The live collection now contains three, but the earlier static NodeList still contains two. This is a difference in *membership*, not whether edits to existing nodes are visible: both lists still refer to the original elements. We convert the live collection to an array **before** iterating so adding matching nodes cannot extend the loop unexpectedly. Unlike a NodeList, an HTMLCollection does not have `forEach` directly. Try changing `next.className` to `"other"` and run again; the live count then stays two. Restore it for the next exercise.
