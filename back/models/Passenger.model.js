const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Pasenger schema
const passengerSchema = new Schema({
   
    firstName: String, 
    lastName: String, 
    flight: [{
        flightNumber: Number,  
        flightId: {
            type: Schema.Types.ObjectId,
            ref: 'Flight'
        }
    }]
});

const Passenger = mongoose.model('Passenger', passengerSchema, 'Passenger');
module.exports = Flight;