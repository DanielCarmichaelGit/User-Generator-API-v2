const mongoose = require('mongoose');

const lastName = new mongoose.Schema({
    "demographic": {
        required: false,
        type: String
    },
    "surname": {
        required: false,
        type: String
    }
})


module.exports = mongoose.model('lastName', lastName)