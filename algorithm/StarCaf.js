const { S_IXGRP, SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');

const prompt = require('prompt-sync')();
var arr = [[]];
var num = [[]];
const V = prompt();
for(let i = 0; i< V; i++){
    prompt().split(" ").map(x=>parseInt(x)).forEach(element=>num[i].push(element));
    if(i<V-1) num.push([]);
}

var final = [V]
for(let i=0; i<V; i++){
    final[i] = new Array(V);
}
for(let i=0; i< V; i++){
    for(let j = 0; j< V; j++){
        final[i][j] = 0;
    }
}
for(let i= 0; i< V; i++){
    var value = prompt().split(" ");
    for(let k= 0; k<num[i].length; k++){
        if(num[i][k] === NaN) continue;
        final[i][num[i][k]] = value[k];
    }
}
for(let i= 0; i<V; i++){
    for(let j = 0; j<V;j++){
        final[i][j]  = parseInt(final[i][j]);
        if(final[i][j] != 0){
            final[j][i] = final[i][j];
        }
    }
}
function dfs(x){
    
}

