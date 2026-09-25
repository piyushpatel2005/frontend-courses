---
title: Project 3 - Resume Links and Actions
slug: resume-links-media-actions
order: 2
language: html
summary: Add useful links, contact actions, and media to an accessible HTML resume.
seo_title: Add Resume Links and Media | Learn HTML
seo_description: Practice adding external links, mailto actions, downloadable files, and a captioned image to an HTML resume.
seo_keywords: [HTML links, mailto link, download attribute, HTML figure, resume project]
validationRules: []
hints:
  - "Use anchor links for portfolio/GitHub/LinkedIn."
  - "Use figure/figcaption for profile image or project snapshot."
---

# Project 3: Resume (Links, Media, and Actions)

## Mission

The Riverstone Makers' Fair organizer can now scan Sam's resume, but needs quick ways to view work, send a message, and save a copy. Add those actions without losing the clear structure you built in the first resume lesson.

## What you'll build

A resume enhanced with a captioned figure, two external portfolio links opening in new tabs, an email action link, and a downloadable resume PDF — all keeping the existing semantic structure.

**Target:** a resume with a captioned work image, two external destinations, an email action, and a download link. In the preview, visitors can tell what the image represents and where every action will take them.

## Turn reference information into useful actions

An anchor becomes an action when its `href` points somewhere useful. Use a full `https://` URL for an external portfolio or profile. `target="_blank"` opens that external destination in a new tab; add `rel="noopener"` as a safe companion when you use it.

```html
<p>
    <a href="https://portfolio.example.com" target="_blank" rel="noopener">View portfolio</a>
    <a href="https://github.com/example" target="_blank" rel="noopener">View code samples</a>
</p>
```

For direct contact, a `mailto:` URL opens the visitor's email app with the address ready to use.

```html
<a href="mailto:sam.rivera@example.com">Email Sam</a>
```

Use `download` when the link is a file that visitors should save instead of navigate to.

```html
<a href="sam-rivera-resume.pdf" download>Download resume PDF</a>
```

## Give the image context

A profile image or project snapshot needs a text alternative and a visible caption. Put the image and its explanation in one `<figure>` so they are understood as one piece of evidence.

```html
<figure>
    <img src="fair-display.jpg" alt="Sam arranging ceramic pieces at a community makers' fair">
    <figcaption>Sam's volunteer display at the Riverstone Makers' Fair.</figcaption>
</figure>
```

## Checkpoint

Preview the page. The figure caption should sit with the image. The two portfolio links should be ready to open in a new tab, the email link should begin with `mailto:`, and the download link should carry `download`. If a link acts like plain text, check that the destination is in its `href` attribute.

## Your Tasks

1. Add a `<figure>` with a profile or work image and a `<figcaption>`.
2. Add at least two external links—for example, a portfolio and code profile—that open in a new tab with `target="_blank"`.
3. Add one `mailto:` link so a visitor can start a contact email.
4. Add one downloadable resume link using the `download` attribute.

## Payoff

The resume now gives the organizer a clear path from a quick scan to real evidence, a direct message, or a saved copy.
