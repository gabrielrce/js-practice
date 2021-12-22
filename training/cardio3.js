// function addAll(...numbers) {
//   return numbers.reduce((acc, curr) => acc + curr);
// }

// console.log(addAll(1, 2, 3, 4, 5));
// //-----------------------------------------------------------------------------

// function sumAllPrimes(num) {
//   let total = 0;

//   function checkPrimes(i) {
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         return false;
//       }
//     }
//     return true;
//   }

//   for (let i = 2; i <= num; i++) {
//     if (checkPrimes(i)) {
//       total += i;
//     }
//   }

//   return total;
// }
// console.log(sumAllPrimes(100));
// //-----------------------------------------------------------------------------

// function seekAndDestroy(arr, ...rest) {
//   return arr.filter((val) => !rest.includes(val));
// }

// console.log(seekAndDestroy([2, 3, 4, 5, 6, "hello"], 2, 6, "hello"));
