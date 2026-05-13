---
title: Elements, Tags, and Attributes
slug: elements-tags-attributes
order: 2
language: html
validationRules: []
hints:
  - "Remember: a tag has angle brackets, e.g. <p>. An element is the opening tag + content + closing tag."
  - "Add the attribute inside the opening tag: <h1 id=\"main-heading\">Title</h1>"
  - "Self-closing tags like <br> and <img> do not need a closing tag."
---

# Elements, Tags, and Attributes

Although HTML is plain text, it needs structure so browsers understand it. That structure is provided by three things: **tags**, **elements**, and **attributes**.

## Tags

HTML tags are keywords surrounded by angle brackets, like `<html>`. Most tags come in pairs — an opening tag and a closing tag:

```html
<html> ... </html>
```

The closing tag has a forward slash before the tag name. Some tags are **self-closing** — they have no content and no closing tag:

```html
<br>
<img src="photo.jpg" alt="A photo">
```

## A proper HTML5 document

Here is a complete, standards-compliant HTML5 page:

```html
<!DOCTYPE html>
<html>
<body>
    <h1>Hello World</h1>
</body>
</html>
```

Breaking it down:

| Tag | Purpose |
|-----|---------|
| `<!DOCTYPE html>` | Tells the browser this is an HTML5 document |
| `<html>` | Root element — wraps everything |
| `<body>` | The content visible in the browser window |
| `<h1>` | A top-level heading |

Indenting nested tags is not required but makes the code much easier to read.

## Elements

An **element** is the combination of an opening tag, its content, and its closing tag:

```html
<tagname>content</tagname>
```

Elements can be nested — one element can contain others:

```html
<body>
    <h1>Hello World</h1>
</body>
```

Everything between `<body>` and `</body>` is part of the body element.

## Attributes

Attributes add extra information to a tag. They are always written inside the opening tag as `name="value"` pairs:

```html
<a href="https://www.example.com">Visit My Website</a>
```

The `href` attribute tells the browser where the link goes. Some attributes — like `id` — can be applied to any element:

```html
<h1 id="main-heading">Hello World</h1>
<p id="intro">This is a paragraph.</p>
```

The `id` uniquely identifies an element in the page. Other attributes are element-specific, like `src` on `<img>`:

```html
<img src="photo.jpg" alt="A descriptive caption" />
```

> You do not need to memorise every attribute. Your editor's auto-complete and the documentation will guide you when you need them.

## Exercise

The starter file has a bare `<body>`. Your tasks:

1. Add an `<h1>` with the text **"My First Page"** and give it an `id` of `"title"`.
2. Add a `<p>` tag below it with any text you like.
3. Add a self-closing `<br>` tag between two sentences inside the paragraph.
