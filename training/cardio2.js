// function longestWord(sen) {
//   const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
//   const sorted = wordArr.sort((a, b) => b.length - a.length);
//   const longestWordArr = sorted.filter(
//     (word) => word.length === sorted[0].length
//   );
//   return longestWordArr.length === 1 ? longestWordArr[0] : longestWordArr;
// }

// console.log(longestWord("Helloo there, my name is"));
//--------------------------------------------------------------------------------------------------

// function chunkArray(arr, len) {
//   const chunkedArr = [];
//   let i = 0;
//   while (i < arr.length) {
//     chunkedArr.push(arr.slice(i, i + len));
//     //Increment by chunk length
//     i += len;
//   }
//   return chunkedArr;
// }

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));
//--------------------------------------------------------------------------------------------------

// function flatenArray(arrays) {
//   // sol1:  return arrays.reduce(function (a, b) {
//   //     return a.concat(b);
//   //   });

//   return [].concat.apply([], arrays);
// }

// console.log(flatenArray([[1, 2, 3], [4, 5, 6], [7]]));

//----------------------------------------------------------------------------
// //Helper fn
// function formatStr(str) {
//   return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
// }
// function isAnagram(str1, str2) {
//   return formatStr(str1) === formatStr(str2);
// }

// console.log(isAnagram("Dormitory", "dirty room"));

//--------------------------------------------------------------------------

// function forwardLetter(str) {
//   let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
//     if (char === "z" || char === "Z") {
//       return "a";
//     } else {
//       return String.fromCharCode(char.charCodeAt() + 1);
//     }
//   });
//   //Capitalize str vowels
//   captStr = newStr.replace(/a|e|i|o|u/gi, (vowel) => {
//     return vowel.toUpperCase();
//   });
//   return captStr;
// }
// console.log(forwardLetter("Hello There"));
