test("songDurations is a Map with both songs", () => {
  assert.match(OUTPUT, /^CHECK\ 1:\ 203\ \|\ 187$/m, "Log CHECK 1: 203 | 187 as a separate checkpoint line");
});

test("featuredArtists is a unique Set", () => {
  assert.match(OUTPUT, /^CHECK\ 2:\ 2\ \|\ true\ \|\ true$/m, "Log CHECK 2: 2 | true | true as a separate checkpoint line");
});

test("playlistSummary reads the Map and Set", () => {
  assert.match(OUTPUT, /^CHECK\ 3:\ 203\ \|\ 2$/m, "Log CHECK 3: 203 | 2 as a separate checkpoint line");
});

test("logs the playlist summary", () => {
  assert.match(OUTPUT, /^203 \| 2$/m, "Log the playlist summary on its own line");
});
