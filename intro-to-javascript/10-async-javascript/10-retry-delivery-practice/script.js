function createScoreApi(failures) {
  let calls = 0;
  const api = async score => {
    calls += 1;
    if (calls <= failures) throw new Error("Temporary score outage");
    return { score, attempts: calls };
  };
  api.calls = () => calls;
  return api;
}
async function deliverScore(api, score, maxAttempts) {
  // TODO: Step 1: Complete task 1 for the marked code.
  // TODO: Step 2: Complete task 2 for maxAttempts.
  // TODO: Step 3: If every allowed call fails, reject with the last original error object.
  // TODO: Step 4: Reject an invalid budget with Error("No attempts allowed") before calling the API.
  // Retry sequentially, returning the first successful result.
}
globalThis.deliverScore = deliverScore;
async function reportDelivery() {
  // TODO: Step 5: Implement reportDelivery() using createScoreApi(2), score 87, and three total attempts.
  // Retry twice and log the successful score upload.
}
globalThis.reportDelivery = reportDelivery;
globalThis.initialDelivery = reportDelivery().catch(error => console.log(`Work incomplete: ${error.message}`));
