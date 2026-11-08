---
title: "Keyboard Friendly Page"
slug: keyboard-friendly-page
order: 3
language: html
lesson_type: coding
runtime: srcdoc
summary: Add a skip link, a focusable main destination, purposeful link text, and
  an empty text alternative for a decorative flourish.
seo_title: A keyboard-friendly page | Introduction to HTML
seo_description: Add a skip link, a focusable main destination, purposeful link text,
  and an empty text alternative for a decorative flourish.
seo_keywords:
- HTML keyboard accessibility
- HTML skip link
- decorative alt
- link text
- tabindex
---

# A keyboard-friendly page

The garden answers already open with native `<details>` controls. A visitor should also be able to move through a page without a mouse. Reuse native links and headings, then give keyboard users a shortcut past repeated navigation.

## Let the browser provide the controls

Tab moves between links and controls; Enter activates a focused link, and Enter or Space toggles a focused summary. A paragraph styled to look like a button does not gain these behaviors. Choose native elements first, and keep their visible focus indicators when you style them in CSS.

A skip link is an ordinary link placed near the beginning of the page. For example:

```html
<a href="#opening-times">Skip to opening times</a>
<header>Library introduction and navigation</header>
<main id="opening-times" tabindex="-1">
  <h1>Opening times</h1>
</main>
```

The matching `id` names the destination. `tabindex="-1"` lets that region receive focus without adding an extra stop to the normal Tab sequence. Do not use positive tabindex numbers to rearrange the keyboard order; keep the source in a useful reading order instead.

## Explain a link’s purpose

A label such as “Read the walking route” tells visitors what to expect. “Here” does not, especially when someone encounters a list of links outside the surrounding paragraph.

The starter in `index.html` contains a walking-club page with navigation, a main region, and a route section. Its supplied line image is only a decorative flourish; the nearby heading already carries the meaning. Give that image `alt=""` so it does not add a useless announcement. This differs from the meaningful photos you described earlier: never hide information by marking it decorative.

## Your Tasks

1. Before the page header, add a link labeled `Skip to main content` with `href="#main-content"`.
2. Give the supplied `<main>` the unique `id="main-content"` and `tabindex="-1"`.
3. Set the decorative flourish image’s `alt` attribute to an empty string, `alt=""`; keep its supplied source.
4. Replace `Here` in the supplied route link with descriptive text that includes `route`.

Run to inspect the reading order, then Submit to check the markup. Use Tab inside the preview to reach the first link and then the route link; you should see where focus is. The embedded preview can resolve fragment links against the enclosing course URL, so a correct `href` and target may not jump as a standalone page would. Do not follow a link out of the lesson to test it. On a standalone page, activate the skip link and check that focus reaches main before continuing with Tab.

The next project brings these content and accessibility decisions together in a resume. CSS comes afterward and should preserve this usable source order.
