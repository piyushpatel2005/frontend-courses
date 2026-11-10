---
title: "Reset the reading-room preference"
slug: reset-the-reading-room-preference
order: 6
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Update a preference summary on change and restore it correctly after form reset.
seo_title: "Reset the reading-room preference | JavaScript DOM"
seo_description: "Update a preference summary on change and restore it correctly after form reset."
seo_keywords:
- JavaScript form reset patterns
- change event patterns
- sync form UI
---

The reading room starts with Warm lighting. The supplied `renderLights()` copies the select's current value to its summary, but neither change nor reset calls it yet.

Edit `script.js` to connect those two event paths. `change` can call the function directly because the chosen value is already updated. A reset listener needs to schedule a later call with `setTimeout(renderLights, 0)` so it reads the restored value, not the old choice.

## Your Tasks

1. Register `renderLights` for `change` on `#lights`.
2. When `#lights-form` resets, schedule `renderLights` to run after the browser restores the select's default.

After step 1, Run and choose Cool, then Bright. After step 2, activate Restore default: both select and summary should say Warm. Test the reset button with the mouse and with Enter while focused. Submit checks both routes from their own starting state.

The `selected` option is supplied in the HTML. A select does not have an input-style `defaultValue` property; do not use one to guess its reset value.
