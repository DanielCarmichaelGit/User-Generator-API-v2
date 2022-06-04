const express = require('express');
const _ = require('lodash');
const userModel = require('../models/userModel');
const schemaModel = require('../models/schemaModel');
const lastNameModel = require('../models/lastNameModel')

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

// batch create last names
router.post('/users/createLastNames/batch', async (req,res) => {
    lastNameModel.insertMany(req.body.allSurnames).then(function(){
        res.status(200)  // Success
    }).catch(function(error){
        res.status(400).json({message: error.message})     // Failure
    });
})

// batch create firstNames
router.post('/users/createFirstNames/batch', async (req,res) => {
    firstNameModel.insertMany(req.body).then(function(){
        res.status(200)  // Success
    }).catch(function(error){
        res.status(400).json({message: error.message})     // Failure
    });
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

// Batch create lastNames by demographic
router.post('/users/createLastName/batch', async(req,res) => {
    lastNameModel.insertMany(req.body).then(function() {
        res.status(200) // success
    }).catch(function(error) {
        res.status(400).json({message: error.message}) // failure
    })
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

// get 100 transactions (base)
router.get('/transactions/getTransactions', (req,res) => {
    class product {
        constructor(code, sku, price, category) {

        }
    }

    var transactions = [];
    let price = (Math.random() * 100).toFixed(2);
    let transaction = {
        "price": price,
        "tax": (price * 0.06).toFixed(2),
        "productsPurchased": Math.floor(Math.random * 10),

    };
})


module.exports = router;