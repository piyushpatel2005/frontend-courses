---
title: Embedding Video
slug: video
order: 1
language: html
lesson_type: informational
validationRules: []
hints: []
---

# Embedding Video

The `<video>` element lets you embed video content directly in a page without needing a plugin like Flash.

## Basic syntax

```html
<video src="movie.mp4" controls>
    Your browser does not support the video tag.
</video>
```

The text between the tags is **fallback content** shown in browsers that don't support `<video>`.

## Using `<source>` for multiple formats

Different browsers support different video formats. Provide multiple `<source>` elements and the browser picks the first one it can play:

```html
<video controls width="640" height="360">
    <source src="movie.webm" type="video/webm" />
    <source src="movie.mp4"  type="video/mp4" />
    Your browser does not support the video tag.
</video>
```

**Recommended formats:**
- `.mp4` (H.264) — widest browser support
- `.webm` — open format, good compression

## Common attributes

| Attribute | Description |
|-----------|-------------|
| `controls` | Shows play/pause, volume, fullscreen controls |
| `autoplay` | Starts playing automatically (should be paired with `muted`) |
| `muted` | Starts muted — required for autoplay in most browsers |
| `loop` | Repeats the video when it ends |
| `poster` | Image shown before the video plays |
| `width` / `height` | Sets dimensions in pixels |
| `preload` | `auto`, `metadata`, or `none` — hints about buffering |

## Autoplay with mute

Most browsers block autoplaying videos with audio to prevent annoyance. To autoplay, always mute:

```html
<video src="background.mp4" autoplay muted loop></video>
```

This pattern is common for full-screen background videos on landing pages.

## Poster image

The `poster` attribute shows an image before the video loads or starts playing:

```html
<video controls poster="thumbnail.jpg">
    <source src="movie.mp4" type="video/mp4" />
</video>
```

## Controlling playback with `controlslist`

```html
<!-- Hides the download button from the controls bar -->
<video controls controlslist="nodownload">
    <source src="movie.mp4" type="video/mp4" />
</video>
```

## Accessibility

Provide captions using `<track>`:

```html
<video controls>
    <source src="movie.mp4" type="video/mp4" />
    <track kind="subtitles" src="subtitles-en.vtt" srclang="en" label="English" />
</video>
```

## Summary

- Use `<video controls>` for playable video
- Provide multiple `<source>` formats for compatibility
- Always pair `autoplay` with `muted`
- Add a `poster` for better user experience
- Use `<track>` for captions to improve accessibility
