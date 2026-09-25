---
title: Playlist Lookup
slug: playlist-lookup
order: 5
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

# Playlist Lookup

The walkthrough used badges and tour cities. Now build a separate playlist tool. Keep durations in a Map so a title can find its duration, and keep artists in a Set so repeats disappear.

## Your Tasks

1. Create a `songDurations` Map with the key-value entries `"Orbit" → 203` and `"Glow" → 187`.
2. Create a `featuredArtists` Set containing `"Nova"`, `"Kai"`, and a second `"Nova"` entry.
3. Define `playlistSummary(durations, artists)` that returns the duration for `"Orbit"`, a pipe, and the number of unique artists.
4. Print this exact double-quoted text with `console.log()`: `"203 | 2"`.
