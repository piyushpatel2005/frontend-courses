---
title: "List Types: Steps, Items, and Terms"
slug: list-types-demo
order: 5
language: html
summary: See ordered, unordered, and description lists organize a rescue loadout before building your own.
seo_title: "List Types: Steps, Items, and Terms | Introduction to HTML"
seo_description: See ordered, unordered, and description lists organize a rescue loadout before building your own.
seo_keywords:
  - HTML demo
  - HTML preview
  - HTML list types
lesson_type: coding
---

# List Types: Steps, Items, and Terms

The Meridian crew is preparing for a night rescue. The completed `index.html` organizes launch steps, loose gear, and short definitions differently because they do different jobs. Run the page and find each list in the source.

## Read the code

```html
<ol><li>Check the beacon.</li><li>Charge the wrist light.</li></ol>
<ul><li>First-aid pouch</li><li>Signal flares</li></ul>
<dl><dt>Beacon sight</dt><dd>Locates a nearby distress signal.</dd></dl>
```

Use `<ol>` for a sequence and `<ul>` when order does not matter. Put each item inside an `<li>` within its list. A `<dl>` holds a description list: each `<dt>` names a term and the following `<dd>` explains it. Indent the inner elements to make those relationships easy to see.

For a sub-list, put the whole new list inside the parent item, before its closing `</li>`:

```html
<ul>
  <li>Recording kit
    <ul>
      <li>Notebook</li>
      <li>Pencil</li>
    </ul>
  </li>
</ul>
```

The inner list belongs to “Recording kit,” not beside that item. The next exercise needs only flat lists; this pattern is here for lists with genuine subgroups.

## Try the preview

Run the page. The launch sequence is numbered, the rescue kit is bulleted, and each mission system term stays paired with its explanation.

## Check your page

Use the preview to connect each visible result to the HTML that created it. For a safe experiment, change both the opening `<ol>` and closing `</ol>` to `<ul>` and `</ul>`, rerun to see the numbering turn into bullets, then restore it.

## Next

Continue to **Build a Crew Member Loadout**. You will recreate the same idea from a smaller starter file.
