const fs = require('fs');

var companies = fs.readFileSync('./fakeCompanies.txt', {encoding:'utf8', flag:'r'});

companies = companies.split('\n');

exports.companies = companies;