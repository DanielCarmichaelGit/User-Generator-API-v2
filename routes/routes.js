const express = require('express');
const _ = require('lodash');
const userModel = require('../models/userModel');
const schemaModel = require('../models/schemaModel');
const { application } = require('express');
const db = require('mongoose');

const router = express.Router()

router.get('/', (req,res) => {
    res.send(process.cwd() + '/index.html')
})

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


// Batch Create Users
// not sure how to do this yet but i will figure it out soon lol
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

module.exports = router;