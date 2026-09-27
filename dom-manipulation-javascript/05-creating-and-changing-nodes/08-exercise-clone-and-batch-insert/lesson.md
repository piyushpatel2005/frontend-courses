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

The starter displays only Clay vessel. After the second step, run the preview: Clay vessel, Woven basket, and Glass bead should appear in that order, each with the original Collection item note. If a copy has no title span, make sure you passed `true` to `cloneNode`.

## Remember

Earlier you changed text on a newly made element. On a deep clone, find the nested span inside *that clone* before inserting it; otherwise you may accidentally change the original card.

## Your Tasks

1. Complete `makeExhibit(name)` so it returns a detached deep clone of the sample with that name in its nested title, while keeping the sample and note unchanged.
2. In `addExhibits()`, use a `DocumentFragment` to append the `Woven basket` and `Glass bead` clones together after Clay vessel.
