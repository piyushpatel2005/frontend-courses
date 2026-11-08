---
title: "Sticky Scroll Headings"
slug: sticky-scroll-headings
order: 9
language: css
runtime: srcdoc
lesson_type: coding
summary: Keep a heading visible inside a scrolling panel and explain its local stacking order.
seo_title: Sticky scroll headings | Introduction to CSS
seo_description: Keep a heading visible inside a scrolling panel and explain its local stacking order.
seo_keywords: [CSS, sticky scroll headings]
---

# Keep the storage heading in view

The previous cards kept long text reachable through scrolling. This guide has several paragraphs inside one scrolling panel. Its heading should stay visible as those paragraphs pass beneath it.

`position: sticky` keeps the heading in normal flow, then offsets it when scrolling would carry it past a chosen edge. `top: 0` sets that edge at the top of this scrollport. Unlike an absolute pin, the sticky heading still reserves its original space. It also stays bounded by its containing block; it cannot follow you indefinitely after that block ends.

The supplied panel has a fixed demonstration height and `overflow: auto`, so it owns the scrolling. Sticky positioning uses the nearest ancestor scrollport. An unexpected overflow rule on an ancestor can therefore change where sticking happens. There must be enough content to scroll and enough room for the sticky box to move.

For comparison, `position: fixed` leaves normal flow and usually attaches to the viewport; inside this course that would be the preview viewport. A transformed ancestor can establish a different fixed-position containing block. Fixed notices can cover text at zoomed sizes, so they are not a shortcut for this panel heading.

## Which box paints on top?

Later paragraphs are positioned too. A `z-index` on the sticky heading gives it a higher local stacking level so they pass underneath it. Its solid background prevents the passing words from showing through.

A **stacking context** is a group painted as one unit relative to its siblings. Sticky boxes create one. A positioned box with a non-auto z-index, a transform, or opacity below 1 can create others. A child with z-index: 999 cannot escape its parent’s stacking context to outrank a higher sibling group. Fix the relevant parent relationship instead of continually increasing numbers. Flex and grid items can also use z-index without position: relative.

## Your Tasks

1. Set `.scroll-heading` to `position: sticky`.
2. Set `.scroll-heading` to `top: 0`.
3. Set `.scroll-heading` to `z-index: 1` so it paints above the positioned paragraphs.

Edit `style.css`, Run, and scroll inside the bordered panel rather than the whole lesson. With all three changes, the heading stays at the panel’s top while the later paragraphs move underneath. Tab to the supplied scroll region and use the arrow keys as a second way to read it. Submit checks the declarations separately; scrolling is your visual check.
