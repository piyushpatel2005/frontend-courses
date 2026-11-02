const inventory = [
  { id: 1, name: "Laptop",     category: "Electronics", price: 999,  stock: 15 },
  { id: 2, name: "Desk Chair", category: "Furniture",   price: 299,  stock: 8  },
  { id: 3, name: "Headphones", category: "Electronics", price: 149,  stock: 0  },
  { id: 4, name: "Bookshelf",  category: "Furniture",   price: 189,  stock: 12 },
  { id: 5, name: "Webcam",     category: "Electronics", price: 79,   stock: 25 },
  { id: 6, name: "Monitor",    category: "Electronics", price: 549,  stock: 6  }
];

const inStockItems = inventory.filter(item => item.stock > 0);
const expensiveItems = inventory.filter(item => item.price >= 300).sort((a,b) => b.price-a.price).map(item => item.name);
function totalValue(items) { return items.reduce((sum,item) => sum + item.price * item.stock, 0); }
function byCategory(items) { return items.reduce((groups,item) => {
  if (!groups[item.category]) groups[item.category] = [];
  groups[item.category].push(item);
  return groups;
}, {}); }
console.log(`${inStockItems.length} items in stock`);
console.log(`Top products: ${expensiveItems.join(", ")}`);
console.log(`Total value: $${totalValue(inventory).toLocaleString("en-US")}`);

// Supplied checkpoints. Do not replace them with fixed answers.
console.log(`CHECK stock: ${inStockItems.map(i => i.name).join(",")}`);
console.log(`CHECK expensive: ${expensiveItems.join(",")}`);
console.log(`CHECK value: ${totalValue(inventory)} | empty: ${totalValue([])}`);
console.log(`CHECK categories: ${byCategory(inventory)?.Electronics?.map(i => i.name).join(",")} | ${byCategory(inventory)?.Furniture?.map(i => i.name).join(",")}`);

// TODO: Step 1: Complete task 1 for categoryLabels(items).
function categoryLabels(items) { return []; }
// TODO: Step 2: Complete task 2 for reportCategories(items).
function reportCategories(items) {}

// Supplied probes: separate from the learner definitions.
try {
  const sample = [{category:"Garden"}, {category:"Tools"}, {category:"Garden"}];
  const before = JSON.stringify(sample);
  console.log(`Category labels: ${categoryLabels(sample).join(" | ")} / empty:${categoryLabels([]).length} / unchanged:${before === JSON.stringify(sample)}`);
} catch { console.log("Category labels pending"); }
reportCategories(inventory);
reportCategories([{ category: "Lights" }, { category: "Sound" }, { category: "Lights" }]);
reportCategories([]);
