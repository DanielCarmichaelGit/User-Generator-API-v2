const mongoose = require('mongoose');

const jobtitle = new mongoose.Schema({
    "jobtitle":{
        required: true,
        type: String
    },
    "estimatedSalary": {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model("jobtitle", jobtitle);