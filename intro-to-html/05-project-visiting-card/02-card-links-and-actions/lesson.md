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
  - "External links should open in new tab with target=\"_blank\"."
---

# Project 1: Visiting Card (Links and Actions)

## Mission

The contributor card is useful only if a visitor can act on it. Add direct ways to email, call, and view the contributor's work, plus one clear next step. In the preview, each action should look like a link a visitor can use.

## What you'll build

A visiting card with four usable action links: email (mailto:), phone (tel:), external portfolio (opens in new tab), and a clear call-to-action.

## Link to an action

An anchor can open an email app or phone app when its `href` starts with `mailto:` or `tel:`.

```html
<a href="mailto:samira@example.com">Email Samira</a>
<a href="tel:+15551234567">Call Samira</a>
```

For a portfolio on another site, use its complete URL. `target="_blank"` opens it in a new tab.

```html
<a href="https://example.com" target="_blank">View portfolio</a>
```

Use words that describe the destination or action. A call-to-action can still be an ordinary anchor; its label should tell the visitor what happens next.

```html
<a href="mailto:samira@example.com">Ask about a map project</a>
```

## Checkpoint

Run the page and inspect the links. The email link should begin with `mailto:`, the phone link with `tel:`, and the external portfolio link should open in a new tab. If a link is plain text, make sure it is inside `<a>` and has an `href`.

## Your Tasks

1. Add an email action link using `mailto:`.
2. Add a phone action link using `tel:`.
3. Add one external portfolio or LinkedIn link opening in new tab.
4. Add one call-to-action button-like link (for example: `Hire Me`).

## Payoff

The visiting card now turns a quick introduction into useful, visible actions.