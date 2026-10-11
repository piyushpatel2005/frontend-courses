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

CSS controls presentation. A declaration such as `color: blue;` has a property (`color`), a colon, a value (`blue`), and a semicolon. In a stylesheet, a selector such as `p` chooses the elements, and braces surround their declarations. `px` means pixels. You will use only color, font size, and background color here; the CSS course covers layout later.

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
| External file | Whole site | Styles shared by several pages |

## Checkpoint

Preview after each change. The heading color should affect only the `<h1>`, the internal rule should change paragraph text, and the external stylesheet should change the page background. This preview injects `style.css` automatically, so removing the `<link>` does not demonstrate a broken connection here. Keep the supplied link: an ordinary standalone page needs it. For this exercise, check the CSS rule and selected editor tab if a style does not change.

Edit `index.html`, press **Run** to inspect your page, then **Submit** to check the tasks. You can submit after each step; later tasks may still be incomplete.

## Your Tasks

The starter `index.html` already links to `style.css`. Use the HTML tab for steps 1–2 and the CSS tab for step 3:

1. Add an inline style to the `<h1>` that sets `color` to any colour you choose.
2. Add a `<style>` block in `<head>` that styles `p` — change the `font-size` to at least `16px`.
3. In `style.css`, add a `body` rule with a visible `background-color` (not transparent or white).

## Payoff

The book-exchange notice now shows why scope matters: a local override, a page rule, and a reusable stylesheet can work together.
