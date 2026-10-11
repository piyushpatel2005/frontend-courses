---
title: "CSS Rule Demo: Style an Exhibit Card"
slug: css-rule-demo
order: 1
language: html
summary: See a complete CSS rule change the background and heading color of a museum exhibit card.
seo_title: "CSS Rule Demo: Style an Exhibit Card | Introduction to CSS"
seo_description: See a complete CSS rule change the background and heading color of a museum exhibit card.
seo_keywords: [CSS demo, CSS preview, css-rule-demo]
lesson_type: coding
hints:
  - "This completed example is for reading and previewing before the exercise."
---

# Your first CSS rule

The Tideglass Museum's exhibit card already has a heading and paragraph. HTML gives the words their structure. CSS (Cascading Style Sheets) controls how they look. Open `style.css` beside `index.html` to see the two files working together.

## Read one rule

```css
h1 {
  color: #1b4d8c;
}
```

The **selector**, `h1`, chooses every level-one heading. Inside the braces, the **property**, `color`, names what changes: the text color. The **value**, `#1b4d8c`, chooses a particular blue. A property and value form a declaration. A colon separates them, a semicolon ends the declaration, and braces group declarations for one selector.

![A heading rule separated into selector, property, and value.](css-rule-anatomy.svg)

CSS ignores text between `/*` and `*/`; those comments leave notes for the person editing a stylesheet. They do not change the preview.

The `body` rule uses `background-color` to paint behind the page content. Its supplied `font-family: system-ui, sans-serif` chooses the device's interface font, with a generic fallback. Text inside the body can inherit this font without a separate rule for every element. You will practice fonts later.

## Change one thing

Press **Run**. You should see a blue heading on a pale page. Change only the heading's color value to `purple`, then Run again. The paragraph should keep its original color. Restore `#1b4d8c` afterward.

This demo has no tasks to submit. Next, write the background and heading rules yourself for another exhibit.
