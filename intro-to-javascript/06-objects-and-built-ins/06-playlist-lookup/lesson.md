---
title: Playlist Lookup
slug: playlist-lookup
order: 6
language: javascript
lesson_type: coding
summary: Build a Map lookup and Set roster for a small playlist.
seo_title: Playlist Lookup with Map and Set | Introduction to JavaScript
seo_description: Practice JavaScript Map key lookup and Set uniqueness in a playlist challenge.
seo_keywords: javascript map, javascript set, playlist lookup, coding challenge
hints:
  - "Create a Map with nested [key, value] pairs."
  - "A Set automatically ignores a repeated value."
---

# Playlist lookup

Store each song's duration under its title, then count the distinct artists on the playlist. A repeated artist should not increase that count.

```javascript run
const readings = new Map([["Poem", 4]]);
const genres = new Set(["spoken", "spoken", "music"]);
console.log(readings.get("Poem"), genres.size);
```

The Map needs pairs; the Set needs individual values. Use `durations.get("Orbit")` inside your helper to read the Map passed to it, rather than reading the outer `songDurations` variable.

Edit the empty collections and helper in `script.js`. The supplied `CHECK` lines show each result, including a second playlist passed to the helper. Run as you go; Submit checks the tasks in order.

## Your Tasks

1. Fill `songDurations` with the Map entries `"Orbit" → 203` and `"Glow" → 187`.
2. Fill `featuredArtists` by passing `"Nova"`, `"Kai"`, and a second `"Nova"` to a Set.
3. Complete `playlistSummary(durations, artists)` to return the duration for `"Orbit"`, `" | "`, and the number of distinct artists.
4. Log `playlistSummary(songDurations, featuredArtists)` on its own line. It should read `203 | 2`, without quotation marks.
