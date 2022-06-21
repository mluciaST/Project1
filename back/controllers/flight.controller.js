const Flight = require('../models/Flight.model');

const createFlight = async ({flightNumber, departureDate, arrivalDate, departureTime, 
                            arrivalTime, departureAirport, arrivalAirport, passengers}) => {
    try {
        const flight = new Flight({
            flightNumber, 
            departureDate, 
            arrivalDate,
            departureTime,
            arrivalTime,
            departureAirport,
            arrivalAirport,
            passengers
        })
        await flight.save();
        return flight._id;
    } catch (err) {
        console.error(err);
        throw { status: 400, message: err };
    }
}

const addFlightToPassenger = async (_id, { flightNumber, _id: flightId}) => {
    try {
        // Pushes onto the array for the field "movies", a new objext containign title, year, and movieId
        await Flight.findByIdAndUpdate(_id, { $push: { Passenger: { flightNumber, flightId } } });
    } catch (err) {
        console.error(err);
        throw { status: 400, message: err };
    }
}

module.exports = { createFlight, addFlightToPassenger };