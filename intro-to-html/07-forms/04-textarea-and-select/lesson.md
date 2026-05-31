---
title: Textarea and Select
slug: textarea-and-select
order: 4
language: html
validationRules: []
hints:
  - "<textarea> is NOT self-closing — it needs a closing tag: <textarea></textarea>"
  - "Use rows and cols attributes on <textarea> to set its default visible size."
  - "The selected attribute on an <option> pre-selects that option in a <select>."
  - "Use <optgroup label=\"...\"> inside <select> to group related options."
---

# Textarea and Select

Beyond basic inputs, HTML forms offer multi-line text areas and dropdown selects for richer data entry.

## `<textarea>`

A `<textarea>` is for multi-line text input — feedback, descriptions, messages:

```html
<label for="message">Your message</label>
<textarea id="message" name="message" rows="5" cols="40" placeholder="Type your message here..."></textarea>
```

Key points:
- `rows` and `cols` set the default visible size (CSS `width`/`height` are usually preferred)
- The default value goes *between* the tags (not in a `value` attribute)
- It is **not** self-closing — always write the closing `</textarea>`

## `<select>` dropdown

A `<select>` renders a dropdown menu:

```html
<label for="country">Country</label>
<select id="country" name="country">
    <option value="">-- Please choose --</option>
    <option value="us">United States</option>
    <option value="uk" selected>United Kingdom</option>
    <option value="ca">Canada</option>
</select>
```

- `selected` pre-selects an option
- An `<option value="">` with empty value is a useful placeholder
- The `value` attribute is what gets sent to the server

## Multiple selection

Add `multiple` and `size` to allow selecting several options:

```html
<select name="skills" multiple size="4">
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <option value="js">JavaScript</option>
    <option value="python">Python</option>
</select>
```

Hold `Ctrl`/`Cmd` to select multiple items.

## Grouping options: `<optgroup>`

```html
<select name="course">
    <optgroup label="Front-end">
        <option value="html">HTML</option>
        <option value="css">CSS</option>
    </optgroup>
    <optgroup label="Back-end">
        <option value="python">Python</option>
        <option value="node">Node.js</option>
    </optgroup>
</select>
```

## `<datalist>` — suggested values

`<datalist>` provides autocomplete suggestions for a text input without restricting to those values:

```html
<label for="browser">Browser</label>
<input list="browsers" id="browser" name="browser" />

<datalist id="browsers">
    <option value="Chrome">
    <option value="Firefox">
    <option value="Safari">
    <option value="Edge">
</datalist>
```

## Exercise

1. Add a `<textarea>` for a bio field (at least 4 rows).
2. Add a `<select>` dropdown for a favourite language (at least 4 options, one pre-selected).
3. Add a `<datalist>` for a city field with at least 3 city suggestions.
