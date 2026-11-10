---
title: "Form Validation And Submission"
slug: form-validation-and-submission
order: 9
language: html
lesson_type: coding
runtime: srcdoc
summary: Choose GET or POST deliberately, name submitted answers, and distinguish
  submit and reset buttons while practicing native validation.
seo_title: Form validation and submission | Introduction to HTML
seo_description: Choose GET or POST deliberately, name submitted answers, and distinguish
  submit and reset buttons while practicing native validation.
seo_keywords:
- HTML GET POST
- HTML required
- HTML minlength
- submit button
- reset button
---

You can collect text and choices. Now trace what happens between filling a form and sending its answers. A workshop search is a useful small example: its search words are not private, and the result could have a shareable address.

## Choose how answers travel

With `method="get"`, the browser adds named answers to the destination URL’s query string. A library search with `name="q"` and the answer `maps` might request `/catalog?q=maps`. An unnamed input has no key to include. GET is the default when a form omits `method`, but writing it explicitly makes this choice clear.

Use GET for retrieving results, not for actions that change stored data. POST sends the answers in the request body instead of adding them to the URL. A contact message normally uses POST, as your next project will. Neither method encrypts data by itself: a real service still needs HTTPS and server-side validation. Do not put passwords or other private answers into search URLs.

## Let the browser check first

`required` rejects an empty answer. `minlength="3"` requests at least three characters of user-entered text; use it with `required` when empty text must fail too. For example:

```html
<label for="shelf-search">Shelf search (at least 4 characters)</label>
<input id="shelf-search" name="shelf" type="search" required minlength="4">
```

The browser can let someone type an incomplete answer and report the problem when they try to submit. Validation does not prove the answer is truthful or safe; a receiving service must check it again. Do not add `novalidate` to this exercise’s form or `formnovalidate` to its submit button, since those would bypass the checks.

## Make button behavior explicit

Inside a form, an ordinary `<button>` defaults to submission. Use `type="submit"` for the action that submits, `type="button"` for a button that must not submit, and `type="reset"` only when restoring initial field values is genuinely useful. Reset does not always mean “empty”: it returns controls to their supplied defaults. It can erase work, so most real forms do not need a reset button.

The starter has a labeled workshop-search field and two buttons with deliberately wrong types. The action path is supplied. Edit `index.html` without adding JavaScript. This lesson has no search service; the form must not send a completed request.

## Your Tasks

1. Set the supplied form’s `method` explicitly to `get`.
2. Give its search input `name="q"` so the search words have a submission key.
3. Make that input required with a minimum length of three characters using `required` and `minlength="3"`.
4. Make the Search workshops button a submit button with `type="submit"`.
5. Make the Reset search button restore the supplied initial values with `type="reset"`.

Run and try Search workshops while the field is empty, then after typing `ab`. The browser should keep you on the form and identify the field. Type `pottery`, then use Reset search to return to the empty starting value. Do not submit the valid search; `/workshops` is only an illustrative destination. Use the course’s **Submit** control, outside the preview, to check the HTML tasks.

The final form challenge combines these choices with the controls you already know.
