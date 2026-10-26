---
title: "Responsive Grid"
slug: exercise-responsive-grid
order: 8
language: html
summary: "Read a complete example that switches three grid columns to one at a 36rem breakpoint."
seo_title: "Responsive Grid | Introduction to CSS"
seo_description: "See how a 36rem media query stacks community stall cards in one column while preserving three equal columns on wider viewports."
seo_keywords: [CSS, responsive grid, media query, grid columns]
lesson_type: informational
---

# Make room for the community stalls

The preceding demo introduced a media query that changes the grid's columns. This worked example applies the same pattern to Books, Plants, and Food. The examples are for reading, with no coding assessment.

## The grid and its cards

Each article is a direct child of the grid container:

```html
<section class="responsive-grid" aria-label="Community stalls">
  <article class="card">Books</article>
  <article class="card">Plants</article>
  <article class="card">Food</article>
</section>
```

The stylesheet defines the wide layout first, then overrides only the column definition at the breakpoint:

```css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.card {
  overflow-wrap: anywhere;
  padding: 1rem;
  border-radius: .75rem;
  background: #cfe8ff;
}

@media (max-width: 36rem) {
  .responsive-grid {
    grid-template-columns: 1fr;
  }
}
```

`repeat(3, 1fr)` creates three equal column tracks. At or below `36rem`, the later `grid-template-columns: 1fr` replaces them with one track. Grid places the cards in source order, creating three rows instead of one. The `display`, `gap`, and card styling still apply at both sizes.

## Read both sides of the breakpoint

In a media query, `rem` uses the browser's initial font size, usually 16px. With that setting, `36rem` is 576px, and `max-width` includes the boundary itself:

| Viewport width | Columns | Rows for these three cards |
| --- | --- | --- |
| 360px | One (`1fr`) | Three |
| 576px | One (`1fr`) | Three |
| 577px | Three (`repeat(3, 1fr)`) | One |
| 800px | Three (`repeat(3, 1fr)`) | One |

Above the threshold, the media query stops applying and the ordinary three-column rule takes effect again. Moving the one-column declaration outside the query would also stack the cards on wide screens. Changing the page's root font size does not change this media query's threshold.

The condition measures the page's viewport, not the grid container's width. For a page inside a frame, that means the frame's viewport. The Responsive Design module will build on this distinction.
