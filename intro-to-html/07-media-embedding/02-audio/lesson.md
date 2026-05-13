---
title: Embedding Audio
slug: audio
order: 2
language: html
lesson_type: informational
validationRules: []
hints: []
---

# Embedding Audio

The `<audio>` element embeds sound content — music, podcasts, sound effects — without requiring any plugin.

## Basic syntax

```html
<audio src="song.mp3" controls>
    Your browser does not support the audio element.
</audio>
```

## Multiple formats with `<source>`

Provide multiple formats for cross-browser compatibility:

```html
<audio controls>
    <source src="song.ogg" type="audio/ogg" />
    <source src="song.mp3" type="audio/mpeg" />
    Your browser does not support the audio element.
</audio>
```

**Recommended formats:**
- `.mp3` (MPEG Audio) — universally supported
- `.ogg` (Vorbis) — open format, good quality
- `.wav` — uncompressed, large file size, good for short clips

## Common attributes

| Attribute | Description |
|-----------|-------------|
| `controls` | Shows play/pause, volume, seek controls |
| `autoplay` | Starts playing immediately (often blocked by browsers) |
| `muted` | Starts muted |
| `loop` | Repeats the audio |
| `preload` | `auto`, `metadata`, or `none` |

## Differences from `<video>`

- No `poster` attribute (audio has no visual)
- No `width`/`height` (the control bar size is determined by the browser)
- Otherwise the API is nearly identical

## Styling the audio player

The default `<audio controls>` player looks different in every browser. You can hide native controls and build a custom UI with JavaScript:

```html
<audio id="player" src="song.mp3"></audio>
<button onclick="document.getElementById('player').play()">Play</button>
<button onclick="document.getElementById('player').pause()">Pause</button>
```

## Accessibility

Always provide the `controls` attribute or a custom playback UI — hidden audio that auto-plays is confusing and disorienting for screen reader users.

If the audio is a podcast or speech recording, consider linking a text transcript alongside it.

## Summary

- Use `<audio controls>` for inline audio
- Provide `.mp3` and `.ogg` sources for best coverage
- Avoid `autoplay` without user interaction
- Link a transcript for spoken-word audio
