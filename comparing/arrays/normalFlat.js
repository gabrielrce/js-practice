// //Easiest method
// const  = [1, 2, [3, 4]];

// const flattened = (arr) => [].concat(...arr);
// console.log(flattened(arr));
const arr = [1, 2, [3, 4]];

const flattened = arr.reduce((acc, val) => acc.concat(val), []);
console.log(flattened);
