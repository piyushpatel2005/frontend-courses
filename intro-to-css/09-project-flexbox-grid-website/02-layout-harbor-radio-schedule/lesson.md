---
title: "Lay Out the Harbor Radio Schedule"
slug: layout-harbor-radio-schedule
order: 2
language: css
summary: Combine flexbox and grid for a one-page Harbor Radio schedule.
seo_title: Harbor radio schedule | Intro to CSS
seo_description: Learn using flexbox for controls and grid for cards by building a small, visible CSS interface.
seo_keywords:
  - CSS
  - using flexbox for controls and grid for cards
  - HTML
  - beginner CSS
lesson_type: coding
hints:
  - Keep the stylesheet linked from the document head.
  - Change one declaration at a time, then use Run Preview to inspect the result.
---

Arrange Harbor Radio's heading and shows using the two layout tools from the River Radio demo. This is a fresh lineup, not an extension of the previous workshop page.

The HTML supplies the title, placeholder button, and three shows. The CSS supplies colors, spacing, the header's alignment settings, and `display: grid` for the shows. The supplied wrapping rule lets long show names fit narrow equal tracks. Edit only `style.css`.

## Your Tasks

1. Add `display: flex` to `.schedule-head` to place the heading and button in a row.
2. Set `.show-grid` to three equal columns with `grid-template-columns: repeat(3, 1fr)`.

Run Preview after each change. After the first task, the header should be a row but the shows still stack. After the second, all three shows should share a row. Submit to check your work.
