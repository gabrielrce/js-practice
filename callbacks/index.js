const doAsyncFn = (number1, number2, callback) => {
  const result = number1 + number2;
  return setTimeout(() => {
    callback(result);
  }, 3000);
};

doAsyncFn(1, 3, (result) => {
  console.log(result);
});
