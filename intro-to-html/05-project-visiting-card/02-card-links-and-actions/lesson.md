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

Riya’s portrait and contact list are carried forward from the previous lesson. Keep that card and edit only the empty action area in `index.html`. If you brought your own contributor forward, use their displayed email and phone details in the links.

Add email, phone, portfolio, and invitation links so visitors can tell what each action would do. You do not need to activate external links or contact anyone.

## Link to an action

An anchor can open an email app or phone app when its `href` starts with `mailto:` or `tel:`. For this exercise, write the phone link with digits and an optional leading `+`; leave spaces and punctuation in the visible contact list, not in the link.

```html
<a href="mailto:samira@example.com">Email Samira</a>
<a href="tel:5550100">Call Samira</a>
```

For a portfolio on another site, use its complete URL. Links normally stay in the same tab; this project asks you to request a new tab with `target="_blank"`. Modern browsers give ordinary `_blank` links implicit `noopener` behavior. We write `rel="noopener"` explicitly to state that intent; adding `noreferrer` also omits referrer information. This project asks for both tokens, but withholding the referrer is a separate privacy choice.

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">View portfolio</a>
```

The supplied `<nav>` groups the action links; `aria-label` gives that group a name for assistive technology. You will study these semantic elements later. Use words that describe the destination or action. A call-to-action can still be an ordinary anchor; its label should tell the visitor what happens next.

```html
<a href="mailto:samira@example.com">Ask about a map project</a>
```

## Check your page

Run the page and inspect the links. The email link should begin with `mailto:`, the phone link with `tel:`, and the external portfolio link should open in a new tab. If a link is plain text, make sure it is inside `<a>` and has an `href`.

## Your Tasks

1. In the supplied card’s `<nav>`, add an email link whose `mailto:` address matches the contact list.
2. Add a phone link whose `tel:` number matches the contact list (digits, optionally starting with `+`).
3. Add an HTTPS portfolio link that opens in a new tab with `target="_blank"` and `rel="noopener noreferrer"`.
4. Add a separate invitation link with `class="contact-invitation"`, an invitation of at least two words, and a non-empty `mailto:`, `tel:`, or HTTPS destination.

Submit to check your links. You do not need to open an email or phone app or contact anyone. The example.com portfolio is a placeholder, not Riya’s real website.
