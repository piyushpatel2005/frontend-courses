---
title: "Audio"
slug: audio
order: 2
language: html
summary: Build audio markup with alternative sources and a working link to a supplied transcript.
seo_title: Embed Audio with HTML
seo_description: Learn to embed accessible HTML audio with controls, source formats, and transcripts.
seo_keywords:
  - HTML audio
  - audio element
  - audio transcript
  - HTML media
lesson_type: coding
validationRules: []
hints: []
---

Riverlight Community Hall also has a spoken volunteer orientation. An audio player uses the same source pattern as video, but it has no picture. A nearby transcript lets visitors read the information without listening.

## Compare audio with video

This separate museum example offers two encodings of one recording:

```html
<audio controls>
  <source src="gallery-guide.mp3" type="audio/mpeg">
  <source src="gallery-guide.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>
<p><a href="#gallery-transcript">Read the gallery guide transcript</a></p>
<section id="gallery-transcript">
  <h2>Gallery guide transcript</h2>
  <p>Welcome. The pottery display is in the room on your left.</p>
</section>
```

`controls` provides the listening interface. Notice that an MP3 source uses the MIME type `audio/mpeg`, not `audio/mp3`. The `#gallery-transcript` link points to the element whose `id` is `gallery-transcript`; it stays useful even if the audio cannot load.

Fallback text inside `<audio>` appears in a browser that does not support the element, not whenever a recording fails. Keep the transcript outside the player so it is always available. Audio has no `poster` attribute. As with video, `muted`, `loop`, and `preload` affect playback; omit `autoplay` so visitors choose when to listen. Custom controls require additional scripting and are outside this HTML exercise.

## Add the hall recording

The starter already includes a short orientation transcript. Add the player above it and a link beside the player. The recording filenames are placeholders; no audio files are supplied. You can verify the transcript link here, but you cannot verify playback from these filenames.

Put the file addresses on the nested `<source>` elements, not on `<audio>` itself. A `src` on the player would take precedence over its source list.

## Your Tasks

1. Below the page heading, add one `<audio>` with `controls`.
2. Inside it, add a `<source>` for `orientation.mp3` with `type="audio/mpeg"`.
3. Add a second source inside the same audio element for `orientation.ogg` with `type="audio/ogg"`.
4. Outside the player, add a link labeled `Read the orientation transcript` with `href="#orientation-transcript"` to reach the supplied transcript.

Edit `index.html`, Run to read the supplied transcript and inspect the player, then Submit. On a standalone hosted page, the fragment link jumps to the transcript section. An embedded preview can resolve fragment links against the surrounding course page instead; the check verifies the matching `href` and `id`, not preview navigation. The player may show unavailable media until real recordings are hosted. Before publication, compare the transcript with the complete recording and test playback.
