const express = require ('express');
const app = express();
const router = express.Router();
const post = require('./Post');
// router.get('/', (req,res) => {
//     res.send("we are on the post");
// });
app.get('/', (req,res) => {
    try{
        console.log("we are on the post");
    }
    catch(err) {
        console.log(err);
    }
});

// router.post('/', (req,res) =>{
//     console.log(req.body);

// })
module.exports = router;
app.listen(3000);
console.log("success to connect");