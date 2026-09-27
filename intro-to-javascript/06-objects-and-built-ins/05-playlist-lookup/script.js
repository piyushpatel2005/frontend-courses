const songDurations = new Map();
const featuredArtists = new Set();

// Define playlistSummary and log the required summary.

// Supplied Console probes; implement the tasks above to make each checkpoint pass.
try { console.log(`CHECK 1: ${songDurations.get("Orbit")} | ${songDurations.get("Glow")}`); } catch (error) { console.log("CHECK pending"); }
try { console.log(`CHECK 2: ${featuredArtists.size} | ${featuredArtists.has("Nova")} | ${featuredArtists.has("Kai")}`); } catch (error) { console.log("CHECK pending"); }
try { console.log(`CHECK 3: ${playlistSummary(songDurations,featuredArtists)}`); } catch (error) { console.log("CHECK pending"); }
