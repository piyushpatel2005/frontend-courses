// Task 1: Song duration Map

const songDurations = new Map([["Orbit", 203], ["Glow", 187]]);

// Supplied check 1: leave this code in place.

try {
  console.log("CHECK 1: " + (`${songDurations instanceof Map} | ${songDurations.size} | ${songDurations.get("Orbit")} | ${songDurations.get("Glow")}`));
} catch (error) {
  console.log("CHECK 1: pending");
}

// Task 2: Unique artist Set

const featuredArtists = new Set(["Nova", "Kai", "Nova"]);

// Supplied check 2: leave this code in place.

try {
  console.log("CHECK 2: " + (`${featuredArtists instanceof Set} | ${featuredArtists.size} | ${featuredArtists.has("Nova")} | ${featuredArtists.has("Kai")}`));
} catch (error) {
  console.log("CHECK 2: pending");
}

// Task 3: Summary uses its arguments

function playlistSummary(durations, artists) {
  return `${durations.get("Orbit")} | ${artists.size}`;
}

// Supplied check 3: leave this code in place.

try {
  console.log("CHECK 3: " + (`${playlistSummary(new Map([["Orbit",203]]),new Set(["Nova","Kai"]))} / ${playlistSummary(new Map([["Orbit",99]]),new Set(["A"]))}`));
} catch (error) {
  console.log("CHECK 3: pending");
}

// Task 4: Separate playlist summary

console.log(playlistSummary(songDurations, featuredArtists));
