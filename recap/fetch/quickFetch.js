const https = require("https");
const url = "https://coderbyte.com/api/challenges/json/json-cleaning";
https
  .get(url, (res) => {
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      data = JSON.parse(data);
      console.log(removeInvalidChar(data));
    });
  })
  .on("error", (err) => {
    console.log(err.message);
  });

function removeInvalidChar(data) {
  for (const prop in data) {
    if (!data[prop] || data[prop] === "-" || data[prop] === "N/A") {
      delete data[prop];
    }
    if (Array.isArray(data[prop])) {
      data[prop].forEach((element, index, obj) => {
        if (!element || element === "-" || element === "N/A") {
          obj.splice(index, 1);
        }
      });

      //  checking arr in nested obj -> console.log(data[prop]);
    }

    if (typeof data[prop] === "object") {
      removeInvalidChar(data[prop]);
    }
  }
  return data;
}
