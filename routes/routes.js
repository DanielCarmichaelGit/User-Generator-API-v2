const express = require('express');
const _ = require('lodash');
const userModel = require('../models/userModel');
const schemaModel = require('../models/schemaModel');
const transactionModel = require('../models/transactionModel');
const lastNameModel = require('../models/lastNameModel');
const firstNameModel = require('../models/firstNameModel');
const jobtitleModel = require('../models/jobtitleModel');
const companyModel = require('../models/companyModel');

const router = express.Router()


// all endpoints associated with schema creation and retrieval are below
router.post('/createSchema', async (req, res) => {
    const data = new schemaModel({
        schemaName: req.body.schemaName,
        schema: req.body.schema,
        forWebsite: req.body.forWebsite,
        id: (Math.random().toString(36).slice(2))
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.get('/getSchema/:id', async (req, res) => {
    try {
        const data = await schemaModel.find();
        const schema = data.find(record => record.id === req.params.id);
        res.json(schema);
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.get('/getAllSchemas', async (req, res) => {
    try{
        const data = await schemaModel.find();
        res.json(data)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

/* ###################################################################### */

// all endpoints associated with user creation and retrieval are below
router.post('/users/createLastName', async (req,res) => {
    const data = new lastNameModel({
        lastName: req.body.lastName,
        demographic: req.body.demographic
    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
})

// create a first name
router.post('/users/createFirstName', async (req,res) => {
    const data = new firstNameModel({
        firstName: req.body.firstName,
        gender: req.body.gender
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
})

// create a job title
router.post('/users/createJobtitle', async (req,res) => {
    const data = new jobtitleModel({
        jobtitle: req.body.jobtitle,
        estimatedSalary: req.body.estimatedSalary
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

// create a company
router.post('/users/createCompany', async (req,res) => {
    const data = new companyModel({
        companyName: req.body.companyName
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.post('/users/createUser', async (req, res) => {
    const data = new userModel({
        record: req.body.record,
        //firstName: req.body.firstName,
        //lastName: req.body.firstName,
        //age: req.body.age,
        //email: req.body.email,
        //dob: req.body.dob,
        id: req.body.id,
        company: req.body.company,
        jobTitle: req.body.jobTitle,
        registration: req.body.registration,
        location: req.body.location,
        phone: req.body.phone
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

// get one user
router.get('/users/getOneUser', async (req,res) => {
    try {
        const data = await userModel.find();
        res.json(_.sample(data))
    }
    catch(error) {
        res.status(400).json({message: error.message})
    }
})

// get one user
router.get('/users/getOneUserAlgo', async (req,res) => {
    try {
        const data = await userModel.find();
        res.json(_.sample(data))
    }
    catch(error) {
        res.status(400).json({message: error.message})
    }
})

// Get User by ANY Method
// Needs two parameters: key and value. Two additional query terms are also available: all and count
// Example Endpoint: http://localhost:3000/api/v1/users/getUser/age&75?all=true
//         (return all users with age 75)
// Example Endpoint: http://localhost:3000/api/v1/users/getUser/firstName&Elon?count=5  
//         (return the first 5 records with first name Elon)
// If no query terms are provided, the default is to return the first record
// If both query terms are provided, "all" will overide count
// If count is higher than the number of matching records, all records will be returned
router.get('/users/getUser/:key&:value', async (req, res) => {
    const all = req.query.all;
    const usersToReturn = Number.parseInt(req.query.count, 10) || 1;
    const searchType = (all === "true" || usersToReturn > 1) ? "filter" : "find";

    try {
        const data = await userModel.find();
        let user = data[searchType](record => record.record[req.params.key] == req.params.value);
        if (all !== "true" && user.length > usersToReturn) { user.length = usersToReturn; }
        res.json(user);
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})


// Batch Create Users
// Keep Batches to <= a length of 10 to prevent mongo timeouts
// The timeout limit should not be altered as heroku has its own timeout configs
router.post('/users/createUser/batch', async(req,res) => {
    userModel.insertMany(req.body).then(function(){
        res.status(200)  // Success
    }).catch(function(error){
        res.status(400).json({message: error.message})     // Failure
    });
})


//Get all Method
router.get('/users/getAll', async (req, res) => {
    try {
        const data = await userModel.find();
        res.json(data)
    }
    catch(error) {
        res.status(400).json({message: error.message})
    }
})

//Get 100 Random Users
router.get('/users/random', async (req, res) => {
    try {
        const data = await userModel.find();

        const users = _.sampleSize(data, 10);

        res.json({users});
    }
    catch(error) {
        res.status(400).json({message: error.message});
    }
})

//Get by ID Method
router.get('/users/getUserById/:id', async (req, res) => {
    try {
        const data = await userModel.find();
        const user = data.find(record => record.id === req.params.id);
        res.json(user);
        //res.send(req.params.id)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
    
})

// ####### GET - GENERATE RANDOM USERS ####### 
// count is optional and defaults to 1, max is 100, min is 1 
// Example Endpoints: /users/generate   or   /users/generate?count=5
router.get('/users/generate', async (req, res) => {    
    let count = Number.parseInt(req.query.count, 10) || 1;
    if (count > 100) { count = 100; }
    else if (count < 1) { count = 1; }

    async function userData() {
        // Get random sample from the database for the size of count, store in named array 
        const firstNameArr = await firstNameModel.aggregate([{$sample: {size: count}}]),
              lastNameArr = await lastNameModel.aggregate([{$sample: {size: count}}]),
              companyArr = await companyModel.aggregate([{$sample: {size: count}}]),
              jobTitleArr = await jobtitleModel.aggregate([{$sample: {size: count}}]);
              // return new array of arrays of collected objects
              return [firstNameArr, lastNameArr, companyArr, jobTitleArr];
            }        
    userData().then(data => {
        const [firstNameArr, lastNameArr, companyArr, jobTitleArr] = data;
        const users = [];
        // Format string into lowercase - capitalized first letter
        function capitalize(name) {
            return name[0].toUpperCase() + name.slice(1).toLowerCase();
        }

        // Calculate age base on dob
        function calculateAge(dob) { 
            const diff = Date.now() - dob.getTime();
            const monthDay = new Date(diff); 
            return Math.abs(monthDay.getFullYear() - 1970);
        }

        // Generate random phone number
        function randomPhoneNumber() {  
            const randomNum = (min, max) => {return Math.floor(Math.random() * (max - min) + min)}
            return `${randomNum(100, 1000)}-${randomNum(100, 1000)}-${randomNum(1000, 10000)}`;
        }
        // Build each user and push to users array
        for (let i = 0; i < count; i++) {
            const firstName = capitalize(firstNameArr[i].firstName);
            const lastName = capitalize(lastNameArr[i].lastName);
            
            // create random date of birth between 18 and 65 using date() and two random numbers
            // first random number generates milliseconds into the year, producing a random day and month
            // second random number generates a random year resulting in a current age between 18 and 65
            const dob = new Date(new Date(Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 365.25))
                .setFullYear(new Date()
                    .getFullYear() - (Math.floor(Math.random() * 65) + 18)
                )
            );
            const age = calculateAge(dob);
            users.push({
                firstName,
                lastName,
                age,
                dob: dob.toLocaleString().split(",")[0].split("/").join("-"), // formats dob to month-day-year (ex: 7-16-2002)
                gender: firstNameArr[i].gender,
                ethnicity: lastNameArr[i].demographic,
                company: companyArr[i].companyName,
                jobTitle: jobTitleArr[i].jobtitle,
                salary: jobTitleArr[i].estimatedSalary,
                email: firstName + lastName + `@email.com`,
                phone: randomPhoneNumber()
            })
        }
        return users;
    }).then(user => {
        res.json(user)
    }).catch(error => {
        res.status(400).json({message: error.message})
    });
})

//Update by ID Method
router.patch('/users/updateUserById/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await userModel.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/users/deleteUserById/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await userModel.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

/* ###################################################################### */

// all endpoints associated with transactions are below
// the transaction data should be  dynamically generated instead of stored
// this will provide the client with the highest level of control over the output

// get 1 transaction (base)
router.post('/transactions/getTransactions', async (req,res) => {

    const data = new transactionModel({
        transaction: {jewishHoliday: 1}
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})


module.exports = router;