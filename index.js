require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const routes = require('./routes/routes');


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

var port_number = server.listen(process.env.PORT || 3000);

app.use('/api', routes)

app.listen(port_number);