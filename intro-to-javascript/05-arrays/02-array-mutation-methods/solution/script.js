const queue = ['first', 'second'];
queue.push('third');
let removedItem = queue.pop();

document.getElementById("output").textContent = `${queue.join(',')} | ${removedItem}`;
