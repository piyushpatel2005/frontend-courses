test("heading has an inline color", () => {
  const h1 = document.querySelector("body h1");
  assert.exists(h1, "Use the supplied heading");
  assert.notEqual(h1.style.color, "", "Set a color using the heading's style attribute");
});

test("head has an internal paragraph font size", () => {
  const blocks = Array.from(document.querySelectorAll("head style:not([data-intercourses])"));
  const rule = blocks.flatMap(block => Array.from(block.sheet?.cssRules || [])).find(rule => rule.selectorText?.trim() === "p" && parseFloat(rule.style.getPropertyValue("font-size")) >= 16 && rule.style.getPropertyValue("font-size").endsWith("px"));
  assert.exists(rule, "Add a <style> block in <head> with p { font-size: 16px or more; }");
});

test("external stylesheet gives body a background", () => {
  const stylesheet = document.querySelector('style[data-intercourses="user-css"]');
  assert.exists(stylesheet, "The preview must load the linked style.css file");
  const rule = Array.from(stylesheet.sheet?.cssRules || []).find(rule => {
    if (!rule.selectorText?.split(",").some(selector => selector.trim() === "body")) return false;
    const probe = document.createElement("div");
    probe.style.backgroundColor = rule.style.getPropertyValue("background-color");
    const color = probe.style.backgroundColor;
    return color && !["transparent", "white", "rgb(255, 255, 255)", "rgba(255, 255, 255, 1)", "rgba(0, 0, 0, 0)", "inherit", "initial", "unset", "revert", "revert-layer", "currentcolor"].includes(color.toLowerCase()) && !/var\(|,\s*0\)$/.test(color);
  });
  assert.exists(rule, "In style.css set a visible body background-color");
});
