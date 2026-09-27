const songDurations = new Map([
  ["Orbit", 203],
  ["Glow", 187]
]);
const featuredArtists = new Set(["Nova", "Kai", "Nova"]);

function playlistSummary(durations, artists) {
  return `${durations.get("Orbit")} | ${artists.size}`;
}

console.log(`CHECK 1: ${songDurations.get("Orbit")} | ${songDurations.get("Glow")}`);
console.log(`CHECK 2: ${featuredArtists.size} | ${featuredArtists.has("Nova")} | ${featuredArtists.has("Kai")}`);
console.log(`CHECK 3: ${playlistSummary(songDurations, featuredArtists)}`);

console.log(playlistSummary(songDurations, featuredArtists));
