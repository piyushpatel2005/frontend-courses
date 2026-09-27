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

The starter already takes the live collection, the earlier static NodeList, and a fixed `originalStations` snapshot. Work from that snapshot, not from the changing live collection: appending matching nodes while iterating a live collection can keep extending the work. First label the originals ** — staffed**. Then add backups by removing that suffix from each original name (or by saving the names first). Make each backup with `document.createElement("li")`, set its `className` to `"station"` and `textContent` to the original name plus ** — backup**, then append it to `#stations`. These node-creation calls are the same ones you just saw in the pond demo; the later node-creation section will explore them in depth. Run: the live count is **4**, static count **2**, and backup rows do not say staffed.

## Your Tasks

1. Use `originalStations` to label the two original stations `— staffed`.
2. Use `originalStations` to add exactly one `li.station` backup for each, named with the original station text plus `— backup` (without `staffed`).
3. Show the final `liveStations.length` in `#live-count` after appending.
4. Show the earlier `initialStations.length` in `#static-count`.
