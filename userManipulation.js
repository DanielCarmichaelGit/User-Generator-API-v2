let usersModule = require('./users');
let companiesModule = require('./companyManipulation');
let jobTitlesModule = require('./jobTitleManipulation');

let users = usersModule.users;
let companies = companiesModule.companies;
let jobTitles = jobTitlesModule.jobTitles;

const _ = require('lodash');

var formattedUsers = [];

// define user class to reconstruct users into api accessable objects
class User {
    constructor(record, id, company, jobTitle, registration, location, phone) {
        this.record = record;
        this.id = id;
        this.company = company;
        this.jobTitle = jobTitle;
        this.registration = registration;
        this.location = location;
        this.phone = phone;
    }
}

// create new array of formatted users
for (let user of users) {
    let formattedUser = new User (
        {
            "firstName": user.results[0].name.first,
            "lastName": user.results[0].name.last,
            "age": user.results[0].dob.age,
            "email": user.results[0].email,
            "dob": user.results[0].dob.date
        },
        user.results[0].id.value,
        _.sample(companies),
        _.sample(jobTitles),
        {
            "registrationDate": user.results[0].registered.date
        },
        {
            "country": user.results[0].location.country,
            "state": user.results[0].location.state,
            "city": user.results[0].location.city,
            "zip": user.results[0].postcode,
            "address": user.results[0].location.street.number + ' ' + user.results[0].location.street.name
        },
        user.results[0].phone
    );
    delete user.info;

    formattedUsers.push(formattedUser);
}

console.log(JSON.stringify(formattedUsers[1500]));

// export formatted users array
exports.formattedUsers = formattedUsers;