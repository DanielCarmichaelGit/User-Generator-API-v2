const _ = require('lodash');

let formattedUsersModule = require('../userManipulation');
let data = formattedUsersModule.formattedUsers;

const randomData = _.sampleSize(data, 100);

console.log(randomData);