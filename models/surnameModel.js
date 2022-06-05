const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    "surname": {
        required: true,
        type: String
    }
})


module.exports = mongoose.model('surname', dataSchema)