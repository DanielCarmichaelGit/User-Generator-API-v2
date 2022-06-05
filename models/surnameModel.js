const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    "demographicAndSurname": {
        required: true,
        type: Object
    }
})


module.exports = mongoose.model('surname', dataSchema)