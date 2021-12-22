// // comparing arrays to check for equality - method 1
// const a = [1, 2, 3];
// const b = [4, 5, 6];
// const c = [1, 2, 3];

// function arrayEquals(a, b) {
//   return (
//     Array.isArray(a) &&
//     Array.isArray(b) &&
//     a.length === b.length &&
//     a.every((val, index) => val === b[index])
//   );
// }

// console.log(arrayEquals(a, b));
// console.log(arrayEquals(a, c));

// -------------------------------------------------------
//Deep equality with POJO

// method 2 to check if two arrays with objects are equal
const a = [
  {
    answer: 42,
  },
  {
    powerLevel: 9001,
  },
];
const b = [
  {
    answer: 42,
  },
  {
    powerLevel: 9001,
  },
];
const c = [
  {
    answer: 42,
  },
  {
    password: "taco",
  },
];

JSON.stringify(a) === JSON.stringify(b);
// true
JSON.stringify(a) === JSON.stringify(c);
// false
