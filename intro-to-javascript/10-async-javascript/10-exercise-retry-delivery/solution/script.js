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
  if (!Number.isInteger(maxAttempts) || maxAttempts <= 0) throw new Error("No attempts allowed");
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try { return await api(score); }
    catch (error) { if (attempt === maxAttempts) throw error; }
  }
}
globalThis.deliverScore = deliverScore;
async function reportDelivery() {
  const result = await globalThis.deliverScore(createScoreApi(2), 87, 3);
  console.log(`Score ${result.score} saved after ${result.attempts} attempts`);
}
globalThis.reportDelivery = reportDelivery;
globalThis.initialDelivery = reportDelivery().catch(error => console.log(`Work incomplete: ${error.message}`));
