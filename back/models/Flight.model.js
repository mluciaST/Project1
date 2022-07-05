const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Flight schema
const flightSchema = new Schema({
    //Flight properties
    flightNumber: {
        type: Number,
        unique: true
    }, 
    departureDate: Date, 
    arrivalDate: Date,
    departureTime: String,
    arrivalTime: String,
    departureAirport: String,
    arrivalAirport: String,
    passengerNumber: Number,
    passengerLimit: {
            type: Number, 
            max: [30, 'Flight cannot have more than 30 passengers']
        }
            
});

const Flight = mongoose.model('Flight', flightSchema, 'Flights');
module.exports = Flight;