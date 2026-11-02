---
title: "Resolve Specificity"
slug: exercise-specificity
order: 8
language: css
summary: Practice element, class, and ID specificity rules on one exhibit note.
seo_title: "Resolve Specificity | Introduction to CSS"
seo_description: Practice element, class, and ID specificity rules on one exhibit note.
seo_keywords: [CSS exercise, exercise-specificity]
lesson_type: coding
validationRules: []
hints:
  - "ID selectors outrank class selectors, which outrank element selectors."
---

# Resolve the gallery notice's color

The demo's `#intro` paragraph is now a new notice with class `alert` and ID `opening`. Keep the HTML unchanged and add these ordinary rules in `style.css`; do not use inline styles or `!important` to force the result. The `!important` marker changes declaration priority; leave it out while comparing these selectors.

Each rule is a separate task even though the more specific rules hide the earlier colors. Submit checks all three rules, not just whether the final paragraph happens to be green.

## Your Tasks

1. Add `p { color: gray; }`.
2. Add `.alert { color: orange; }`.
3. Add `#opening { color: green; }`.

## Watch the winner change

Run and Submit after each task. With only the element rule, the note is gray. Adding the class rule makes it orange. Adding the ID rule makes it green. The earlier rules are still valid; they simply lose the color conflict on this element.

After the foundations quiz, you will use these selectors to style a night-market flyer.
