const fs = require('fs');

var companies = fs.readFileSync('users/jobs/companies.txt', {encoding: 'utf8'}).split("\n");

console.log(companies);