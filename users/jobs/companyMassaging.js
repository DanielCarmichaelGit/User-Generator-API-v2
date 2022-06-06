const fs = require('fs');
const { Axios, default: axios } = require('axios');

var companies = fs.readFileSync('users/jobs/companies.txt', {encoding: 'utf8'}).split("\n");

for (let company of companies) {
    axios.post('https://serene-garden-99449.herokuapp.com/api/v1/users/createCompany', 
        {
            companyName: company
        }
    ).then(function(response) {
        console.log(response.res.statusCode)
        //response.status(200)
    }).catch(function(error){
        console.log(error.res.statusCode)
        //response.status(400)
    })
}