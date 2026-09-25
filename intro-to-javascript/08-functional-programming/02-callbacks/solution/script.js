function repeatAction(callback) {
  callback();
  callback();
  callback();
}

const runs = [];
repeatAction(() => runs.push('run'));
console.log(runs.join(','));
