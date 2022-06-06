const mongoose = require('mongoose');

const firstName = new mongoose.Schema({
    "firstName": {
        required: true,
        type: String
    }
})

module.exports = mongoose.model("firstName", firstName);