function choosePower(item) {
  switch (item) {
    // Add sword here.
    // Add gun here.
    // Add shield here.
    default: return undefined;
  }
}

console.log(`Sword: ${choosePower("sword")}`);
console.log(`Gun: ${choosePower("gun")}`);
console.log(`Shield: ${choosePower("shield")}`);
console.log(`Other props: ${choosePower("pencil")},${choosePower("Sword")}`);
