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
---

# Project 3: Create a Resume (Semantic Structure)

## Mission

The Riverstone Makers' Fair needs a volunteer coordinator, and Sam Rivera is applying. Build Sam’s one-page content skeleton before the organizer reviews applications, so a reader can scan the candidate's role, experience, skills, and contact details in a sensible order.

## What you'll build

Sam’s resume with semantic landmarks: a header with name and role, main with three labeled sections (summary, skills as a list, experience), and a footer with contact details.

**Target:** a resume with a clear heading, one primary-content area, three labeled content sections, and a contact footer. In the preview, the skills appear as a short bulleted list rather than as a sentence buried in a paragraph.

## Shape the document before filling every detail

A resume is a structured document, not a collection of visual boxes. Here is another applicant’s example; use its structure, but write Sam’s fair-coordinator resume in the editor:

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

    <section>
        <h2>Skills</h2>
        <ul>
            <li>Program scheduling</li>
            <li>Reader outreach</li>
            <li>Book displays</li>
        </ul>
    </section>

    <section>
        <h2>Work Experience</h2>
        <p>Coordinated events at Willow Lane Library, 2023–2025.</p>
    </section>
</main>

<footer>
    <p>mira.chen@example.com</p>
</footer>
```

`<header>` introduces the resume. `<main>` contains its primary information, and each `<section>` groups one scannable topic under a heading. A `<ul>` fits skills because each skill is a separate item, not a step in a sequence.

## Checkpoint

Preview the page. The name and role should come first, followed by Summary, Skills, and Work Experience. If a heading feels detached from its content, check that both are inside the same `<section>`.

## Your Tasks

1. Add a `<header>` with Sam’s name in an `<h1>` and the coordinator role beneath it.
2. Add one `<main>` to hold the resume’s primary content.
3. Inside `<main>`, add three headed `<section>` blocks in order: Professional Summary, Skills, and Work Experience. Give the summary and experience sections a short description.
4. In the Skills section, add an unordered list with at least three separate skills.
5. Add a `<footer>` with Sam’s contact information.

## Payoff

You now have the semantic backbone of a resume that a hiring reader can scan and assistive technology can navigate. The next lesson will add useful ways to reach and learn more about the candidate.
