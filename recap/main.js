const fs = require("fs");
const utility = require("utility");

fs.appendFile("log.txt", utility.toCelcius(process.argv[2]) + "\n", (err) => {
  if (err) throw err;
});
