require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const routes = require('./routes/routes');

const production = "https://serene-garden-99449.herokuapp.com/";
const development = "http://localhost:3000";

const baseUrl = process.env.NODE_ENV ? production : development;

mongoose.connect(
    mongoString,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    },

    function(err) {
        if (err) {
            return console.log("Error", err);
        }
        console.log(
            "MongoDB Connection -- Ready state is:", mongoose.connection.readyState
        );
    }
);

const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());

app.use('/api', routes)

app.listen(production || development);