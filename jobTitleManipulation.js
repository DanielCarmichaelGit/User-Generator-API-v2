const fs = require('fs');

var jobTitles = fs.readFileSync('./jobTitles.txt', {encoding:'utf8', flag:'r'});

jobTitles = jobTitles.split('\n');

exports.jobTitles = jobTitles;