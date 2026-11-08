---
title: "Inheritance And Cascade"
slug: inheritance-and-cascade
order: 9
language: css
runtime: srcdoc
lesson_type: coding
summary: Trace inherited text styles and deliberately restore a shared color and font.
seo_title: Inheritance and the cascade | Introduction to CSS
seo_description: Trace inherited text styles and deliberately restore a shared color and font.
seo_keywords: [CSS, inheritance and the cascade]
---

# Let a notice share its text styles

Specificity compares rules that target the same element. Inheritance answers a different question: if an element has no winning declaration for an inherited property, which value reaches it from its parent?

The supplied notice has a heading, paragraph, emphasized phrase, and button. Color and font properties normally inherit. Padding, margin, and borders do not. A child without its own color uses its parent’s computed color; it does not compete with the parent’s selector specificity. Even a simple color rule directly on the child takes precedence over an inherited color.

```css
.panel { color: navy; }
.panel em { color: inherit; }
```

Here `inherit` explicitly asks the emphasized text to use its parent’s color. `initial` instead asks for the property’s initial value; `unset` inherits for an inherited property and otherwise uses its initial value. They are not interchangeable reset words. The notice’s button has a supplied font of its own. `font: inherit` resets its font shorthand to the parent’s font settings, without removing native button semantics or its default focus indication. It is a visual placeholder, not a working visit-times service.

## Before specificity

The browser has built-in **user-agent** styles, visitors can supply **user** styles, and page CSS is **author** styling. Inline, internal, and external CSS are all author sources, not three different origins. For ordinary declarations, author styles outrank normal user and browser styles. A normal inline declaration outranks normal author stylesheet declarations on that element.

`!important` comes after a value, before the semicolon: `color: navy !important`. It changes cascade priority, not selector specificity. Important author declarations beat normal author declarations, but important user and browser declarations have higher priority still. Do not reach for it whenever a rule loses: inspect which declaration wins first. Layers, animations, and transitions add further cascade rules; the simple specificity comparisons in this module deliberately exclude them.

For selectors in the same ordinary priority, compare ID count first, then classes/attributes/pseudo-classes, then elements/pseudo-elements. A selector with one ID beats many classes; this is a comparison of columns, not a base-ten score. Combinators and `*` add no weight. If those comparisons tie, source order decides in our unlayered examples.

## Your Tasks

1. Set `.notice` to `color: #174a3a` so its heading and ordinary paragraph inherit the shared green.
2. Set `.notice strong` to `color: inherit` so the emphasized phrase stops overriding that shared color.
3. Set `.notice button` to `font: inherit` so the native button uses the notice’s family and size.

Edit the marked rules in `style.css`. Run after each change, then Submit. Inspect a child paragraph in your browser’s Elements panel: Styles shows matched declarations; Computed shows the resulting value. A crossed-out declaration lost a conflict. A missing declaration may mean the selector did not match, the property/value was invalid, or a condition did not apply. Check those possibilities before making a selector more specific.

The next module uses these shared text styles to build a readable color palette.
