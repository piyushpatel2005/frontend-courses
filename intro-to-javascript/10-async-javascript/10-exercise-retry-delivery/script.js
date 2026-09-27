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
globalThis.createScoreApi = createScoreApi;
async function deliverScore(api, score, maxAttempts) {
  // Retry sequentially, returning the first successful result.
}
globalThis.deliverScore = deliverScore;
async function reportDelivery() {
  // Retry twice and log the successful score upload.
}
globalThis.reportDelivery = reportDelivery;
reportDelivery();
