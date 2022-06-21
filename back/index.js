const router = require('express').Router();
const express = require('express');
const mongoose = require('mongoose');
//const logger = require('./middleware/logger');
require('dotenv').config(); // One and done so I don't need the value from require

const app = express();
const PORT = process.env.PORT || 8080; 
//app.use(logger);

app.use(express.json());
const flightRoute = require('./routes/flight.route.js');
const passengerRoute = require('./routes/passenger.route');

router.use('/flights', flightRoute);
//router.use('/passenger', passengerRoute);

app.all('*', (req, res) => {
    res.status(404).send("We don't have the resource you're looking for.");
})

mongoose.connect(process.env.MONGO_URI)
        .then(() => {
        console.log('Successfully connected to MongoDB!');
    })    
    .catch(err => {
        console.log(err);
        process.exit(1);
    });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`)
});