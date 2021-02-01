const express = require('express');
const name = require('./name');
const app = express();
const router = express.Router();
var port = 4000;


router.route("/fetch").get(function (req, res) {
    name.find({}, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});
app.listen(port, function () {
    console.log("Server is running on Port: " + port);
});