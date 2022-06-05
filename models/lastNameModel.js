const mongoose = require('mongoose');

const lastName = new mongoose.Schema({
    "demographic": {
        required: false,
        type: Object
    }
})


module.exports = mongoose.model('lastName', lastName)