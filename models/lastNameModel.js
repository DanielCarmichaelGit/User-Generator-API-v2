const mongoose = require('mongoose');

const lastName = new mongoose.Schema({
    "lastName": {
        required: false,
        type: Object
    }
})


module.exports = mongoose.model('lastName', lastName)