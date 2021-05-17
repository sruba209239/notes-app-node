const fs = require('fs');

fs.appendFileSync('notes.txt', '\nsample text 3 appended ');
console.log("appended a value");