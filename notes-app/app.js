const chalk = require("chalk");
const getNotes = require("./notes.js");

const msg = getNotes();
console.log(chalk.green.inverse.bold("Success!"));
