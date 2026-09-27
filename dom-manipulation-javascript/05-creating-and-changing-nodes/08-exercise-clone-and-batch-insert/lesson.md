---
title: 'Exercise: Clone Two Exhibit Cards'
slug: exercise-clone-and-batch-insert
order: 8
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Deep-clone an existing exhibit card twice and append the copies as a prepared batch.
seo_title: 'Exercise: Clone Two Exhibit Cards | DOM Manipulation with JavaScript'
seo_description: Practice cloneNode(true), changing nested textContent, and inserting DOM copies through a DocumentFragment.
seo_keywords:
- cloneNode exercise
- deep clone descendants
- DocumentFragment practice
hints:
- Call original.cloneNode(true), then query the name within the copy, not within the original.
---

# Exercise: Clone Two Exhibit Cards

The gallery has a single sample exhibit. Add two more exhibits using its nested layout, then place both copies in the list together.

## How it works

The seed swap demo cloned Thyme into Basil and Mint. Here is another separate example from a concert set list: it changes each copied song title before adding the copies to a fragment. `true` matters because it preserves the nested title and note; each copied node must get its own title. Avoid adding IDs to copied cards, since duplicate IDs make selectors ambiguous.

```javascript
// Different example: concert songs, not your gallery.
const queued = document.createDocumentFragment();
for (const song of ["Sunrise", "Lanterns"]) {
  const copy = firstSong.cloneNode(true);
  copy.querySelector(".song-title").textContent = song;
  queued.append(copy);
}
setList.append(queued);
```

## Try the preview

Run the preview: Clay vessel, Woven basket, and Glass bead should appear in that order, each with the original Collection item note. If a copy has no title span, make sure you passed `true` to `cloneNode`.

## Remember

Earlier you changed text on a newly made element. On a deep clone, find the nested span inside *that clone* before inserting it; otherwise you may accidentally change the original card.

## Your Tasks

1. Deep-clone the existing `.exhibit` twice, preserving both its nested title and Collection item note; set the new `.exhibit-name` text to `Woven basket` and `Glass bead`.
2. Create a `DocumentFragment`, add the two distinct clones to it in that order, and append the fragment to `#exhibits` while keeping Clay vessel first.
