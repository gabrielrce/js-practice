function isArrayEmpty(arr) {
  return Array.isArray(arr) && !arr.length;
}

console.log(isArrayEmpty([]));
