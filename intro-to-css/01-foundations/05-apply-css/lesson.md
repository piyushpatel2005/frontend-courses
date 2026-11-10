---
title: "Apply CSS"
slug: apply-css
order: 5
language: html
summary: See inline, internal, and external CSS sources working together in one exhibit card.
seo_title: "Apply CSS Three Sources | Introduction to CSS"
seo_description: See inline, internal, and external CSS sources working together in one exhibit card.
seo_keywords: [CSS demo, CSS preview, apply-css-demo]
lesson_type: coding
hints:
  - "This completed example is for reading and previewing before the exercise."
---

The museum inherited a page with CSS in three places. Each source has a different job here so you can find it easily. All three use the same property-and-value syntax.

## Inside an element

In `index.html`, the heading has `style="color: #7a1fa2;"`. This is **inline CSS**: declarations go directly in the element's `style` attribute. No selector or braces are needed because that element is already the target.

## In the document head

The `<style>` element in `<head>` contains `p { font-size: 18px; }`. This is **internal CSS**. It uses a selector and can style matching elements throughout this document. `font-size` sets the text size; `px` means CSS pixels.

## In a separate file

The `body` background rule lives in `style.css`. The head contains `<link rel="stylesheet" href="style.css">` to connect that **external stylesheet**. `rel` identifies a stylesheet and `href` names its location. Several HTML pages can link to the same CSS file.

The course preview loads the stylesheet tab automatically, so removing the link here does not demonstrate a missing-link failure. A standalone HTML page still needs the connection.

## Compare the sources

Run: the heading is purple, the paragraph is 18px, and the page is pale blue. Change the internal `font-size` to `24px` and Run again. Only the paragraph should grow. Restore `18px` before the exercise.
