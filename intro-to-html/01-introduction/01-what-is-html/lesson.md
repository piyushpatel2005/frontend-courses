---
title: What Is HTML? See Tags in Action
slug: what-is-html
order: 1
language: html
summary: See a complete HTML page use headings and paragraphs before writing those tags yourself.
seo_title: "What Is HTML? See Tags in Action | Introduction to HTML"
seo_description: See h1 and p tags rendered in a working HTML page before completing a guided HTML exercise.
seo_keywords: [HTML, HTML tags, h1 tag, p tag, HTML preview]
lesson_type: coding
hints:
  - "This is a completed demo. Read the code and use the preview before moving to the exercise."
---

# What is HTML?

HTML stands for HyperText Markup Language. It labels the parts of a page: a heading, a paragraph, a link. The browser reads those labels and displays the content.

Our first examples come from the survey vessel **Meridian**. You will make short signal pages before trying separate community projects later in the course. You do not need to carry code between lessons.

## Read a tag pair

```html
<p>A transmission has arrived from the survey zone.</p>
```

`<p>` is the opening tag. `</p>` is the closing tag; notice the slash. The tags and the text between them make one **element**. Type the angle brackets as shown, and change the words between them when you want different content.

The completed `index.html` in the editor uses `<h1>` for its main heading and two `<p>` elements for separate paragraphs. Tags tell the browser what each piece is, not just how large to draw it.

## Run and compare

Press **Run**. Find the prominent “Meridian Signal” heading and the two paragraphs below it. In the editor, change only the heading's words, run again, then restore them. This is an ungraded demo.

The surrounding document has two parts:

![The html element contains head for page information and body for visible content.](html-document-structure.svg)

The `<title>` in the head names the document, while the `<h1>` in the body appears on the page. The embedded preview has no separate browser tab to display its title. We will read the rest of that document setup after your first exercise.

Next, write a new arrival signal using the same heading-and-paragraph pattern.
