const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    "transaction": {
        required: true,
        type: Object
    },
    "id": {
        required: true,
        type: String
    },
    "shippingDetails": {
        required: false,
        type: Object
    }
})


module.exports = mongoose.model('transaction', dataSchema)