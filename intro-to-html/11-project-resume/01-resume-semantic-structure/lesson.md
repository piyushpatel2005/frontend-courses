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

A volunteer coordinator at the Riverstone Makers' Fair needs a one-page resume before the organizer reviews applications. Build the content skeleton first, so a reader can scan the candidate's role, experience, skills, and contact details in a sensible order.

## What you'll build

A resume with semantic landmarks: a header with name and title, main with three labeled sections (summary, skills as a list, experience), and a footer with contact details.

**Target:** a resume with a clear heading, one primary-content area, three labeled content sections, and a contact footer. In the preview, the skills appear as a short bulleted list rather than as a sentence buried in a paragraph.

## Shape the document before filling every detail

A resume is a structured document, not a collection of visual boxes. Use semantic regions to make its parts clear:

```html
<header>
    <h1>Sam Rivera</h1>
    <p>Community Events Assistant</p>
</header>

<main>
    <section>
        <h2>Professional Summary</h2>
        <p>Organizes welcoming, practical events for local makers.</p>
    </section>

    <section>
        <h2>Skills</h2>
        <ul>
            <li>Event coordination</li>
            <li>Volunteer communication</li>
            <li>Schedule planning</li>
        </ul>
    </section>

    <section>
        <h2>Work Experience</h2>
        <p>Supported the Riverstone Makers' Fair, 2024–2026.</p>
    </section>
</main>

<footer>
    <p>sam.rivera@example.com</p>
</footer>
```

`<header>` introduces the resume. `<main>` contains its primary information, and each `<section>` groups one scannable topic under a heading. A `<ul>` fits skills because each skill is a separate item, not a step in a sequence.

## Checkpoint

Preview the page. The name and role should come first, followed by Summary, Skills, and Work Experience. If a heading feels detached from its content, check that both are inside the same `<section>`.

## Your Tasks

1. Add one `<header>` with your name and professional title.
2. Add one `<main>` containing at least three `<section>` blocks for Professional Summary, Skills, and Work Experience.
3. In the Skills section, add an unordered list with at least three skill items.
4. Add one `<footer>` with contact information.

## Payoff

You now have the semantic backbone of a resume that a hiring reader can scan and assistive technology can navigate. The next lesson will add useful ways to reach and learn more about the candidate.
