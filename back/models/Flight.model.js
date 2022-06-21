const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Flight schema
const flightSchema = new Schema({
    
    flightNumber: Number, 
    departureDate: Date, 
    arrivalDate: Date,
    departureTime: String,
    arrivalTime: String,
    departureAirport: String,
    arrivalAirport: String,
    passengers: [{
        currentNumberOfPassengers: Number,
        passengerLimit: {
            type: Number, 
            max: [100, 'Flight cannot have more than 100 passengers']
        },
        passengerId: {
            type: Schema.Types.ObjectId,
            ref: 'Passenger'
        }
    }]
});

const Flight = mongoose.model('Flight', flightSchema, 'Flights');
module.exports = Flight;