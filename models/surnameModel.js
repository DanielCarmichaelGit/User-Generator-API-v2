const mongoose = require('mongoose');

const surnames = new mongoose.Schema({
    "surname": {
        required: true,
        type: String
    },
    "demographic": {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('surname', surnames);