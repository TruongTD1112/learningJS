
const fs = require('fs');
const path = require('path');
var fileName = path.join(__dirname, "data.txt");
const input = fs.readFileSync(fileName, 'utf-8').split('\n').map(x => parseInt(x));
console.log(input[0]);