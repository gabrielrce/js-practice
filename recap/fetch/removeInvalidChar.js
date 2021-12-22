function removeInvalidChar(object) {
  for (const prop in object) {
    if (
      Object.keys(object[prop]).length === 0 &&
      typeof object[prop] != "number"
    ) {
      delete object[prop];
    }

    if (!object[prop] || object[prop] === "-" || object[prop] === "N/A") {
      delete object[prop];
    }
    if (Array.isArray(object[prop])) {
      object[prop].forEach((element, index, obj) => {
        if (!element || element === "-" || element === "N/A") {
          obj.splice(index, 1);
        }
      });
    }

    if (typeof object[prop] === "object") {
      removeInvalidChar(object[prop]);
    }
  }
  return object;
}

const obj = {
  name: { first: "Roberto", middle: "", last: "Smith" },
  age: 25,
  fu: {},
  DOB: "-",
  hobbies: ["running", "coding", "-"],
  education: {
    testing1: { tes4: ["eating", "N/A"] },
  },
};

console.log(removeInvalidChar(obj));
