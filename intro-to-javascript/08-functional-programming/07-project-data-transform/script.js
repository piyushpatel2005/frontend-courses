const inventory = [
  { id: 1, name: "Laptop",     category: "Electronics", price: 999,  stock: 15 },
  { id: 2, name: "Desk Chair", category: "Furniture",   price: 299,  stock: 8  },
  { id: 3, name: "Headphones", category: "Electronics", price: 149,  stock: 0  },
  { id: 4, name: "Bookshelf",  category: "Furniture",   price: 189,  stock: 12 },
  { id: 5, name: "Webcam",     category: "Electronics", price: 79,   stock: 25 },
  { id: 6, name: "Monitor",    category: "Electronics", price: 549,  stock: 6  }
];

// TODO: Step 1: Filter inventory into inStockItems, keeping positive stock.
const inStockItems = [];
// TODO: Step 2: Build expensiveItems as names priced at least $300, sorted by descending price.
const expensiveItems = [];
// TODO: Step 3: Use reduce in totalValue(items) to sum price times stock, starting from 0.
function totalValue(items) {  }
// TODO: Step 4: Group every record in byCategory(items) into arrays keyed by category, using an object accumulator.
function byCategory(items) {  }




// Supplied checkpoints. Do not replace them with fixed answers.
// TODO: Step 5: Log the in-stock count as 5 items in stock, using inStockItems.length.
// TODO: Step 6: Log Top products: Laptop, Monitor from expensiveItems.
// TODO: Step 7: Log Total value: $24,914 from totalValue(inventory), using toLocaleString("en-US").
console.log(`CHECK stock: ${inStockItems.map(i => i.name).join(",")}`);
console.log(`CHECK expensive: ${expensiveItems.join(",")}`);
console.log(`CHECK value: ${totalValue(inventory)} | empty: ${totalValue([])}`);
console.log(`CHECK categories: ${byCategory(inventory)?.Electronics?.map(i => i.name).join(",")} | ${byCategory(inventory)?.Furniture?.map(i => i.name).join(",")}`);
