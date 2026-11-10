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
  // TODO: Step 1: Complete task 1 for compileFeeds(names).
  // TODO: Step 2: Return a report with a headlines array containing every fulfilled headline in input order.
  // TODO: Step 3: Add a failed array to that report containing every rejected provider name in input order.
  // Start all requested feeds and keep both successes and failures.
}
globalThis.compileFeeds = compileFeeds;
async function reportFeeds() {
  // TODO: Step 4: Complete task 4 for reportFeeds().
  // Await a report and log the headline and failed provider names.
}
globalThis.reportFeeds = reportFeeds;
globalThis.initialFeeds = reportFeeds().catch(error => console.log(`Work incomplete: ${error.message}`));
