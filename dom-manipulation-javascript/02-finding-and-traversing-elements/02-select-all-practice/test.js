// Native focus/layout checks need a rendered document, not only parsed markup.
async function withPreviewLayout(check) {
  await new Promise(resolve => requestAnimationFrame(resolve));
  return await check();
}
test("Every trail stop gets its marked label", () => withPreviewLayout(() => {
  const stops = [...document.querySelectorAll(".stop")];
  assert.equal(stops.length, 3, "Keep all three trail stops");
  assert.equal(stops.map((stop) => stop.textContent.trim()).join("|"),
    "Old mill — marked|Stone crossing — marked|Lookout — marked",
    "Append — marked to every stop, not only the first");
}));
