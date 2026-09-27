const queue = ['first', 'second'];
queue.push('third');
console.log(`CHECK 1: ${queue.join(",")}`);
let removedItem = queue.pop();

console.log(`CHECK 2: ${queue.join(",")} | ${removedItem}`);

console.log(`${queue.join(',')} | ${removedItem}`);
