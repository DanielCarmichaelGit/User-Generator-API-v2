const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    "record": {
        required: true,
        type: Object
    },
    "id": {
        required: false,
        type: String
    },
    "company": {
        required: false,
        type: String
    },
    "jobTitle": {
        required: false,
        type: String
    },
    'registration': {
        required: false,
        type: Object
    },
    "location": {
        required: false,
        type: Object
    },
    "phone": {
        required: false,
        type: String
    },
    "info": {
        required: false,
        type: Object
    },
    "pagination": {
        required: false,
        type: Object
    }
})


module.exports = mongoose.model('user', dataSchema)