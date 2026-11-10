---
title: "Contact Form Actions"
slug: contact-form-actions
order: 2
language: html
summary: Add interests, contact preferences, consent, and clear labels to a contact form.
seo_title: Add Choices to an HTML Contact Form
seo_description: Add checkboxes, radio buttons, consent, and labels to an HTML contact form.
seo_keywords:
  - HTML contact form
  - HTML checkboxes
  - radio buttons
  - consent checkbox
validationRules: []
hints:
  - "Use checkboxes for multiple interests and radio buttons for one preferred contact method."
  - "Ensure submit control is inside the form."
---

The Riverlight form can now collect a message. Keep its supplied Name, Email, Topic, Message, and submit controls; they are earlier work, not new task credit.

In `index.html`, add interests, an optional phone number, one preferred reply method, and consent before the existing button. These choices help a future receiving service route the request; HTML alone will not process it.

## One idea: names define a radio group

Checkboxes allow several independent answers. Add an optional phone field so a visitor who requests a call can supply a number; `type="tel"` offers a phone-friendly keyboard but does not check the number’s format. Radio buttons share one `name` when they represent a single decision.

```html
<fieldset>
    <legend>Preferred reply method</legend>
    <input type="radio" id="reply-email" name="reply-method" value="email" />
    <label for="reply-email">Email</label>
    <input type="radio" id="reply-phone" name="reply-method" value="phone" />
    <label for="reply-phone">Phone</label>
</fieldset>
```

Use a separate checkbox for consent and add `required` when it must be accepted before sending. Leave it unchecked so the visitor makes the choice. Every checkbox and radio needs visible label text, just like a text field. Give the choices non-empty `name` and `value` attributes; unchecked checkboxes are not included in submitted form data.

## Check your page

Run the form. You should be able to select several interests but only one reply method. Try to submit without consent: the browser should stop the request. If both reply options remain checked, make sure they use the same `name`. This HTML-only preview has no server to deliver messages or check that someone choosing a phone reply also supplied a number.

## Your Tasks

1. Add two optional interest checkboxes with `name="interests"` and values `booking` and `volunteering`.
2. Add an optional phone input (`type="tel"`) with a non-empty `name` and visible connected label.
3. Add two reply-method radio buttons with values `email` and `phone`.
4. Give both reply-method radios the same non-empty `name` so only one stays selected.
5. Add a separate required consent checkbox with `name="consent"` and `value="yes"`; leave it unchecked.
6. Give both interest checkboxes visible labels, wrapping each input or using matching `for` and `id`.
7. Give both reply-method radios visible labels in the same way.
8. Give the consent checkbox a visible label explaining agreement to be contacted.
9. In the existing Topic select, group Room booking and Volunteering under `<optgroup label="Community">`, and Accessibility request under `<optgroup label="Support">`; keep the connected Topic label and all three original option values.

Submit to check the new choices. The option groups organize the existing topic choices without replacing the label for the whole menu. This completes the contact page’s HTML; it does not configure delivery or store consent. In the next module, you will use the hall setting again to study media rather than keep extending this form.
