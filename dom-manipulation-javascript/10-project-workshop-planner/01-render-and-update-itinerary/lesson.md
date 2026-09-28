---
title: Read and update a live itinerary
slug: render-and-update-itinerary
order: 1
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Trace state into safe DOM rows and rerender a changed booking.
seo_title: Read and update a live itinerary | DOM Workshop Planner
seo_description: Trace state into safe DOM rows and rerender a changed booking. Practice in a runnable JavaScript DOM workshop preview.
seo_keywords:
  - JavaScript DOM workshop planner
  - render and update itinerary
  - accessible itinerary
---

# Read and update a live itinerary

A studio booking board changes its opening time. Follow the data from an array to the visible list, then watch a click redraw the page.

## Follow the render

`bookings` is the source of truth. `paint()` clears old rows with `replaceChildren()`, creates each `<li>`, assigns a string through `textContent`, and appends it. This avoids treating a booking name as HTML. The button changes the array first, then calls `paint()` again. A `button` already works with pointer, Enter, and Space; it does not need a custom key handler.

Run the preview. You should see two bookings; activate **Update first session time** and the first time becomes 09:30 without duplicating a row. Change the second name in the array, Run again, and see which line follows it. Restore the name before continuing. The next exercise transfers this pattern to a workshop itinerary.
