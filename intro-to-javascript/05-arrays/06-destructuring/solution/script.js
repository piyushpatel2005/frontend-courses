const coords = [40.7128, -74.0060];
const [latitude, longitude] = coords;

const product = { name: "Laptop", price: 999, brand: "TechCo" };
const { name, price } = product;

function swapPair([a, b]) {
  return [b, a];
}

document.getElementById("output").textContent =
  `${name} costs $${price} | lat: ${latitude}`;
