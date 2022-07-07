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
    passengerNumber: {
            type: Number,
            min: [1, 'Passenger Number must be greater than 0'],
            //max: [passengerLimit, 'Passengers cannot be more than the Passenger Limit']
            // max: function() {
            //     return Number(this.passengerNumber) > Number(this.passengerLimit); 
            //     }
        },
    passengerLimit: {
            type: Number, 
            min: [1, 'Passenger Limit must be greater than 0'],
            max: [30, 'Flight cannot have more than 30 passengers']
        }
            
});

const Flight = mongoose.model('Flight', flightSchema, 'Flights');
module.exports = Flight;