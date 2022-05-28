const { default: axios } = require("axios");

const url = `http://localhost:3000/api/v1/users/`;

// Endpoints for testing
let endpoint = `getUserByAny/age/75/false`;


// API Call (change endpoint to test endpoint)
axios.get(url + endpoint)
     .then(response => console.log(response.data))
     .catch(error => console.log(error));
