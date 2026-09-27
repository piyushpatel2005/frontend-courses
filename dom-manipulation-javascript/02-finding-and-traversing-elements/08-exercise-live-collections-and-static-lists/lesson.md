---
title: 'Exercise: safely expand a live collection'
slug: exercise-live-collections-and-static-lists
order: 8
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Snapshot a live collection before adding matching elements and compare its final size to an earlier static NodeList.
seo_title: 'Exercise: live collections and static lists | Beginner JavaScript DOM'
seo_description: Practice safe HTMLCollection iteration, add matching elements, and contrast live and static DOM selection counts.
seo_keywords:
- HTMLCollection iteration exercise
- static NodeList
- Array.from HTMLCollection
- DOM list mutation
---

At the pond, a live HTMLCollection gained a new sighting while a NodeList captured earlier stayed the same size. Now a makerspace has two station cards. Each existing station needs a **— staffed** label and a matching **— backup** station. The new backup stations must not be processed during this pass.

A separate pattern for a gallery would freeze its current paintings before adding anything:

```javascript
const livePaintings = document.getElementsByClassName("painting");
const firstPaintings = document.querySelectorAll(".painting");
const snapshot = Array.from(livePaintings);
snapshot.forEach((painting) => {
  // Process only paintings that existed when snapshot was made.
});
```

In `script.js`, take both collections before changing the page. Loop over `Array.from(liveStations)` (or another fixed snapshot), not the live collection itself: appending matching nodes while iterating a changing collection can keep extending the work. For each of the two original `li.station` elements, append ** — staffed** to its text, then append a new `li.station` with the original station name followed by ** — backup** to `#stations`. Finally display the live collection's length in `#live-count` and the *earlier* static NodeList's length in `#static-count`. Run: the live count is **4**, static count **2**, and backup rows do not say staffed.

## Your Tasks

1. Process only the two original stations with a fixed snapshot: label each `— staffed` and add exactly one `li.station` backup for each, named with the original station text plus `— backup`.
2. Show the final live HTMLCollection length in `#live-count` after appending, and the earlier static NodeList length in `#static-count`.
