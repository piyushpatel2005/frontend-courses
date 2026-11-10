---
title: "Review Structured Profile"
slug: review-structured-profile
order: 4
language: html
summary: Practice HTML structure and selectors by building a compact profile card.
seo_title: HTML Structured Profile Review
seo_description: Practice using main, headings, paragraphs, IDs, and reusable classes in a compact HTML profile card.
seo_keywords: [HTML review, HTML profile card, HTML main element, HTML IDs, HTML classes]
lesson_type: coding
hints:
  - Use main for the profile, id for its unique name, and class on each repeated skill label.
---

Bring the containers and labels together in a volunteer profile for the repair café. `index.html` supplies only the document shell. Build a main region, a name and description, and repeated skill labels. In the preview, the labels remain plain text until CSS styles them.

`<main>` names a page’s primary content. Keep one main region here; you will study page landmarks later. A `span` stays within a line, and several skill spans can share `class="tag"`. Classes do not style themselves.

## Check your page

Run the starter: it is empty except for a source comment. After your edits you should see a profile heading, a description, and two skill tags. The class names will not make the tags look different until you add CSS later.

Edit `index.html`, press **Run** to inspect your page, then **Submit** to check the tasks. You can submit after each step; later tasks may still be incomplete.

For a skill label, use a `<span>` like the inline hook from the div-and-span lesson. Give each label its own `class="tag"` attribute; the class value is reusable.

## Your Tasks

1. Add exactly one `<main>` element with the unique `id="profile"`.
2. Inside it, add an `<h1>` with the volunteer’s name.
3. Add a non-empty `<p>` describing their role inside the profile.
4. Inside the profile, add at least two non-empty skill labels with `class="tag"`.

The café now has a focused volunteer profile with a unique page landmark and reusable skill labels.
