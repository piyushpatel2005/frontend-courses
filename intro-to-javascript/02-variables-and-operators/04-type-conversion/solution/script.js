const priceStr = "29";
const price = Number(priceStr);
const quantity = 3;
const total = price * quantity;
document.getElementById("output").textContent = `Total: $${total}`;
