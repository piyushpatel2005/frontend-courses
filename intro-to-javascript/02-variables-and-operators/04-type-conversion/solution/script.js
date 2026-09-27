const priceStr = "29";
console.log(`priceStr: ${priceStr} (${typeof priceStr})`);
const price = Number(priceStr);
console.log(`price: ${price} (${typeof price})`);
const quantity = 3;
console.log(`quantity: ${quantity}`);
const total = price * quantity;
console.log(`total: ${total} (${typeof total})`);
console.log(`Total: $${total}`);
