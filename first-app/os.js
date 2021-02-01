const os = require('os');
// import os from node js
var totalMemory = os.totalmem()/1024/1024/1024;
var freeMemory = os.freemem()/1024/1024/1024;

console.log('total memory :' + totalMemory );

console.log('free memory ' + freeMemory);