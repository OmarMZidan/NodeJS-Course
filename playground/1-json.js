const fs = require("fs");

const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataBuffer);
data.name = "Omar";
data.age = "36";
const dataString = JSON.stringify(data);
console.log(dataString);
fs.writeFileSync("1-json.json", dataString);
