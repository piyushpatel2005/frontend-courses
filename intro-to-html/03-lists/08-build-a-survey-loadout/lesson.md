---
title: Build a Survey Loadout
slug: build-a-survey-loadout
order: 8
language: html
summary: Practice ordered, unordered, and description lists in a Meridian river-survey loadout.
seo_title: "HTML Lists: Ordered, Unordered, and Description Lists | Introduction to HTML"
seo_description: Build a numbered departure sequence, a bulleted survey kit, and a two-term glossary with HTML list elements.
seo_keywords:
  - HTML lists
  - ordered list
  - unordered list
  - description list
  - nested lists
validationRules: []
hints:
  - "Use <ol> for ordered (numbered) lists and <ul> for unordered (bullet) lists."
  - "Each item in an ordered or unordered list is wrapped in an <li> tag."
  - "For a description list, use <dl> with <dt> for the term and <dd> for the description."
  - "Lists can be nested: put a <ul> or <ol> inside an <li> to create sub-lists."
---

A crew member is preparing a daytime river survey rather than the previous example’s night rescue. The document shell in `index.html` is supplied; its body is empty. Write your own departure steps, kit items, and two survey terms. Their jobs determine which list to use.

## Choose a list by its job

The preceding review's launch steps used `<ol>` because sequence mattered. Its kit used `<ul>` because the items can be packed in any order. A `<dl>` pairs each `<dt>` term with its `<dd>` description. Each ordered or unordered list item goes in an `<li>`.

For a different brief, a supply list could look like this:

```html
<ul>
  <li>Water flask</li>
  <li>Field notebook</li>
</ul>
<dl>
  <dt>Relay</dt><dd>Passes a message to the bridge.</dd>
</dl>
```

## Check your page

Preview the page. The setup steps should be numbered, the supplies should have bullets, and each term in the description list should be followed by its explanation. If the sequence is not numbered, inspect the outer list tag first.

Edit `index.html`, press **Run** to inspect your page, then **Submit** to check the tasks. You can submit after each step; later tasks may still be incomplete.

## Your Tasks

Build a page that uses all three list types:

1. Add an `<ol>` to the page.
2. Inside your `<ol>`, add at least **3 non-empty `<li>`** steps.
3. Add a `<ul>` to the page.
4. Inside your `<ul>`, add at least **3 non-empty `<li>`** items.
5. Add a `<dl>` to the page.
6. Inside your `<dl>`, add at least **2 non-empty `<dt>`** terms, each followed by a matching `<dd>` definition.

The crew now has steps, supplies, and short explanations in the right list shapes.
