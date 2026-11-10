---
title: "Paragraphs And Inline Tags"
slug: paragraphs-and-inline-tags
order: 3
language: html
summary: See common HTML text tags render in a completed mission-log preview before using them in an exercise.
seo_title: "Paragraphs and Inline HTML Tags | Introduction to HTML"
seo_description: See paragraphs, emphasis, strong importance, and a line break in a working preview.
seo_keywords: [HTML text tags, inline tags, bold tag, italic tag, underline tag, small tag]
lesson_type: coding
---

The Meridian crew is logging a short survey update. The completed `index.html` uses inline elements inside paragraphs to mark selected words. Run it first, then compare the source with the preview: the paragraph stays together while individual phrases gain meaning.

## Read the code

```html
<p><strong>Priority:</strong> keep the <em>survey channel</em> open.</p>
<p>
  Keyword: <b>beacon</b>. Vessel: <i>Meridian</i>.
  Spelling to review: <u>recieve</u>.
</p>
```

`<em>` marks stress emphasis and `<strong>` marks importance. They usually look italic and bold. `<b>` draws attention without adding importance, `<i>` sets off text such as a technical term or a ship name, and `<u>` marks an annotation such as a spelling error. These tags have meanings too; use CSS when you only want a visual effect.

`<small>` suits a side note. Later lessons give subscripts, superscripts, and revision marks their own examples and edits.

## Try the preview

Run the page. Notice that every example remains inside an ordinary paragraph; the inline tag changes only the selected phrase instead of creating a new block.

## Check your page

Try removing the `<br>` from the first paragraph and rerun to see how the lines flow, then restore it. The `<br>` creates a line break inside the paragraph; it has no closing tag. The other tags wrap the exact words whose meaning you want to mark.

## Next

Continue to **Write a Survey Log** and use paragraphs, emphasis, strong text, a line break, and a divider yourself.
