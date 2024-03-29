const { Axios, default: axios } = require('axios');
const { response } = require('express');
const fs = require('fs');

var surnamesByRace = {black: [], white: [], hispanic: [], nativeAmerican: [], asian: []};
const races = ["black", "white", "hispanic", "nativeAmerican", "asian"]
var surnameArray = [];
var allSurnames = [];

try {
    const white = fs.readFileSync('users/white/white-surnames.txt', {encoding: 'utf8'}).split("\n");
    const hispanic = fs.readFileSync('users/hispanic/hispanic-surnames.txt', {encoding: 'utf8'}).split("\n");
    const black = fs.readFileSync('users/black/black-surnames.txt', {encoding: 'utf8'}).split("\n");
    const nativeAmerican = fs.readFileSync('users/native-american/native-american-surnames.txt', {encoding: 'utf8'}).split("\n");
    const asian = fs.readFileSync('users/asian/asian-pacific-surnames.txt', {encoding: 'utf8'}).split("\n");

    for (var line of black) {
        line = line.split("\t");
        surnamesByRace.black.push({lastName:line[0], demographic:"black"});
    }
    for (var line of white) {
        line = line.split("\t");
        surnamesByRace.white.push({lastName:line[0], demographic:"white"});
    }
    for (var line of hispanic) {
        line = line.split("\t");
        surnamesByRace.hispanic.push({lastName:line[0], demographic:"hispanic"});
    }
    for (var line of nativeAmerican) {
        line = line.split("\t");
        surnamesByRace.nativeAmerican.push({lastName:line[0], demographic:"nativeAmerican"});
    }
    for (var line of asian) {
        line = line.split("\t");
        surnamesByRace.asian.push({lastName:line[0], demographic:"asian"});
    }
    //console.log(surnamesByRace);
}
catch(err) {
    console.log(err)
}

Object.values(surnamesByRace).forEach(surname => surnameArray.push(surname))

for (var list of surnameArray) {
    list.map(surname => allSurnames.push(surname))
}

/*
for (let thisSurname of allSurnames) {
    //console.log(thisSurname)

    axios.post('https://serene-garden-99449.herokuapp.com/api/v1/users/createLastName', 
        {
            lastName: thisSurname.lastName,
            demographic: thisSurname.demographic
        }
    ).then(function(response) {
        console.log(response.res.statusCode)
        //response.status(200)
    }).catch(function(error){
        console.log(error.res.statusCode)
        //response.status(400)
    })

}
*/