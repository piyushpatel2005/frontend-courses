---
title: Embedding Video
slug: video
order: 1
language: html
summary: Add playable, captioned video with sources, controls, autoplay settings, and poster images.
seo_title: Embed Video with HTML
seo_description: Learn to embed accessible HTML video with controls, source formats, captions, and poster images.
seo_keywords:
  - HTML video
  - video element
  - video captions
  - HTML media
lesson_type: informational
validationRules: []
hints: []
---

# Embedding Video

## Mission

The Riverlight Community Hall wants a short welcome clip on its events page. Add a player that people can control, a still image while it loads, and captions for visitors who cannot hear the soundtrack.

## What you'll build

An accessible video player with multiple source formats, a poster image, visible controls, and a subtitle track for visitors who cannot hear the soundtrack.

The Riverlight Community Hall wants a short welcome clip on its events page. Add a player that people can control, a still image while it loads, and captions for visitors who cannot hear the soundtrack.

## Target

A visitor sees a poster image and playback controls; when the clip is ready, they can play it and turn captions on.

## One idea: the browser chooses the first playable source

`<video>` places a video on the page. Put several `<source>` elements inside it when you can provide multiple formats; the browser uses the first one it supports.

```html
<video controls width="640" height="360" poster="hall-welcome.jpg">
    <source src="hall-welcome.webm" type="video/webm" />
    <source src="hall-welcome.mp4" type="video/mp4" />
    <track kind="subtitles" src="hall-welcome-en.vtt" srclang="en" label="English" />
    Your browser does not support the video tag.
</video>
```

`controls` provides a familiar play, pause, volume, and fullscreen interface. The text inside the element is fallback content. An `.mp4` source has broad support; `.webm` is a useful additional format.

## Checkpoint

In a page with these files available, the poster should appear before playback and the controls should be visible. If the player shows an empty area, check each source filename and its `type` first.

## Playback choices

| Attribute | Visible or behavioral result |
|---|---|
| `controls` | Displays the built-in player controls. |
| `poster` | Shows an image before playback starts. |
| `muted` | Starts with sound off. |
| `loop` | Restarts at the end. |
| `preload="metadata"` | Hints that the browser should fetch basic media details. |

Avoid automatic sound. Browsers generally block audible `autoplay`; if a decorative clip truly must start itself, pair `autoplay` with `muted`.

## Payoff

The hall can publish a welcome clip that visitors can control and understand, rather than a silent black box or an unexpected burst of sound.
