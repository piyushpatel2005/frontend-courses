function formatCurrency(amount, currency = "USD") {
  return amount.toLocaleString("en-US", { style: "currency", currency });
}

function truncate(text, max) {
  return text.length > max ? text.slice(0, max) + "..." : text;
}

function toSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

document.getElementById("output").textContent =
  `${formatCurrency(1234.5)} | ${truncate("Hello World", 5)} | ${toSlug("Hello World")}`;
