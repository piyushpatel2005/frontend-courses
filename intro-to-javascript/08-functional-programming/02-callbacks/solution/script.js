function repeatAction(callback) {
  callback();
  callback();
  callback();
}

const runs = [];
repeatAction(() => runs.push('run'));
console.log(`CHECK callbacks: ${runs.join(",")}`);
console.log(runs.join(","));
