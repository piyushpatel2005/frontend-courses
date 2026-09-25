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
  - "Each item in any list is wrapped in an <li> tag."
  - "For a description list, use <dl> with <dt> for the term and <dd> for the description."
  - "Lists can be nested: put a <ul> or <ol> inside an <li> to create sub-lists."
---

# HTML Lists

## Mission

the Meridian crew is packing for a night rescue. The launch sequence must be numbered, the rescue kit needs bullets, and two mission terms need short explanations.

## What you'll build

A page with three list types: a numbered setup checklist, a bulleted supplies list, and a tiny glossary pairing terms with their meanings.

## 1. Ordered list (`<ol>`)

An ordered list numbers its items automatically. Use one when **sequence matters**:

```html
<ol>
    <li>Arrive early and claim a spot</li>
    <li>Unpack tables and chairs</li>
    <li>Set up the food station</li>
    <li>Open the drinks cooler</li>
</ol>
```

Output:
1. Arrive early and claim a spot
2. Unpack tables and chairs
3. Set up the food station
4. Open the drinks cooler

## 2. Unordered list (`<ul>`)

An unordered list uses bullets or other markers. Use one when **order does not matter**:

```html
<ul>
    <li>Plates and cups</li>
    <li>Utensils and napkins</li>
    <li>Trash bags</li>
</ul>
```

Output:
- Plates and cups
- Utensils and napkins
- Trash bags

## 3. Description list (`<dl>`)

A description list pairs terms with definitions. It works well for glossaries, FAQs, and metadata:

```html
<dl>
    <dt>Potluck</dt>
    <dd>Each guest brings a dish to share.</dd>
    <dt>BYOB</dt>
    <dd>Bring your own beverage.</dd>
</dl>
```

| Tag | Role |
|-----|------|
| `<dl>` | Description List wrapper |
| `<dt>` | Description Term |
| `<dd>` | Description Details (indented by default) |

## Nested lists

Place a list inside an `<li>` to create sub-items:

```html
<ul>
    <li>Food
        <ul>
            <li>Main dishes</li>
            <li>Desserts</li>
        </ul>
    </li>
    <li>Drinks
        <ul>
            <li>Water</li>
            <li>Juice</li>
        </ul>
    </li>
</ul>
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
6. Inside your `<dl>`, add at least **2 `<dt>`** terms (with matching `<dd>` definitions).

## Payoff

Your picnic guide now uses the right list shape for steps, supplies, and short explanations.