function repeatAction(callback) {
  callback();
  callback();
  callback();
}

const runs = [];
repeatAction(() => runs.push('run'));
document.getElementById("output").textContent = runs.join(',');
