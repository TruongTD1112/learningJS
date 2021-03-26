const prompt = require('prompt-sync');
const fs = require('fs');
const path = require('path');
var fileName = path.join(__dirname, "data.txt");
// doc tu file
// const input = fs.readFileSync(fileName, 'utf-8').split('\n').map(x => parseInt(x));
// console.log(input[0]);
// process.stdin.once('data', data => {
    
// })

const {createInterface} = require('readline');
const { RSA_X931_PADDING } = require('constants');

const rl = createInterface ({
  input: process.stdin,
  output: process.stdout
})

// rl.question('Input an integer: ', response => {
//   let n = parseInt (response)
//   // stuff to be done with n goes here

//   rl.close()
// })
var n;
rl.on("line", response => {
    n = parseInt(response);
    rl.close();
})
var a = [];
for(let i= 0; i<n; i++){
    rl.on("line", response => {
        console.log((response));
        rl.close();
    })
}
