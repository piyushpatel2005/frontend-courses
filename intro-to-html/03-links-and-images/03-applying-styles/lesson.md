---
title: Applying Styles to HTML
slug: applying-styles
order: 3
language: html
validationRules: []
hints:
  - "Inline styles go directly on an element: <p style=\"color: red;\">text</p>"
  - "The <style> tag lives inside <head> and holds CSS for the whole page."
  - "An external stylesheet is linked with: <link rel=\"stylesheet\" href=\"style.css\" />"
  - "External stylesheets are preferred — they separate content from presentation and can be reused."
---

# Applying Styles to HTML

HTML provides three ways to apply CSS styles to a page. Understanding how each works helps you choose the right approach.

## 1. Inline styles

Apply a style directly to a single element using the `style` attribute:

```html
<p style="color: blue; font-size: 18px;">This text is blue and slightly larger.</p>
```

**When to use it:** Quick one-off overrides, or when dynamically applying styles via JavaScript.  
**Downside:** Hard to maintain — styles scattered throughout the HTML are difficult to update consistently.

## 2. The `<style>` tag (internal stylesheet)

Put CSS rules inside a `<style>` block in the `<head>`:

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

**When to use it:** Single-page projects or when you want styles self-contained in one file.  
**Downside:** Styles can't be shared across multiple HTML pages.

## 3. External stylesheet (`<link>`)

Create a separate `.css` file and link it from the `<head>`:

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

**When to use it:** Any real-world project with more than one page.  
**Benefits:** Single source of truth for styles, easy caching by browsers.

## Which to choose?

| Method | Scope | Best for |
|--------|-------|----------|
| Inline | One element | Quick overrides, dynamic JS styles |
| `<style>` tag | One page | Small demos, email templates |
| External file | Whole site | All real projects |

## Exercise

You have a starter `index.html` linked to `style.css` (already in the same folder). Your tasks:

1. Add an inline style to the `<h1>` that sets `color` to any colour you choose.
2. Add a `<style>` block in `<head>` that styles `p` — change the `font-size` to at least `16px`.
3. In `style.css`, add a rule that sets a `background-color` on `body`.
