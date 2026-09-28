function getFeed(name) {
  const feeds = { stage: "Stage ready", voting: "Votes counted", weather: "Clear skies" };
  return new Promise((resolve, reject) => setTimeout(() => {
    if (name === "press") reject(new Error("Press feed unavailable"));
    else if (Object.prototype.hasOwnProperty.call(feeds, name)) resolve(feeds[name]);
    else reject(new Error("Unknown feed"));
  }, 1));
}
globalThis.getFeed = getFeed;
async function compileFeeds(names) {
  // Start all requested feeds and keep both successes and failures.
}
globalThis.compileFeeds = compileFeeds;
async function reportFeeds() {
  // Await a report and log the headline and failed provider names.
}
globalThis.reportFeeds = reportFeeds;
reportFeeds();
