---
title: "CSS Selectors"
slug: css-selectors
order: 3
language: css
summary: See element, class, and ID selectors target different parts of a museum specimen card.
seo_title: "CSS Selectors Target Exhibit Details | Introduction to CSS"
seo_description: See element, class, and ID selectors target different parts of a museum specimen card.
seo_keywords: [CSS demo, CSS preview, css-selectors-demo]
lesson_type: coding
hints:
  - "This completed example is for reading and previewing before the exercise."
---

The Moon Jelly card has two paragraphs, but only one is a care note. A selector lets you choose how widely a rule applies. Look at the tags and attributes in `index.html` before opening `style.css`.

```css
p { line-height: 1.6; }
.note { background-color: #fff4cc; }
#specimen-title { color: #7a1fa2; }
```

`p` is an element selector: it matches both paragraphs. `line-height` sets the height of each text line. A unitless `1.6` makes it 1.6 times the element's font size, separating the lines in the longer paragraph.

`.note` is a class selector. The dot means “match elements whose class list includes the name note”; the HTML uses `class="note"`, without a dot. Classes can be reused. Here the class rule paints only the care note yellow. Its supplied `padding` adds space around the words inside that background.

`#specimen-title` is an ID selector. It matches `id="specimen-title"` on the heading. Use an ID for one unique element in a document. The `#` here belongs to a selector; the `#` in the color value introduces a hex color code.

## Try the selection

Run the page. Both paragraphs have the line-height rule, but only the care note is yellow. Change `.note` to `p` in the background rule and Run again: both paragraphs gain that background. Restore `.note` before the Sea Star exercise.
