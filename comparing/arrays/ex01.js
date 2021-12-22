function addNumbers(arr) {
  let counter = 0;
  for (const element of arr) {
    if (typeof element === "number") counter = element + counter;
    if (typeof element === "string") {
      const regex = /^[0-9]*$/;
      const onlyNumbers = regex.test(element);
      if (onlyNumbers) counter = Number(element) + counter;
    }
    if (Array.isArray(element)) {
      const flatted = flatDeep(element, Infinity);
      const total = flatted.reduce((a, b) => a + b, 0);
      counter = total + counter;
    }
  }
  return counter;
}

function flatDeep(arr, d) {
  return d > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
        []
      )
    : arr.slice();
}

const arr = [
  "h",
  "",
  ,
  "6",
  null,
  undefined,
  true,
  false,
  5,
  [1, 2, [3, 4, "5"]],
];

console.log(addNumbers(arr));
