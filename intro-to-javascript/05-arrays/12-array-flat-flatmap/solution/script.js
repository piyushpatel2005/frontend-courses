const nested = [[1, 2], [3, 4]];
const flatNumbers = nested.flat();
const splitWords = ['hello world', 'js'].flatMap((item) => item.split(' '));

console.log(`${JSON.stringify(flatNumbers)} | ${JSON.stringify(splitWords)}`);
