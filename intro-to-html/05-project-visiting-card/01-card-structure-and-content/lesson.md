---
title: Project 1 - Visiting Card Structure
slug: visiting-card-structure
order: 1
language: html
summary: Build the HTML structure for a visiting card with profile and contact details.
seo_title: "Build an HTML Visiting Card | Introduction to HTML"
seo_description: Create an HTML visiting card with a name, role, profile image, contact list, div containers, and spans.
seo_keywords:
  - HTML visiting card
  - HTML profile card
  - div
  - span
  - HTML contact list
  - HTML project
validationRules: []
hints:
  - "Use <div> containers to group card blocks (profile, role, contact)."
  - "Use <span> for small inline details like labels and values."
  - "Add profile image with meaningful alt text."
  - "A visiting card should include name, role, and at least one contact method."
---

# Project 1: Create a Visiting Card (Structure)

## Mission

The neighborhood skills map is collecting profiles for people who can help at community events. Build a visiting card for one contributor so someone can see their name, role, portrait, and contact details at a glance.

## What you'll build

A single card with a name, a role, an accessible profile image, and a contact list that uses inline labels and values.

## Build the card in layers

Start with one outer `<div class="card">`. That wrapper keeps the card's pieces together. Place the person's name in an `<h1>` and their role in a paragraph.

```html
<div class="card">
    <h1>Samira Holt</h1>
    <p>Community map illustrator</p>
</div>
```

Add a profile image with text that describes the image, not just the filename. Then use a second `<div>` for a contact list. Inside each list item, `<span>` can keep a short label separate from its value.

```html
<div class="contact">
    <ul>
        <li><span>Email:</span> samira@example.com</li>
        <li><span>Area:</span> River district</li>
    </ul>
</div>
```

## Checkpoint

Run the page. You should see one card containing a name, a role, an image, and a short contact list. If contact details appear outside the card, check that the contact `<div>` closes before the outer card closes.

## Your Tasks

1. Add one outer card container using `<div class="card">`.
2. Add an `<h1>` with your name and a `<p>` with your role/title.
3. Add an `<img>` profile image with non-empty `alt` text.
4. Add a contact block using another `<div>` containing a `<ul>` with at least 2 `<li>` items.
5. In at least 2 list items, use `<span>` to separate label and value (example: `Email:` and the email address).

## Payoff

The map now has a clear contributor card that is ready for real contact links.
