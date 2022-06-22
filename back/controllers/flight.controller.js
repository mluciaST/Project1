const Flight = require('../models/Flight.model');

//creates a flight
const createFlight = async ({flightNumber, departureDate, arrivalDate, departureTime, arrivalTime,
                            departureAirport, arrivalAirport, passengerNumber, passengerLimit}) => {
    try {
        const flight = new Flight({
            flightNumber, 
            departureDate, 
            arrivalDate,
            departureTime,
            arrivalTime,
            departureAirport,
            arrivalAirport,
            passengerNumber,
            passengerLimit
        })
        await flight.save();
        return flight._id;
    } catch (err) {
        console.error(err);
        throw { status: 400, message: err };
    }
}

//finds the flights
const findFlights = async () => {
    try {
        const flights = await Flight.find();
        return flights;
    } catch (err) {
        console.error(err);
        throw {status:400, message: err}
    }
}

//adds a flight to a passenger
const addFlightToPassenger = async (_id, { flightNumber, _id: flightId}) => {
    try {
        // Pushes onto the array for "passenger", a new object containign flightNumber and flightId
        await Flight.findByIdAndUpdate(_id, { $push: { Passenger: { flightNumber, flightId } } });
    } catch (err) {
        console.error(err);
        throw { status: 400, message: err };
    }
}

//update flight
//delete flight


module.exports = { createFlight, findFlights, addFlightToPassenger };