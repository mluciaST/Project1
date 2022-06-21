const Passenger = require('../models/Passenger.model');
const { addFlightToPassenger } = require('./flight.controller');

//creates a new passenger in the system
const createPassenger = async () => {
    const createPassenger = async ({firstName, lastName, flight}) => {
        try {
                const passenger = new Passenger({
                    firstName, 
                    lastName, 
                    flight
                }); 
                await passenger.save(); 

                for (let flight of passenger.flight) {
                    await addFlightToPassenger(flight.passengerId, flight);
                }
                return passenger._id; 
            }
        
        catch (err) {
            console.error(err);
            throw { status: 400, message: err};
        }
    }
   
}

module.exports = { createPassenger };