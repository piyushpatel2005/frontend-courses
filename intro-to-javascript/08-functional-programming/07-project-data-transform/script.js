const inventory = [
  { id: 1, name: "Laptop",     category: "Electronics", price: 999,  stock: 15 },
  { id: 2, name: "Desk Chair", category: "Furniture",   price: 299,  stock: 8  },
  { id: 3, name: "Headphones", category: "Electronics", price: 149,  stock: 0  },
  { id: 4, name: "Bookshelf",  category: "Furniture",   price: 189,  stock: 12 },
  { id: 5, name: "Webcam",     category: "Electronics", price: 79,   stock: 25 },
  { id: 6, name: "Monitor",    category: "Electronics", price: 549,  stock: 6  }
];

const inStockItems = [];
const expensiveItems = [];
function totalValue(items) {  }
function byCategory(items) {  }




// Supplied checkpoints. Do not replace them with fixed answers.
console.log(`CHECK stock: ${inStockItems.map(i => i.name).join(",")}`);
console.log(`CHECK expensive: ${expensiveItems.join(",")}`);
console.log(`CHECK value: ${totalValue(inventory)} | empty: ${totalValue([])}`);
console.log(`CHECK categories: ${byCategory(inventory)?.Electronics?.map(i => i.name).join(",")} | ${byCategory(inventory)?.Furniture?.map(i => i.name).join(",")}`);
