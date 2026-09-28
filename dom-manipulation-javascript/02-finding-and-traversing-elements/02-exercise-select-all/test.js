test("Every trail stop gets its marked label", () => {
  const stops = [...document.querySelectorAll(".stop")];
  assert.equal(stops.length, 3, "Keep all three trail stops");
  assert.equal(stops.map((stop) => stop.textContent.trim()).join("|"),
    "Old mill — marked|Stone crossing — marked|Lookout — marked",
    "Append — marked to every stop, not only the first");
});
