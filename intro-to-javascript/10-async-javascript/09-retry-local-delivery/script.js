function makeCueCourier() {
  let attempts = 0;
  return async function sendCue() {
    attempts += 1;
    if (attempts === 1) throw new Error("Temporary courier outage");
    return { cue: "rehearsal cue", attempts };
  };
}
async function retryCue(sendCue, maxAttempts) {
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try { return await sendCue(); }
    catch (error) { if (attempt === maxAttempts) throw error; }
  }
}
retryCue(makeCueCourier(), 2)
  .then(result => console.log(`Delivered: ${result.cue} | attempts: ${result.attempts}`))
  .catch(error => console.log(`Delivery failed: ${error.message}`));
