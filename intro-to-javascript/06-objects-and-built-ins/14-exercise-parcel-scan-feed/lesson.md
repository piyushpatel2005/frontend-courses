---
title: "Exercise: Parcel Scan Feed"
slug: exercise-parcel-scan-feed
order: 14
language: javascript
lesson_type: coding
summary: Parse parcel scan JSON and summarize zones in a Map and unique tracking IDs in a Set.
seo_title: Parcel Scan JSON Map Set Exercise | Introduction to JavaScript
seo_description: Transform a JSON parcel feed into destination counts and a deduplicated tracking roster with JavaScript Map and Set.
seo_keywords: javascript json exercise, map counts, set unique ids, data processing
hints:
  - "Parse jsonText once; then iterate each scan in the resulting array."
  - "Use (byZone.get(scan.zone) ?? 0) + 1 to increment counts."
---

# Exercise: Parcel Scan Feed

The workshop demo parsed JSON, counted visits by topic, and tracked unique email addresses. Now process a shipping desk's parcel scans. Multiple scans of one parcel count as multiple scans but only one unique tracking ID. Work in `script.js`; no network or page markup is needed.

For example, a **library check-in feed** `'[{"shelf":"A","card":"C1"},{"shelf":"A","card":"C1"}]'` would produce a Map with `A → 2` visits and a Set containing one card. Your task instead uses `zone` and `tracking` fields from parcel scans.

## Worked example

A small visitor feed shows JSON parsing, counting by key, and tracking unique IDs:

```javascript
const visits = JSON.parse('[{"room":"East","badge":"B1"},{"room":"East","badge":"B1"}]');
const byRoom = new Map();
const badges = new Set();
for (const visit of visits) {
  byRoom.set(visit.room, (byRoom.get(visit.room) ?? 0) + 1);
  badges.add(visit.badge);
}
console.log(byRoom.get("East"), badges.size); // 2 1
```

## Your Tasks

1. Write `parseScans(jsonText)` to parse JSON scan records into an array.
2. Write `countByZone(scans)` to return a `Map` counting every scan by zone.
3. Write `uniqueIds(scans)` to return a `Set` of tracking IDs.
4. Write `summarizeScans(jsonText)` to use those helpers and return `{ byZone, uniqueTracking }`.
5. Make `summarizeScans("[]")` return an empty Map and Set.
6. Log `North: 2 | South: 2 | unique: 3` from `summarizeScans(scanFeed)` on its own Console line.

## Objects and built-ins complete

You can now turn structured input into useful lookups and summaries. Take the section quiz, then work precisely with text.
