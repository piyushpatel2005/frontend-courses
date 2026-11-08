---
title: "Applying Styles"
slug: applying-styles
order: 4
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

The walking-club photos had dimensions, but the rest of the browser’s appearance was its default. This short CSS introduction shows where styling can live. The next course will teach CSS in depth.

The supplied book-exchange notice already has a heading, a paragraph, and a link to the empty `style.css`. Use the HTML tab for the first two changes and the CSS tab for the third.

CSS controls presentation. In `color: blue;`, `color` is a property, the colon separates its value, and the semicolon ends the declaration. A stylesheet rule puts declarations inside braces after a selector such as `p`. `px` means pixels. Here you need only color, font size, and background color.

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
            font-size: 20px;
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
    background-color: lavender;
}
```

**When to use it:** For a real-world project with more than one page.

**Benefits:** One source of truth for styles and easier browser caching.

## Which to choose?

| Method | Scope | Best for |
|--------|-------|----------|
| Inline | One element | Quick overrides, dynamic JS styles |
| `<style>` tag | One page | A small single-page prototype |
| External file | Whole site | Styles shared by several pages |

## Check your page

Preview after each change. The heading color should affect only the `<h1>`, the internal rule should change paragraph text, and the external stylesheet should change the page background. This preview injects `style.css` automatically, so removing the `<link>` does not demonstrate a broken connection here. Keep the supplied link: an ordinary standalone page needs it. For this exercise, check the CSS rule and selected editor tab if a style does not change.

Edit `index.html`, press **Run** to inspect your page, then **Submit** to check the tasks. You can submit after each step; later tasks may still be incomplete.

## Your Tasks

The starter `index.html` already links to `style.css`. Use the HTML tab for steps 1–2 and the CSS tab for step 3:

1. Add an inline style to the `<h1>` that sets `color` to any colour you choose.
2. Add a `<style>` block in `<head>` that styles `p` — change the `font-size` to at least `16px`.
3. In `style.css`, add a `body` rule with a visible `background-color` (not transparent or white).

The book-exchange notice now shows why scope matters: a local override, a page rule, and a reusable stylesheet can work together.
