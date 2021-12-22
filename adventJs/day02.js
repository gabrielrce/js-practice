function listGifts(letter) {
  let giftList = letter.split(" ");
  const resultObj = {};
  let currentElement = "";
  let counter = 0;

  giftList.map((gift) => {
    currentElement = gift;
    counter = 0;
    //!!currentElement returns true or false (false if its null or empty).
    if (!currentElement.includes("_") && !!currentElement) {
      giftList.map((giftIterator) => {
        if (currentElement === giftIterator) {
          counter += 1;
        }
        resultObj[`${currentElement}`] = counter;
      });
    }
  });
  return resultObj;
}

const carta = "bici  coche balón _playstation bici coche peluche";
const regalos = listOfGifts(carta);

console.log(regalos);

function listOfGifts(letter) {
  let list = letter.split(" ");
  const resultObj = {};
  let curr = "";
  let counter = 0;

  list.map((gift) => {
    curr = gift;
    counter = 0;
    if (!curr.includes("_") && !!curr) {
      list.map((el) => {
        if (el === curr) {
          counter += 1;
        }
        resultObj[`${curr}`] = counter;
      });
    }
  });
  return resultObj;
}
