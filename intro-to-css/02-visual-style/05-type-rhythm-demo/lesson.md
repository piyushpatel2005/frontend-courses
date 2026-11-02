---
title: Type Rhythm
slug: type-rhythm-demo
order: 5
language: css
summary: Inspect font family, line height, and letter spacing in a readable CSS market note.
seo_title: CSS Typography | Visual Style
seo_description: See font-family, line-height, and letter-spacing shape the readability of a CSS event note.
seo_keywords:
  - CSS typography
  - font family
  - line height
  - letter spacing
lesson_type: coding
hints:
  - Typography rules can target the page body, a heading, or paragraphs separately.
---

# Make the market note easier to read

The bread-stall note uses familiar HTML. This time the changes are in the letters and lines rather than their background.

`font-family: Georgia, serif` on `body` asks for Georgia first, then a generic serif font if Georgia is unavailable. A serif font has small finishing strokes on its letters. The note inherits this family; the small label has its own supplied Arial rule.

The `.story` selector targets the longer paragraph. Its unitless `line-height: 1.7` makes each line 1.7 times the text's font size. It changes the line boxes, not the letter size. On `h1`, `letter-spacing: 0.04em` adds space between characters. An `em` here is relative to the heading's own font size.

## Compare the spacing

Run. Change `.story`'s line height to `1.2`, Run again, and compare the distance between lines. Restore `1.7`. Change the heading's letter spacing to `0`, compare, then restore `0.04em`. The supplied card layout stays the same. For ordinary reading text, start with comfortable text size and a unitless line height rather than a fixed card height. A roughly 45–75-character line is a useful starting range, not a rule for every label. Check actual paragraphs at narrow widths and with enlarged text; a heading treatment does not automatically suit body text.

The exercise uses `.note p`, a selector with a space meaning “paragraphs anywhere inside `.note`.” It applies line height to both the label and the longer paragraph.
