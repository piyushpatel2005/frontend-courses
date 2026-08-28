---
title: HTML Forms
slug: html-forms
order: 1
language: html
validationRules: []
hints:
  - "Every input should have a <label> with a for attribute matching the input's id."
  - "The form's action attribute is the URL the data is sent to. method=\"post\" hides data from the URL."
  - "The name attribute on an input is the key sent to the server — don't forget it!"
  - "A submit button can be <button type=\"submit\"> or <input type=\"submit\" value=\"Send\" />."
---

# HTML Forms

Forms allow users to send data to a server — logins, registrations, search boxes, contact forms. Every interactive website uses them.

## Basic form structure

```html
<form action="/submit" method="post">
    <label for="username">Username</label>
    <input type="text" id="username" name="username" placeholder="e.g. jsmith" />

    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="you@example.com" />

    <button type="submit">Sign Up</button>
</form>
```

## The `<form>` element

| Attribute | Description |
|-----------|-------------|
| `action` | URL the form data is sent to (defaults to the current page) |
| `method` | HTTP method: `get` (data in URL) or `post` (data in body) |

Use `method="post"` for any data that modifies the server (logins, registrations, etc.).

## Labels and inputs

Always pair every `<input>` with a `<label>`:

```html
<!-- Linked via for/id -->
<label for="password">Password</label>
<input type="password" id="password" name="password" />

<!-- Or wrap the input inside the label -->
<label>
    Password
    <input type="password" name="password" />
</label>
```

Linked labels make inputs clickable and are essential for screen reader accessibility.

## Common input types

```html
<input type="text"     name="name"     placeholder="Full name" />
<input type="email"    name="email"    placeholder="you@example.com" />
<input type="password" name="password" placeholder="Min 8 characters" />
<input type="number"   name="age"      min="0" max="120" />
<input type="submit"   value="Send" />
```

## Other useful attributes

| Attribute | Effect |
|-----------|--------|
| `required` | Field must be filled before submission |
| `placeholder` | Grey hint text inside the field |
| `value` | Default value for the field |
| `disabled` | Field is visible but not editable |
| `readonly` | Field is editable but not sent |
| `autocomplete` | Controls browser autofill (`on` / `off`) |
| `minlength` / `maxlength` | Character limits |

## Global attributes: `id` and `class`

You may have noticed `id` on the `<input>` elements above. `id` and `class` are **global attributes** — they can be added to any HTML element.

**`id`** gives an element a unique identifier on the page. No two elements should share the same `id`. Forms use `id` to link `<label>` elements to their `<input>` via the `for` attribute:

```html
<label for="email">Email</label>
<input type="email" id="email" name="email" />
```

**`class`** assigns one or more reusable labels to an element. Unlike `id`, many elements can share the same class. Classes are mainly used by CSS and JavaScript to target groups of elements:

```html
<p class="hint">Your password must be at least 8 characters.</p>
<p class="hint">Use a mix of letters and numbers.</p>
```

```html
<h1 id="page-title" class="hero-heading">Welcome</h1>
```

> An element can have both an `id` and a `class`. Use `id` when you need to identify one specific element; use `class` when you want to style or select a group.

## Exercise

Build a contact form with:

1. A `<form>` with `method="post"`.
2. A **Name** field (`type="text"`, required).
3. An **Email** field (`type="email"`, required).
4. A **Password** field (`type="password"`).
5. A submit button.
6. Every input must have a matching `<label>`.
