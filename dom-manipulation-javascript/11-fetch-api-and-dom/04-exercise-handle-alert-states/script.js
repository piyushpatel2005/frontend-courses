// OFFLINE MOCK: deterministic alert scenarios, never live trail conditions.
window.mockFetch = async function mockFetch(url) {
  const mode = new URL(url, "https://preview.invalid").searchParams.get("mode");
  if (mode === "offline") throw new TypeError("Simulated network unavailable");
  if (mode === "http") return new Response("Unavailable", { status: 503 });
  if (mode === "empty") return new Response("[]", { status: 200 });
  if (mode === "alerts") return new Response(JSON.stringify([
    { title: "Boardwalk closed <until noon>" }
  ]), { status: 200 });
  throw new Error("Unknown mock scenario");
};

// TODO: On #check-alerts click, report loading, fetch the selected mode,
// distinguish response.ok failures from an empty array, and handle rejections.
