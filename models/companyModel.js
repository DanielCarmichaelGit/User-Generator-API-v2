const mongoose = require('mongoose');

const company = new mongoose.Schema({
    "companyName": {
        required: true,
        type: String
    }
});


module.exports = mongoose.model("company", company);