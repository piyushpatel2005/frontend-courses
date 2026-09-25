---
title: Embedding Audio
slug: audio
order: 2
language: html
summary: Add audio players, fallback formats, custom controls, and transcripts to a web page.
seo_title: Embed Audio with HTML
seo_description: Learn to embed accessible HTML audio with controls, source formats, and transcripts.
seo_keywords:
  - HTML audio
  - audio element
  - audio transcript
  - HTML media
lesson_type: informational
validationRules: []
hints: []
---

# Embedding Audio

## Mission

The Riverlight Community Hall is publishing a two-minute volunteer orientation. Add an audio player that works across browsers and gives visitors a clear way to play, pause, and read the spoken information.

## What you'll build

An accessible audio player with multiple source formats, visible controls, and a transcript link for visitors who cannot or prefer not to listen.

The Riverlight Community Hall is publishing a two-minute volunteer orientation. Add an audio player that works across browsers and gives visitors a clear way to play, pause, and read the spoken information.

## Target

A visitor sees audio controls, and the page can offer more than one audio format plus a nearby transcript link.

## One idea: audio needs an explicit listening path

`<audio>` embeds sound. Give it `controls` so people can start, pause, seek, and adjust volume. Multiple sources let the browser choose a format it supports.

```html
<audio controls>
    <source src="orientation.ogg" type="audio/ogg" />
    <source src="orientation.mp3" type="audio/mpeg" />
    Your browser does not support the audio element.
</audio>
<p><a href="orientation-transcript.html">Read the orientation transcript</a></p>
```

MP3 plays in nearly every browser; OGG is a useful open alternative. The fallback text appears only when the browser cannot play the element.

## Checkpoint

With the audio files present, the preview should show a control bar before anything plays. If it starts unexpectedly, remove `autoplay`. If it has no usable interface, add `controls` or provide equivalent custom buttons.

## Use the right attributes

| Attribute | Result |
|---|---|
| `controls` | Shows play, pause, volume, and seek controls. |
| `muted` | Starts without sound. |
| `loop` | Repeats the clip. |
| `preload` | Hints how much media to fetch before playback. |

Unlike video, audio has no `poster`, width, or height that communicates the content. For spoken material, a transcript supplies the words to people who cannot or prefer not to listen.

## Payoff

The orientation is available as a deliberate, controllable audio experience instead of an inaccessible background sound.
