values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var topValues = [...values].sort((a, b) => b - a).slice(0, 2);
// first sort wholw array in to decending and the slice firt paramert (0) means skips zero element and
//show the first two element of array
// [...values] will create shallow copy
console.log(topValues);
