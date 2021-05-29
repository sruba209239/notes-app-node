const chalk = require('chalk');
const notes = require("./notes.js");


console.log(notes());
console.log(chalk.green.bold.inverse("Success!"))