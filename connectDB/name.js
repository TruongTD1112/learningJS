
const mongoose = require('mongoose');


const name = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('name', name, 'name');
