const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//const logger = require('./middleware/logger');
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 8080; 
//app.use(logger);

app.use(express.json());
const flightRoute = require('./routes/flight.route.js');

app.use(cors());
app.use('/flights', flightRoute);

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