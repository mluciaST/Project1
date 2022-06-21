const express = require('express');
const mongoose = require('mongoose');
//const logger = require('./middleware/logger');
require('dotenv').config(); // One and done so I don't need the value from require

const app = express();
const PORT = process.env.PORT || 8080; // Default to 8080 if not in .env
//app.use(express.json()); // This is middleware that auto parses JSON into JS objects between each HTTP request and the endpoint
//app.use(logger);


const flightRoute = require('./routes/flight.route.js');
const passengerRoute = require('./routes/passenger.route');

app.use('/flights', flightRoute);
app.use('/passenger', passengerRoute);

app.all('*', (req, res) => {
    res.status(404).send("We don't have the resource you're looking for.");
})

mongoose.connect(process.env.MONGO_URI)
    //Attempts to connect to MongoDB
    .then(() => {
        console.log('Successfully connected to MongoDB!');
    })
    //Terminates process if rejected
    .catch(err => {
        console.log(err);
        process.exit(1);
    });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`)
});