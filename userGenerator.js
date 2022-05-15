// import axios for api call
const { default: axios } = require("axios");
const fs = require('fs');
var nameArray = [];

/*
setTimeout(() => {
}, 5000)
*/

for (let i = 0; i < 10000; i++) {
    axios.get('https://randomuser.me/api/?inc=name,location,email,dob,phone,id,registered').then(response => {
        let thisUser = response.data
        fs.appendFileSync("./users.json", JSON.stringify(thisUser) + ',');
    }).catch(error => console.error(error))
}