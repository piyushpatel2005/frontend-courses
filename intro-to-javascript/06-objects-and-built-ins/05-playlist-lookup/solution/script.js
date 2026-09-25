const songDurations = new Map([
  ["Orbit", 203],
  ["Glow", 187]
]);
const featuredArtists = new Set(["Nova", "Kai", "Nova"]);

function playlistSummary(durations, artists) {
  return `${durations.get("Orbit")} | ${artists.size}`;
}

console.log(playlistSummary(songDurations, featuredArtists));
