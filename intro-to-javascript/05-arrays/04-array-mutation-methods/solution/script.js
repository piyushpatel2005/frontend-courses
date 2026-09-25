const queue = ['first', 'second'];
queue.push('third');
let removedItem = queue.pop();

console.log(`${queue.join(',')} | ${removedItem}`);
