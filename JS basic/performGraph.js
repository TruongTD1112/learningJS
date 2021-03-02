const prompt = require('prompt-sync')();
const fs = require('fs');
const readline = require('readline');
// const V = prompt();
// var fs = require('fs');
// var a = new Array(V);
// for(let i=0; i< V; i++){
//     a[i] = new Array(V);
// }
// a[0][0] = 1;
const file = readline.createInterface({
    input: fs.createReadStream('data.txt'),
    output: process.stdout,
    terminal: false
});
// try{
//     var data = fs.readFileSync('./data.txt');
//     console.log(data);
// }
// catch(e){
//     console.log(e);
// }
file.on('line',(line) => {
    console.log(line);
});

