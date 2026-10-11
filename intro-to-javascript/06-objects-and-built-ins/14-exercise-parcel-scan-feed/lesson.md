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

# Parcel scan feed

A shipping desk records parcel scans as JSON. A parcel scanned twice contributes two scans to its zone, but only one distinct tracking ID. Build a report that keeps those counts separate.

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

Your feed uses `zone` and `tracking` instead of `room` and `badge`. It is valid JSON containing an array of records with those fields. You do not need to fetch data or handle malformed JSON in this exercise.

Start each collection helper with an empty Map or Set. Then an empty array needs no special branch: the loop runs zero times and the helper returns the empty collection. The report's properties are named `byZone` and `uniqueTracking`.

Edit `script.js`. The first three supplied probes use independent samples. You can finish parsing, counting, or deduplication before the summary helper works. Leave the probes in place. Run to inspect their output, then Submit.

## Your Tasks

1. Complete `parseScans(jsonText)` to parse the JSON text into an array of scan records.
2. Complete `countByZone(scans)` to return a Map counting every scan by zone; return an empty Map for no scans.
3. Complete `uniqueIds(scans)` to return a Set of tracking IDs; return an empty Set for no scans.
4. Complete `summarizeScans(jsonText)` to use the helpers and return `{ byZone, uniqueTracking }`, including for `"[]"`.
5. Log `North: 2 | South: 2 | unique: 3` from `summarizeScans(scanFeed)` on its own line.

You have now turned structured text into a lookup and a distinct-ID count. Take the section quiz before moving on to strings.
