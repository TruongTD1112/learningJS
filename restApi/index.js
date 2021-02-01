const express = require('express');
const morgan = require('morgan')
const app = express();
app.use(morgan('combined'))
app.get('/description', (req, res) => {
    console.log("tran dinh truong");
    res.send('tran dinh truong');
});

app.get('/', (req,res) => {
    try{
        console.log("welcome to the main");
    }
    catch(err){
        console.log(err);
    }
    return res.status(200).send({x:"truong idol"});
    return res.status(200).send({x :"kien ngao da"});
    
});
app.listen(3000);
console.log("success to connect");