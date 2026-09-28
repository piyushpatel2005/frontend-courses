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
  const results = await Promise.allSettled(names.map(name => globalThis.getFeed(name)));
  const headlines = [];
  const failed = [];
  results.forEach((item, index) => {
    if (item.status === "fulfilled") headlines.push(item.value);
    else failed.push(names[index]);
  });
  return { headlines, failed };
}
globalThis.compileFeeds = compileFeeds;
async function reportFeeds() {
  const report = await compileFeeds(["stage", "press", "voting"]);
  console.log(`Headlines: ${report.headlines.join(", ")} | failed: ${report.failed.join(", ")}`);
}
globalThis.reportFeeds = reportFeeds;
reportFeeds();
