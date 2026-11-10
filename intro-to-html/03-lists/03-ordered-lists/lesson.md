---
title: Read Numbered and Lettered Steps
slug: ordered-lists
order: 3
language: html
lesson_type: coding
summary: Choose ordered list numbering and start it at a specific step or letter.
seo_title: Read Numbered and Lettered Steps | Introduction to HTML
seo_description: Choose ordered list numbering and start it at a specific step or letter.
seo_keywords: [HTML ordered list, ol start attribute, ol type attribute, alphabetic list]
---

An event program continues after its first three steps. Run the finished page: the first sequence begins at 4, the second at C, and a third example starts at iv.

Use `<ol>` when position matters. Each direct `<li>` is one step. `start="4"` starts at the fourth position instead of 1. `type="A"` displays A, B, C; `type="a"` uses lowercase letters. `type="I"` and `type="i"` display uppercase and lowercase Roman numerals. **`start` is always an integer**, even with letters or Roman numerals: `type="A" start="3"` displays C, not the literal word `C` in the attribute.

## Check the preview

Change `type="A"` to `type="a"` and Run to compare C with c; restore it. A `reversed` ordered list counts down when the sequence really runs backward, but a normal schedule should count forward.
