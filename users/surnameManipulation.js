const fs = require('fs');

const surnamesByRace = {black: [], white: [], hispanic: [], nativeAmerican: [], asian: []};
const races = ["black", "white", "hispanic", "nativeAmerican", "asian"]

try {
    const white = fs.readFileSync('users/white/white-surnames.txt', {encoding: 'utf8'}).split("\n");
    const hispanic = fs.readFileSync('users/hispanic/hispanic-surnames.txt', {encoding: 'utf8'}).split("\n");
    const black = fs.readFileSync('users/black/black-surnames.txt', {encoding: 'utf8'}).split("\n");
    const nativeAmerican = fs.readFileSync('users/native-american/native-american-surnames.txt', {encoding: 'utf8'}).split("\n");
    const asian = fs.readFileSync('users/asian/asian-pacific-surnames.txt', {encoding: 'utf8'}).split("\n");

    for (var line of black) {
        line = line.split("\t");
        surnamesByRace.black.push({name:line[0], demographic:"black"});
    }
    for (var line of white) {
        line = line.split("\t");
        surnamesByRace.white.push({name:line[0], demographic:"white"});
    }
    for (var line of hispanic) {
        line = line.split("\t");
        surnamesByRace.hispanic.push({name:line[0], demographic:"hispanic"});
    }
    for (var line of nativeAmerican) {
        line = line.split("\t");
        surnamesByRace.nativeAmerican.push({name:line[0], demographic:"nativeAmerican"});
    }
    for (var line of asian) {
        line = line.split("\t");
        surnamesByRace.asian.push({name:line[0], demographic:"asian"});
    }
    console.log(surnamesByRace);
}
catch(err) {
    console.log(err)
}