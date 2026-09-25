---
title: Applying Styles to HTML
slug: applying-styles
order: 3
language: html
summary: Apply CSS with inline styles, internal style blocks, and external stylesheets.
seo_title: "Apply CSS to HTML: Inline, Internal, and External Styles | Introduction to HTML"
seo_description: "Learn the three ways to apply CSS to HTML: inline styles, internal style blocks, and external stylesheets."
seo_keywords:
  - CSS in HTML
  - inline styles
  - internal stylesheet
  - external stylesheet
validationRules: []
hints:
  - "Inline styles go directly on an element: <p style=\"color: red;\">text</p>"
  - "The <style> tag lives inside <head> and holds CSS for the whole page."
  - "An external stylesheet is linked with: <link rel=\"stylesheet\" href=\"style.css\" />"
  - "External stylesheets are preferred — they separate content from presentation and can be reused."
---

# Applying Styles to HTML

## Mission

Give a neighborhood book-exchange notice its first bit of visual hierarchy. Try one one-off heading color, one page-level paragraph rule, and a reusable page background.

## What you'll build

A book-exchange notice with three style scopes: an inline heading color, an internal paragraph rule, and an external background color.

HTML gives you three ways to apply CSS to a page. Knowing the difference helps you choose the right one.

## 1. Inline styles

Add a style directly to one element with the `style` attribute:

```html
<p style="color: blue; font-size: 18px;">This text is blue and slightly larger.</p>
```

**When to use it:** For a quick one-off override or styles applied dynamically with JavaScript.

**Downside:** Styles scattered through HTML are hard to update consistently.

## 2. The `<style>` tag (internal stylesheet)

Put CSS rules in a `<style>` block inside `<head>`:

```html
<head>
    <style>
        h1 {
            color: darkblue;
        }
        p {
            font-family: Arial, sans-serif;
            line-height: 1.6;
        }
    </style>
</head>
```

**When to use it:** For a single-page project or when you want styles in one file.

**Downside:** You cannot share those styles across multiple HTML pages.

## 3. External stylesheet (`<link>`)

Create a separate `.css` file and link to it from `<head>`:

```html
<head>
    <link rel="stylesheet" href="style.css" />
</head>
```

`style.css`:
```css
body {
    font-family: Georgia, serif;
    max-width: 800px;
    margin: 0 auto;
}

h1 {
    color: #333;
}
```

**When to use it:** For a real-world project with more than one page.

**Benefits:** One source of truth for styles and easier browser caching.

## Which to choose?

| Method | Scope | Best for |
|--------|-------|----------|
| Inline | One element | Quick overrides, dynamic JS styles |
| `<style>` tag | One page | Small demos, email templates |
| External file | Whole site | All real projects |

## Checkpoint

Preview after each change. The heading color should affect only the `<h1>`, the internal rule should change paragraph text, and the external stylesheet should change the page background. If the background stays unchanged, check that the stylesheet link points to `style.css`.

## Your Tasks

You have a starter `index.html` linked to `style.css` (already in the same folder). Your tasks:

1. Add an inline style to the `<h1>` that sets `color` to any colour you choose.
2. Add a `<style>` block in `<head>` that styles `p` — change the `font-size` to at least `16px`.
3. In `style.css`, add a rule that sets a `background-color` on `body`.

## Payoff

The book-exchange notice now shows why scope matters: a local override, a page rule, and a reusable stylesheet can work together.
