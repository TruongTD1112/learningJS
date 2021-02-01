const express = require('express');
const { baseModelName } = require('./Posts');
const app = express();
const router = express.Router();
const Post = require ('/Posts');
app.get('/', (req,res) => {
//     try{
//         const posts = await Posts.find().limit();
//     }catch (err){
//         res.json({message : err});
//     }
// });

// app.router.post('/', async(req,res) => {
//     const post = new Post ({
//         title : req.body.title,
//         description : req.body.description
//     });
//     try{
//         const savedPost = await post.save();
//         res.json(savedPost);
//     }
//     catch(err){
//         res.json ({ message : err});
//     }
// })

router.get('/', (req, res) => {
    res.send("we are on posts");
});

router.post('/', (req,res) => {
    console.log(req.body);
});
module.exports = router;


const express = require('express');
const app = express();

const router = express.Router();

app.get('/', (req,res) => {
    res.send("we are on the local");
});

app.get('/post', (req,res) => {
    res.send("we are on the post");
});
router.get('/post/specific', (req,res) => {
    res.send("yes, we are on the specific page");
});

app.get('/getdata', (req, res) => {
    res.send("yes, you can get data here");
});
app.get('/postNew', (req, res) => {
    console.log("postNew here to show data");
});
app.get('/post/sepcific', (req, res) => {
    console.log("welcome");
});
router.get('/', (req,res) => {
    console.log("welcome to home page");
});
app.get('/', (req, res) => {
    console.log("home page");
});


app.listen(3000);
console.log("success to connect");

