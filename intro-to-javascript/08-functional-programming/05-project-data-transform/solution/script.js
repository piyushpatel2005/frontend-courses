const inventory = [
  { id: 1, name: "Laptop",     category: "Electronics", price: 999,  stock: 15 },
  { id: 2, name: "Desk Chair", category: "Furniture",   price: 299,  stock: 8  },
  { id: 3, name: "Headphones", category: "Electronics", price: 149,  stock: 0  },
  { id: 4, name: "Bookshelf",  category: "Furniture",   price: 189,  stock: 12 },
  { id: 5, name: "Webcam",     category: "Electronics", price: 79,   stock: 25 },
  { id: 6, name: "Monitor",    category: "Electronics", price: 549,  stock: 6  }
];

const inStockItems = inventory.filter(i => i.stock > 0);
const expensiveItems = inventory
  .filter(i => i.price >= 300)
  .sort((a, b) => b.price - a.price)
  .map(i => i.name);

function totalValue(items) {
  return items.reduce((sum, i) => sum + i.price * i.stock, 0);
}

function byCategory(items) {
  return items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});
}

document.getElementById("in-stock-count").textContent = `${inStockItems.length} items in stock`;
document.getElementById("top-products").textContent = `Top products: ${expensiveItems.join(", ")}`;
document.getElementById("total-value").textContent = `Total value: $${totalValue(inventory).toLocaleString()}`;
