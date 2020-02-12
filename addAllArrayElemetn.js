const val = [1, 2, 3, 4];
const reducer = (a, b) => a + b;

// 1 + 2 + 3 + 4
console.log(val.reduce(reducer));
// expected output: 10
