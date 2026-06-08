const nested = [[1, 2], [3, 4]];
const flatNumbers = nested.flat();
const splitWords = ['hello world', 'js'].flatMap((item) => item.split(' '));

document.getElementById("output").textContent = `${JSON.stringify(flatNumbers)} | ${JSON.stringify(splitWords)}`;
