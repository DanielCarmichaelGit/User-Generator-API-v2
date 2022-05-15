const mongoose = require('mongoose');

// the createSchema schema is used by developers to create schemas for websites they are sending their data to.
// instead of reinventing the wheel when reusing this API to send data to a website that has previously had data sent to it
// developers should use this schema's associated endpoints out of the kindness of their hearts <3 and for ease of use in the future
const schemasSchema = new mongoose.Schema({
    // the schema name is used as a search param when the UI for this API is developed and is not used
    // as a query param for the /api/availableSchemas endpoint
    "schemaName": {
        required: true,
        type: String
    },
    // schema inputs should be marked with <{key}> as the key and <{val}> as the val for each object pair
    // each key val pair should be split by a double dash within the input string (--)
    // each value should be an object following this format => {required: bool, type: String/Number/Object/Array}
    // example { {"user"}{required:true,type:Object}--{"info"}{required:true, type:Object} }
    "schema": {
        required: true,
        type: String
    },
    // the forWebsite key should be the base URL of the website that the schema is being developed for
    "forWebsite": {
        required: false,
        type: String
    },
    "id": {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('schema', schemasSchema)