const fs = require('fs');

var allNames = [];

var femaleNames = fs.readFileSync('users/firstNames/female/female.txt', {encoding: 'utf8'}).split("\n").map(femaleName => femaleName.split('\t')).map(femaleName => femaleName[1]);
var maleNames = fs.readFileSync('users/firstNames/male/male.txt', {encoding: 'utf8'}).split("\n").map(maleName => maleName.split('\t')).map(maleName => maleName[1]);


femaleNames = femaleNames.map(function(femaleName){
    return {name:femaleName,gender:"female"}
})
maleNames = maleNames.map(function(maleName){
    return {name:maleName,gender:"male"}
})



console.log(femaleNames);