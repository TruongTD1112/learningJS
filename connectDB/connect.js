
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const name = require('./name');
var port = 4000;
const router = express.Router();
mongoose.connect('mongodb://127.0.0.1:27017/exampleDB', { useNewUrlParser: true, useUnifiedTopology: true });


const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));



app.get("/fetch", async (req, res) => {
    name.find()
        .then(r => {
            res.send(r);
        })
        .catch(err => console.log(err))
});

app.get('/', (req, res) => {
    res.send("hello world!");
})
app.use("/", router);

app.listen(port, function () {
    console.log("Server is running on Port: " + port);
});






