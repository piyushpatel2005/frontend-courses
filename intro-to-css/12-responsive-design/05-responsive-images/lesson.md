---
title: Images that fit
slug: responsive-images
order: 5
language: css
runtime: srcdoc
lesson_type: coding
summary: Scale an image without distorting it and deliberately crop a separate thumbnail.
seo_title: Images that fit | Introduction to CSS
seo_description: Scale an image without distorting it and deliberately crop a separate thumbnail.
seo_keywords: [CSS, images that fit]
---

# Fit the picture without stretching it

A flexible grid does not automatically resize an image with a large intrinsic width. This card supplies an 800-by-400 illustration. The circles make distortion easy to spot; both image files are embedded in the page, so the experiment does not depend on a remote photo.

`max-width: 100%` caps an image at its containing block’s width without making a smaller natural image grow unnecessarily. `height: auto` lets the browser calculate the height from its aspect ratio. Together, these rules preserve the full picture while allowing it to shrink. The HTML width and height attributes remain useful size/aspect-ratio hints; the CSS controls the final rendered size here.

A thumbnail has a different job. Its supplied CSS fixes both dimensions to 8rem, a square. `object-fit: cover` fills that square while preserving the artwork’s proportions, so some of the image is cropped. `object-fit: contain` would keep the whole artwork inside the square and may leave empty space. Neither changes the size of the image element’s box. Keep meaningful alternative text in HTML; CSS cropping does not choose a new alternative for you.

## Your Tasks

1. Set `.landscape` to `max-width: 100%` so it cannot extend beyond its card.
2. Set `.landscape` to `height: auto` so its two-to-one aspect ratio survives resizing.
3. Set `.thumbnail` to `object-fit: cover` to fill its supplied square without stretching the artwork.

Edit `style.css`, Run, and compare narrow and wide previews. After step 1 alone the full-width picture may look squashed because its fixed height is still present; step 2 restores its proportions. The thumbnail is intentionally cropped, not another example of showing the whole image. Submit checks each decision. HTML’s srcset and picture can select different resources, but that is a separate asset-delivery decision, not a replacement for CSS sizing.
