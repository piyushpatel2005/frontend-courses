---
title: "Resume Links Media Actions"
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
lesson_type: coding
---

# Project 3: Resume links and a project image

Sam's resume now explains the candidate's experience. Add ways for the organizer to inspect work, start an email, and save a PDF. Your starter is the previous lesson's completed sample; keep its header, sections, skills, and footer.

## Give each link a clear destination

Here is a different applicant's portfolio link:

```html
<a href="https://example.com/mira-work" target="_blank" rel="noopener">View Mira's library projects (new tab)</a>
```

`target="_blank"` opens a new tab or window. `rel="noopener"` prevents the newly opened page from receiving an opener reference. Modern browsers already give ordinary `_blank` links implicit `noopener` behavior; writing the token explicitly documents that choice. The label tells visitors what they will find and warns them about the new tab.

For email, an address such as `mailto:mira@example.com` asks the visitor's configured email app to compose a message; it does not send anything. A relative file link with `download`, such as `<a href="mira-resume.pdf" download>Download Mira's resume PDF</a>`, asks the browser to save a file. It does not create that file. The download attribute is generally limited to same-origin, blob, or data URLs, and browser settings can affect the result.

In this exercise, `https://example.com/portfolio`, `https://example.com/projects`, and `sam-rivera-resume.pdf` are placeholders. Do not expect them to display Sam's work or download a real resume. Replace them with hosted resources before publishing; no PDF is supplied.

## Add the project illustration

The starter includes an image below the existing resume, ready to move into main. It uses a data URL, so you do not need an image upload. A figure groups the image with a visible caption; its alt text describes the illustration for someone who cannot see it. You practiced those relationships on the garden page.

## Your Tasks

1. Move the supplied image into a `<figure>` inside `<main>` and add alt text describing the Makers Fair sign.
2. Add a nonempty `<figcaption>` directly inside that figure, before or after the image.
3. Inside main, add a link labeled with `portfolio` to `https://example.com/portfolio` with `target="_blank"` and `rel="noopener"`; mention the new tab in its text.
4. Inside main, add a separate link labeled with `projects` to `https://example.com/projects` with the same new-tab attributes and a new-tab notice in its text.
5. Add a labeled `mailto:sam.rivera@example.com` link inside the resume's main region or footer.
6. Add a labeled link to `sam-rivera-resume.pdf` with the `download` attribute inside main or the footer.

Edit `index.html`, Run, then Submit. Read the page from the name through the footer. The added image should have both useful alt text and a visible caption, and each link should explain its action. You do not need to open external pages, launch an email app, or download a file to complete the checks.

Before publishing a real resume, replace the sample contact details and destinations, test the hosted PDF, and check keyboard navigation. Passing this exercise verifies the authored HTML, not the availability of the linked resources.

You now have the content and reading order of a complete page. Continue with CSS to work on type, spacing, colors, and layouts without changing what these elements mean. JavaScript comes after CSS; later, the DOM course will use vanilla JavaScript to find and update these same elements. Neither a framework nor custom JavaScript is needed for the HTML controls you have used here.
