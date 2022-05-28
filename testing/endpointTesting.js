const { default: axios } = require("axios");

const url = `http://localhost:3000/api/v1/users/`;

// Endpoint for testing
let endpoint = `getUser/firstName&John?count=3`;


// API Call (change endpoint to test endpoint)
axios.get(url + endpoint)
     .then(response => console.log(response.data))
     .catch(error => console.log(error));
