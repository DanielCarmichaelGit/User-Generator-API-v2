const mongoose = require('mongoose');

const lastName = new mongoose.Schema({
    "surname": {
        required: false,
        type: String
    },
    "demographic": {
        required: false,
        type: String
    }
})


module.exports = mongoose.model('lastName', lastName)