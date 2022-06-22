const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Flight schema
const flightSchema = new Schema({
    //Flight properties
    flightNumber: Number, 
    departureDate: Date, 
    arrivalDate: Date,
    departureTime: String,
    arrivalTime: String,
    departureAirport: String,
    arrivalAirport: String,
    passengerNumber: Number,
    passengerLimit: {
            type: Number, 
            max: [10, 'Flight cannot have more than 10 passengers']
        },
        //passengerId: {
        //    type: Schema.Types.ObjectId,
        //    ref: 'Passenger'
        //}
    
});

const Flight = mongoose.model('Flight', flightSchema, 'Flights');
module.exports = Flight;