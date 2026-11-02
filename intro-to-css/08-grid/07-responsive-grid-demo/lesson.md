---
title: "Responsive Grid"
slug: responsive-grid-demo
order: 7
language: css
summary: "A media query can change grid tracks when the available screen width becomes small."
seo_title: "Responsive Grid | Introduction to CSS"
seo_description: "Three columns fit a wide board, but each card gets cramped in a narrow preview. A **media query** applies a set of CSS rules only when a condition is true. This example checks the viewport, the area where the page is displayed. In this course, that is the preview frame's width, not necessarily the whole browser window."
seo_keywords: [CSS, responsive-grid-demo, layout, beginner CSS]
lesson_type: coding
hints:
  - "Open style.css and change one declaration at a time."
  - "Run Preview after each change; restore the value before the exercise."
---

# Switch the workshop board to one column

Three columns fit a wide board, but each card gets cramped in a narrow preview. A **media query** applies a set of CSS rules only when a condition is true. This example checks the viewport, the area where the page is displayed. In this course, that is the preview frame's width, not necessarily the whole browser window.

The ordinary `.responsive-grid` rule defines three columns. Later in `style.css`, this rule replaces that column definition when the viewport is at most 36rem wide:

```css
@media (max-width: 36rem) {
  .responsive-grid {
    grid-template-columns: 1fr;
  }
}
```

The outer braces enclose the conditional rules; the inner braces enclose the declarations for `.responsive-grid`. `max-width` includes the boundary itself. In a media query, `rem` uses the browser's initial font size, usually 16px, so 36rem is normally 576px. Changing the page's root font size does not change this query's threshold.

Both rules target the same class. On a narrow viewport both apply, and the later column declaration wins. Above the threshold, the media query no longer applies, leaving three columns. The display and gap declarations keep working at both sizes.

Run Preview, then resize the preview across the threshold in both directions. Watch for one column on the narrow side and three on the wide side. If your preview cannot resize, temporarily use `100rem` to inspect the narrow-layout rule, then restore `36rem`; that experiment does not replace checking the actual breakpoint. The Responsive Design module will build on this first media query.
