const validator = require('validator');
const notes = require("./notes.js");

console.log(notes());

console.log(validator.isEmail('@xyz@email.com'));
console.log(validator.isURL('http/email.com'));