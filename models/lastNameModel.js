const mongoose = require('mongoose');

const lastName = new mongoose.Schema({
    "surname": {
        required: true,
        type: String
    },
    "demographic": {
        required: true,
        type: String
    }
})


module.exports = mongoose.model('lastName', lastName)