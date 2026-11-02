---
title: "Write Meridian's Survey Notes"
slug: exercise-paragraphs-emphasis
order: 4
language: html
summary: Practice paragraphs, emphasis, line breaks, and strong text in the Meridian crew’s flight log.
seo_title: "HTML Paragraphs, Emphasis, and Line Breaks | Introduction to HTML"
seo_description: Learn how to use <p>, <em>, <strong>, and <br> to format and structure text content in HTML.
seo_keywords:
  - HTML paragraphs
  - HTML emphasis
  - HTML strong
  - HTML line break
  - text formatting
validationRules: []
hints:
  - "Use <p> for paragraphs. It automatically adds spacing before and after."
  - "<em> adds emphasis (usually italic). <strong> adds strong importance (usually bold)."
  - "<br> is a void element — use it for a single line break inside a paragraph, not between paragraphs."
  - "<hr> draws a visible divider between sections."
---

# Paragraphs, Emphasis, and Line Breaks

The Meridian crew is writing a flight log after a rooftop landing. Your `index.html` has a complete document with an empty body. Build a different log from the previous example, using paragraphs for the report and inline elements for selected phrases.

## From the demo to your log

The preceding survey-log demo showed paragraphs with `<em>`, `<strong>`, and a `<br>` inside a transmission. Use the same tags for a different log entry. `<p>` groups prose; `<em>` emphasizes a phrase and `<strong>` marks important information. A `<br>` breaks a line *inside* a paragraph without starting a new one. Add `<hr>` between sections when the topic changes; both `<br>` and `<hr>` are void elements with no closing tag.

```html
<p>The weather shifted <em>after sunset</em>.<br>Return to the landing site.</p>
<hr>
<p><strong>Priority: check the beacon.</strong></p>
```

## Check your page

Run the page after each change. The first paragraph contains two lines, while the horizontal rule separates it from the second paragraph.

Edit `index.html`, press **Run** to inspect your page, then **Submit** to check the tasks. You can submit after each step; later tasks may still be incomplete.

## Your Tasks

The starter `index.html` has an empty body:

1. Add an `<h1>` naming the survey log.
2. Add a first `<p>` with two sentences about the rooftop landing.
3. Emphasize a key phrase in the first paragraph with `<em>`.
4. Add a second non-empty `<p>` with a priority update.
5. Wrap an important phrase in the second paragraph with `<strong>`.
6. Add a `<br>` between the two sentences in the first paragraph.
7. Add an `<hr>` between the first and second paragraphs.

Your survey log now separates the landing report from the important update.
