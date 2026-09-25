test("songDurations is a Map with both songs", () => {
  assert.equal(songDurations instanceof Map, true, "Create songDurations as a Map");
  assert.equal(songDurations.get("Orbit"), 203, "Store Orbit with duration 203");
  assert.equal(songDurations.get("Glow"), 187, "Store Glow with duration 187");
});

test("featuredArtists is a unique Set", () => {
  assert.equal(featuredArtists instanceof Set, true, "Create featuredArtists as a Set");
  assert.equal(featuredArtists.size, 2, "The repeated Nova entry should not add a second artist");
});

test("playlistSummary reads the Map and Set", () => {
  assert.equal(typeof playlistSummary, "function", "Define playlistSummary(durations, artists)");
  assert.equal(playlistSummary(songDurations, featuredArtists), "203 | 2");
});

test("logs the playlist summary", () => {
  assert.includes(OUTPUT, "203 | 2", "Log the exact playlist summary");
});
