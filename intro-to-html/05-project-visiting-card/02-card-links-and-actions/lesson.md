---
title: Project 1 - Visiting Card Actions
slug: visiting-card-actions
order: 2
language: html
summary: Add email, phone, portfolio, and call-to-action links to an HTML visiting card.
seo_title: Add Links to an HTML Visiting Card
seo_description: Learn to add mailto, tel, external portfolio, and call-to-action links to an HTML visiting card.
seo_keywords: [HTML links, mailto link, tel link, external links, HTML visiting card]
validationRules: []
hints:
  - "Use anchor links for email (mailto:) and phone (tel:)."
  - "For this portfolio link, use target=\"_blank\" to request a new tab."
---

# Project 1: Visiting Card (Links and Actions)

## Mission

Riya’s card already shows her portrait and contact list from the previous lesson. Add ways to email her, call her, and view her work. Keep the existing card; edit only the empty action area in `index.html`. If you brought your own contributor forward, use that person’s email address and phone number.

## What you'll build

A visiting card with four usable action links: email (mailto:), phone (tel:), external portfolio (opens in new tab), and a clear call-to-action.

## Link to an action

An anchor can open an email app or phone app when its `href` starts with `mailto:` or `tel:`. For this exercise, write the phone link with digits and an optional leading `+`; leave spaces and punctuation in the visible contact list, not in the link.

```html
<a href="mailto:samira@example.com">Email Samira</a>
<a href="tel:5550100">Call Samira</a>
```

For a portfolio on another site, use its complete URL. Links normally stay in the same tab; this project asks you to request a new tab with `target="_blank"`. `rel="noopener noreferrer"` prevents access to the opening page and omits referrer information.

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">View portfolio</a>
```

The supplied `<nav>` groups the action links; `aria-label` gives that group a name for assistive technology. You will study these semantic elements later. Use words that describe the destination or action. A call-to-action can still be an ordinary anchor; its label should tell the visitor what happens next.

```html
<a href="mailto:samira@example.com">Ask about a map project</a>
```

## Checkpoint

Run the page and inspect the links. The email link should begin with `mailto:`, the phone link with `tel:`, and the external portfolio link should open in a new tab. If a link is plain text, make sure it is inside `<a>` and has an `href`.

## Your Tasks

1. In the supplied card’s `<nav>`, add an email link whose `mailto:` address matches the contact list.
2. Add a phone link whose `tel:` number matches the contact list (digits, optionally starting with `+`).
3. Add an HTTPS portfolio link that opens in a new tab with `target="_blank"` and `rel="noopener noreferrer"`.
4. Add a separate invitation link with `class="contact-invitation"`, an invitation of at least two words, and a non-empty `mailto:`, `tel:`, or HTTPS destination.

## Payoff

Submit to check your links. You do not need to open an email or phone app or contact anyone. The example.com portfolio is a placeholder, not Riya’s real website.
