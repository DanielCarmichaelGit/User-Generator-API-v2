const mongoose = require('mongoose');

const lastName = new mongoose.Schema({
    "info": {
        required: false,
        type: Object
    }
})


module.exports = mongoose.model('lastName', lastName)