---
title: Project 3 - Resume Semantic Structure
slug: resume-semantic-structure
order: 1
language: html
summary: Build the semantic structure of a one-page resume using meaningful HTML sections.
seo_title: Build a Semantic HTML Resume | Learn HTML
seo_description: Practice building a resume with header, main, sections, skills, experience, and contact information in HTML.
seo_keywords: [HTML resume, semantic HTML, HTML sections, portfolio project, beginner HTML]
validationRules: []
hints:
  - "Use semantic tags like header, main, section, and footer."
  - "A resume should include summary, skills, and experience sections."
lesson_type: coding
---

# Project 3: A semantic resume

Sam Rivera is applying to coordinate volunteers at the Riverstone Makers' Fair. Build a one-page resume that lets the organizer find Sam's summary, skills, and experience without searching through a long paragraph.

You have already used headings, lists, and semantic regions. This project combines them; the next lesson will extend this same document with links and a project image.

## Plan the sections

Put Sam's name and role in the page header. Use one main region containing three sections, in this order: Professional Summary, Skills, and Work Experience. Each section needs an `<h2>` inside it so the heading and content stay together. Skills belong in an unordered list because they are items, not steps.

This abbreviated example is for a different applicant:

```html
<header>
  <h1>Mira Chen</h1>
  <p>Library Program Assistant</p>
</header>
<main>
  <section>
    <h2>Professional Summary</h2>
    <p>Plans reading programs for neighborhood families.</p>
  </section>
</main>
<footer>
  <p>mira.chen@example.com</p>
</footer>
```

Build Sam's version in the empty document shell. Use `Sam Rivera`, `Volunteer Coordinator`, and `sam.rivera@example.com` for the identity details; write your own short summary, skills, and experience text. This is fictional sample information, so you do not need to enter personal details.

## Your Tasks

1. Add one page-level `<header>` with `Sam Rivera` in an `<h1>` and `Volunteer Coordinator` in a paragraph beneath it.
2. Add one page-level `<main>` after the header.
3. Inside main, add a section headed `Professional Summary` with a paragraph about Sam's work.
4. After that section, add a section headed `Skills`.
5. In the Skills section, add an unordered list with at least three different, nonempty skills.
6. After Skills, add a section headed `Work Experience` with a paragraph describing Sam's experience.
7. After main, add a page-level `<footer>` containing `sam.rivera@example.com`.

Edit `index.html`, Run to check the reading order, then Submit. Each completed task can pass before you finish the next. The first three sections should be Summary, Skills, and Work Experience; do not put a heading outside the section it labels.

The next starter carries forward a completed sample of this resume. If you prefer your own descriptions, copy them over before adding the new work.
