---
title: Checkboxes and Radio Buttons
slug: checkboxes-and-radio
order: 3
language: html
validationRules: []
hints:
  - "Group radio buttons by giving them the same name attribute — only one in the group can be selected."
  - "Use checked to pre-select a checkbox or radio button."
  - "Checkboxes are independent — any number can be selected. Use different name values for each."
  - "A label wrapping the input is the easiest way to make the label text clickable."
---

# Checkboxes and Radio Buttons

Checkboxes and radio buttons let users make choices. The key difference:

| Type | Selection | Use case |
|------|-----------|----------|
| Checkbox | Any number (zero to all) | Preferences, agreements, multi-select |
| Radio | Exactly one from a group | Choose one from a list |

## Checkboxes

```html
<p>What technologies do you use?</p>

<label>
    <input type="checkbox" name="tech" value="html" />
    HTML
</label>
<label>
    <input type="checkbox" name="tech" value="css" />
    CSS
</label>
<label>
    <input type="checkbox" name="tech" value="js" checked />
    JavaScript (pre-checked)
</label>
```

- Each checkbox has the same `name` but different `value`.
- The server receives all checked values.
- `checked` attribute pre-selects a box.

## Radio buttons

```html
<p>What is your experience level?</p>

<label>
    <input type="radio" name="level" value="beginner" checked />
    Beginner
</label>
<label>
    <input type="radio" name="level" value="intermediate" />
    Intermediate
</label>
<label>
    <input type="radio" name="level" value="advanced" />
    Advanced
</label>
```

- All radio buttons in a group share the **same `name`**.
- Only one can be selected at a time.
- `value` is what gets sent to the server when the form is submitted.

## Accessibility tip

Wrap related inputs in a `<fieldset>` with a `<legend>` for screen readers:

```html
<fieldset>
    <legend>Choose your role</legend>
    <label><input type="radio" name="role" value="student" /> Student</label>
    <label><input type="radio" name="role" value="teacher" /> Teacher</label>
</fieldset>
```

## Exercise

1. Add a `<fieldset>` with a `<legend>` "Your Interests" containing **at least 3 checkboxes**.
2. Add another `<fieldset>` "Experience Level" with **3 radio buttons** (Beginner, Intermediate, Advanced). Pre-select "Beginner".
3. Add a submit button.
