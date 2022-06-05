const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    "transaction": {
        required: true,
        type: Object
    }
})


module.exports = mongoose.model('transaction', dataSchema)