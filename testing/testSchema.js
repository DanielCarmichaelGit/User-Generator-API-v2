const { default: axios } = require("axios");

var schema = "";
var user = null;

function generateOutput(s, u) {
    let outputFormat = {};

    s = s.replace(/{(.*)}/,' $1').split(" ").join("")
    let schemaFields = s.split("--");
    console.log(schemaFields);
    for (let pairs of schemaFields) {
        pairs = pairs.match(/{(.*?)}/);
        //console.log(pairs);

        let objectKey = pairs[0].match(/{(.*?)}/);

        console.log(objectKey);
    }
    console.log(u.id);
}

axios.get('http://localhost:3000/api/getSchema/qp69m056i1i').then(response => {
    schema = response.data.schema;
    console.log(schema);

    axios.get('http://localhost:3000/api/getUserById/4488843T').then(result => {
        user = result.data;
        //console.log(user)

        generateOutput(schema, user);
    }).catch(error => console.log(error));

}).catch(error => console.error(error));
