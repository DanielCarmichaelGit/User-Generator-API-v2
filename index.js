require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const routes = require('./routes/routes');

mongoose.connect(
    mongoString,
    {
        useFindAndModify: false,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        server:{socketOptions:{keepAlive: 300000,connectTimeoutMS:30000}},
        replset:{socketOptions:{keepAlive: 300000,connectTimeoutMS:30000}}
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

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})