const fs = require('fs');
const { Axios, default: axios } = require('axios');

var allNames = [];

var femaleNames = fs.readFileSync('users/firstNames/female/female.txt', {encoding: 'utf8'}).split("\n").map(femaleName => femaleName.split('\t')).map(femaleName => femaleName[1]);
var maleNames = fs.readFileSync('users/firstNames/male/male.txt', {encoding: 'utf8'}).split("\n").map(maleName => maleName.split('\t')).map(maleName => maleName[1]);


femaleNames = femaleNames.map(function(femaleName){
    allNames.push({name:femaleName,gender:"female"});
})
maleNames = maleNames.map(function(maleName){
    allNames.push({name:maleName,gender:"male"})
})

//console.log(allNames[0]);
//console.log(allNames[1000]);

//console.log(femaleNames);

for (let thisFirstName of allNames) {
    //console.log(thisSurname)
    axios.post('https://serene-garden-99449.herokuapp.com/api/v1/users/createFirstName', 
        {
            firstName: thisFirstName.name,
            gender: thisFirstName.gender
        }
    ).then(function(response) {
        console.log(response.res.statusCode)
        //response.status(200)
    }).catch(function(error){
        console.log(error.res.statusCode)
        //response.status(400)
    })

}