// // 1
// const namesList = [
//   "ana",
//   "braulio",
//   "carlos",
//   "darwin",
//   "darwin",
//   "enrique",
//   "ana",
//   "ana",
//   "braulio",
//   "braulio",
// ];

// function logMostRepeatedNames(numNames) {
//   const names = {};
//   namesList.forEach((name) => {
//     names[name] = !names[name] ? 1 : (names[name] += 1);
//   });

//   return Object.keys(names)
//     .map((name) => ({ name: name, times: names[name] }))
//     .sort((a, b) => b.times - a.times)
//     .slice(0, numNames);
//   // .map((name) => name.name);
// }

// // console.log(logMostRepeatedNames(3));

// //2
// // const valores = [true, 5, false, "hola", "adios", 2];

// // function selectedOperation() {
// //   valores.forEach((valor) => {
// //     if (typeof valor === "string") {
// //     }
// //   });
// //   return "a";
// // }

// // console.log(selectedOperation());

// // //3
// // var num1 = 5;
// // var num2 = 8;

// // if (num1 < num2) {
// //   console.log("numero1 no es mayor que numero2");
// // }
// // if (num2 > 0) {
// //   console.log("numero2 es positivo");
// // }
// // if (num2 < 0 || num2 !== 0) {
// //   console.log("numero1 es negativo o distinto de cero");
// // }
// // if (num1 + 1 !== num2) {
// //   console.log(
// //     "Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2"
// //   );
// // }

// //4

// function ex4(num) {
//   return num % 2 === 0 ? "par" : "impar";
// }
// console.log(ex4(5));

//5: Invertir contenido array

// function invertArray(elem) {
//   if (elem instanceof Array) {
//     const newElem = elem.map(
//       (_, index, array) => array[array.length - 1 - index]
//     );
//     return newElem;
//   } else {
//     throw new TypeError("Function expects an array.");
//   }
// }

// try {
//   console.log(invertArray(["a", "b", "c"]));
// } catch (e) {
//   console.error(e.message);
// }

//6: orderStringByLastChar

// function orderStringByLastChar(elem) {
//   if (!Array.isArray(elem)) {
//     throw TypeError("Element passed should be an array");
//   }
//   if (!elem.every((e) => typeof e === "string")) {
//     throw TypeError("Every element of the array should be a string");
//   }

//   return elem.sort(
//     (x, y) => x.charCodeAt(x.length - 1) - y.charCodeAt(y.length - 1)
//   );
// }

// let languages = ["Python", "JavaScript", "C#", "Java"];

// try {
//   console.log(orderStringByLastChar(languages));
// } catch (e) {
//   console.log(`Error: ${e.message}`);
// }

// 7: every number of array divided by 2

// function dividedByTwo(elem) {
//   if (!Array.isArray(elem)) {
//     throw TypeError("Element passed should be an array");
//   }
//   if (!elem.every((e) => typeof e === "number")) {
//     throw TypeError("Every element of the array should be a number");
//   }

//   return elem.every((e) => e % 2 === 0);
// }

// let languages = [0, 4, 4];

// try {
//   console.log(dividedByTwo(languages));
// } catch (e) {
//   console.log(`Error: ${e.message}`);
// }
