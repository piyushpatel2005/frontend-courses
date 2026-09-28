// OFFLINE MOCK: emulate HTTP responses and a network rejection.
window.mockFetch = async function mockFetch(url) {
  const mode = new URL(url, "https://preview.invalid").searchParams.get("mode");
  if (mode === "offline") throw new TypeError("Simulated network unavailable");
  if (mode === "http") return new Response("Unavailable", { status: 503 });
  if (mode === "empty") return new Response("[]", { status: 200 });
  if (mode === "records") return new Response(JSON.stringify(["Atlas of local birds"]), { status: 200 });
  throw new Error("Unknown mock scenario");
};

document.querySelector("#check-records").addEventListener("click", async () => {
  const status = document.querySelector("#record-status");
  const list = document.querySelector("#record-list");
  status.textContent = "Loading records…";
  list.replaceChildren();
  try {
    const mode = document.querySelector("#scenario").value;
    const response = await mockFetch(`/api/records?mode=${encodeURIComponent(mode)}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const records = await response.json();
    status.textContent = records.length ? "Records loaded." : "No records found.";
    for (const title of records) {
      const item = document.createElement("li");
      item.textContent = title;
      list.append(item);
    }
  } catch (error) {
    status.textContent = `Could not load records: ${error.message}`;
  }
});
