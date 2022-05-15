const { default: axios } = require("axios");

let formattedUsersModule = require('./userManipulation');
let formattedUsers = formattedUsersModule.formattedUsers;

//formattedUsers = formattedUsers.slice(1398);

/*
console.log(firstUser)

axios.post('http://localhost:3000/api/createUser', {
    "record":firstUser.record,
})
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
})
*/
var count = 1;
var page = 1;

for (const user of formattedUsers) {
    if (count % 10 === 0) {
        count = 1;
        page += 1;
    }
    else {
        count += 1;
    }

    axios.post('http://localhost:3000/api/createUser', {
        "record":user.record,
        "id":user.id,
        "company":user.company,
        "jobTitle":user.jobTitle,
        "registration":user.registration,
        "location":user.location,
        "phone":user.phone,
        "pagination":{"page":page}
    })
    .then(function (response) {
        console.log(response);  
    })
    .catch(function (error) {
        console.log(error);
        count -= 1;
    })
}
