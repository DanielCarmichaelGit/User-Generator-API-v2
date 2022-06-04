const mongoose = require('mongoose');

const firstName = new mongoose.Schema({
    "name": {
        required: true,
        type: String
    },
    "gender": {
        required: true,
        type: String
    }
})


module.exports = mongoose.model('firstName', firstName)