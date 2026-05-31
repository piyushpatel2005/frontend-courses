---
title: Input Types
slug: input-types
order: 2
language: html
validationRules: []
hints:
  - "type=\"number\" accepts only numeric input and supports min, max, and step attributes."
  - "type=\"date\" shows a native date picker in modern browsers."
  - "type=\"range\" renders a slider — use min, max, and step to control the range."
  - "type=\"color\" shows a colour picker. The value is a hex colour like #ff0000."
---

# Input Types

HTML5 introduced many specialised `<input>` types that trigger appropriate virtual keyboards on mobile and enable built-in validation.

## Text-based types

```html
<input type="text"     name="username"   placeholder="Username" />
<input type="email"    name="email"      placeholder="you@example.com" />
<input type="password" name="password"   placeholder="Password" />
<input type="url"      name="website"    placeholder="https://example.com" />
<input type="search"   name="q"          placeholder="Search..." />
<input type="tel"      name="phone"      placeholder="+1 555 123 4567" />
```

## Numeric types

```html
<input type="number" name="qty" min="1" max="100" step="1" value="1" />

<!-- Slider -->
<input type="range" name="volume" min="0" max="10" step="1" />
```

## Date and time types

```html
<input type="date"          name="birthday" />
<input type="time"          name="appointment" />
<input type="datetime-local" name="event" />
<input type="month"         name="billing-month" />
<input type="week"          name="sprint" />
```

## Other types

```html
<!-- Colour picker -->
<input type="color" name="theme-color" value="#336699" />

<!-- File upload -->
<input type="file" name="avatar" accept="image/*" />

<!-- Hidden field (not visible, still submitted) -->
<input type="hidden" name="csrf_token" value="abc123" />

<!-- Buttons -->
<input type="submit" value="Submit" />
<input type="reset"  value="Reset" />
<input type="button" value="Click me" />
```

## Type summary table

| Type | Validates | Mobile keyboard |
|------|-----------|-----------------|
| `text` | None | Standard |
| `email` | Must contain @ | Email layout |
| `url` | Must start with scheme | URL layout |
| `tel` | None (format varies) | Numeric/phone |
| `number` | Must be numeric | Numeric |
| `search` | None | Search layout |
| `date` | Must be valid date | Date picker |
| `color` | Must be valid hex | Colour picker |

## Exercise

Build a form that uses at least **5 different** input types:

1. A `text` field for a username.
2. An `email` field.
3. A `number` field with `min`, `max`, and `step` attributes.
4. A `date` field.
5. A `color` field.
6. A submit button.
