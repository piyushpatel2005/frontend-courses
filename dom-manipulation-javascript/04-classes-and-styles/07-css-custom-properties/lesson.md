---
title: Change a CSS custom property from JavaScript
slug: css-custom-properties
order: 7
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Change one CSS custom property to recolor a card and its badge.
seo_title: JavaScript and CSS Custom Properties | DOM Manipulation Course
seo_description: Change one CSS custom property to recolor a card and its badge.
seo_keywords:
- JavaScript CSS custom properties
- style.setProperty
- style.removeProperty
- CSS variables DOM
---

The market card uses one accent color for its border and badge. Change that shared value rather than setting two separate colors from JavaScript.

In `style.css`, `.stall-card` declares `--accent: #205b87`. Both the border and badge use `var(--accent)` to read it. A custom property keeps its two leading hyphens and is inherited by descendants, which is why the badge can use its card's value.

```javascript
card.style.setProperty("--accent", "#b54435");
// Later, remove only the inline override:
card.style.removeProperty("--accent");
```

The first call sets an inline value on the card, overriding its stylesheet default. The second removes that inline declaration so the default applies again. It does not remove the stylesheet rule or erase the badge's styling.

The completed click callbacks also update a status paragraph. Run and press Warm accent: both border and badge become brick red. Press Default accent: both return to blue. Change the warm hex color in `script.js`, Run, then restore it.

For debugging, `card.style.getPropertyValue("--accent")` reads the inline declaration only. `getComputedStyle(card).getPropertyValue("--accent")` reads the effective value after CSS rules apply. Keep color choices to a known palette rather than putting arbitrary visitor text into CSS. The next card uses the same set-and-remove pattern with a different palette.
