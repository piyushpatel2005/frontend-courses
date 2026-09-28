---
title: "Exercise: Build a Crew member Loadout"
slug: exercise-lists
order: 6
language: html
summary: Practice ordered, unordered, and description lists in the Meridian crew’s rescue loadout.
seo_title: "HTML Lists: Ordered, Unordered, and Description Lists | Introduction to HTML"
seo_description: Learn how to build ordered, unordered, description, and nested lists with HTML list elements.
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

# HTML Lists

## Mission

The Meridian crew is packing for a night rescue. The launch sequence must be numbered, the rescue kit needs bullets, and two mission terms need short explanations.

## What you'll build

A page with three list types: numbered launch steps, a bulleted rescue kit, and a glossary pairing mission terms with their meanings.

## Choose a list by its job

The preceding demo's launch steps used `<ol>` because sequence mattered. Its kit used `<ul>` because the items can be packed in any order. A `<dl>` pairs each `<dt>` term with its `<dd>` description. Each ordered or unordered list item goes in an `<li>`.

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

## Checkpoint

Preview the page. The setup steps should be numbered, the supplies should have bullets, and each term in the description list should sit next to its explanation. If the sequence is not numbered, inspect the outer list tag first.

## Your Tasks

Build a page that uses all three list types:

1. Add an `<ol>` to the page.
2. Inside your `<ol>`, add at least **3 `<li>`** steps.
3. Add a `<ul>` to the page.
4. Inside your `<ul>`, add at least **3 `<li>`** items.
5. Add a `<dl>` to the page.
6. Inside your `<dl>`, add at least **2 `<dt>`** terms, each followed by a matching `<dd>` definition.

## Payoff

The crew now has steps, supplies, and short explanations in the right list shapes.
