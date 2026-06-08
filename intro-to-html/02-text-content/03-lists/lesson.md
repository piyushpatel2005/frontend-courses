---
title: HTML Lists
slug: lists
order: 3
language: html
validationRules: []
hints:
  - "Use <ol> for ordered (numbered) lists and <ul> for unordered (bullet) lists."
  - "Each item in any list is wrapped in an <li> tag."
  - "For a description list, use <dl> with <dt> for the term and <dd> for the description."
  - "Lists can be nested: put a <ul> or <ol> inside an <li> to create sub-lists."
---

# HTML Lists

Lists are everywhere on the web — navigation menus, step-by-step guides, shopping lists, glossaries. HTML has three list types.

## 1. Ordered List (`<ol>`)

An ordered list numbers its items automatically. Use it when **sequence matters**:

```html
<ol>
    <li>Preheat the oven to 180°C</li>
    <li>Mix the ingredients</li>
    <li>Pour into a baking tin</li>
    <li>Bake for 30 minutes</li>
</ol>
```

Output:
1. Preheat the oven to 180°C  
2. Mix the ingredients  
3. Pour into a baking tin  
4. Bake for 30 minutes

## 2. Unordered List (`<ul>`)

An unordered list uses bullets (or other markers). Use it when **order does not matter**:

```html
<ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Orange</li>
</ul>
```

Output:
- Apple  
- Banana  
- Orange

## 3. Description List (`<dl>`)

A description list pairs terms with their definitions. Use it for glossaries, FAQs, and metadata:

```html
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language — structures web content.</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets — styles web content.</dd>
    <dt>JavaScript</dt>
    <dd>A programming language that adds interactivity.</dd>
</dl>
```

| Tag | Role |
|-----|------|
| `<dl>` | Description List wrapper |
| `<dt>` | Description Term |
| `<dd>` | Description Details (indented by default) |

## Nested lists

You can nest a list inside an `<li>` to create sub-items:

```html
<ul>
    <li>Front-end
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </li>
    <li>Back-end
        <ul>
            <li>Python</li>
            <li>Node.js</li>
        </ul>
    </li>
</ul>
```

## Exercise

Build a page that uses all three list types:

1. Add an `<ol>` to the page.
2. Inside your `<ol>`, add at least **3 `<li>`** steps.
3. Add a `<ul>` to the page.
4. Inside your `<ul>`, add at least **3 `<li>`** items.
5. Add a `<dl>` to the page.
6. Inside your `<dl>`, add at least **2 `<dt>`** terms (with matching `<dd>` definitions).
