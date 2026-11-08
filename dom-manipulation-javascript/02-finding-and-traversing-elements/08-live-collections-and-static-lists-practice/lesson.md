---
title: "Live Collections And Static Lists Practice"
slug: live-collections-and-static-lists-practice
order: 8
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Use a snapshot to add backup stations and compare live and static counts.
seo_title: 'Exercise: live collections and static lists | Beginner JavaScript DOM'
seo_description: Use a snapshot to add backup stations and compare live and static
  counts.
seo_keywords:
- HTMLCollection iteration exercise
- static NodeList
- Array.from HTMLCollection
- DOM list mutation
---

The makerspace starts with Printing and Sewing stations. Label those originals, then add a backup for each. Backups must not become another round of originals.

The starter supplies `liveStations`, `initialStations`, and `originalStations`. The last is an array snapshot made before any new rows are added. Use it for both loops; iterating a live collection while adding matching nodes can keep extending the work.

Edit `script.js`. To build a backup, use the node-creation calls from the pond demo: create an `li`, assign `className = "station"`, set its text, then append it to `#stations`. Keep the original name without the staffed suffix. You can save names before editing or use `.replace(" — staffed", "")` to remove that suffix from the string. `replace` returns a new string; it does not change the original element.

Run after each task. First the two originals say staffed. Next there are four rows, with two unstaffed backups. Finally the counters show live membership and the earlier snapshot separately. Submit to check your progress.

## Your Tasks

1. Use `originalStations` to append ` — staffed` to each original station's text.
2. Use `originalStations` to add exactly one `li.station` backup for each, named with the original station text plus ` — backup` and no staffed suffix.
3. Display `liveStations.length` in `#live-count` after your list updates.
4. Display `initialStations.length` in `#static-count`.
