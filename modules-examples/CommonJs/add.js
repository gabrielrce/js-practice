function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

////export 1
// exports.add = add;

// export 2
module.exports = { add, substract };
