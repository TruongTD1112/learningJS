const fs = require('fs');
const prompt = require('prompt-sync');
const readline = require('readline');
var path = require('path');
const { fileURLToPath } = require('url');
var fileName = path.join(__dirname, 'data.txt');

const file = readline.createInterface({
    input: fs.createReadStream(fileName)
});
var n = readline();
console.log(n);
var a = new Array(3);
for(let i= 0; i<3; i++){
    a[i] = [];
}
var index = 0;
file.on('line', (line) => {
    a[index++] = line.split(' ').map(x => parseInt(x));
})
setTimeout(()=> console.log(a), 1000);

