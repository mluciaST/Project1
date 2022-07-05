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
    //upon any failure, display error message
    } catch (err) {
        console.error(err);
        throw { status: 400, message: err };
    }
}

//finds the flights
const findFlight = async () => {
    try {
        const flight = await Flight.find();
        return flight;
        //upon any failure, display error message
    } catch (err) {
        console.error(err);
        throw {status: 400, message: err}
    }
}


//update flight
const updateFlight = async (_id, updatedFlight) => {
    try {
        const flights = await Flight.findOneAndUpdate({ _id: _id }, updatedFlight, { new: true });
        return flights;
    } catch (err) {
        console.error(err);
        throw { status: 400, message: err };
    }
}


//delete flight
const deleteFlight = async (_id) => {
    try {
        const flights = await Flight.deleteOne({ _id: _id });
        return flights;
    } catch (err) {
        console.error(err);
        throw { status: 400, message: err };
    }
}
 

module.exports = { createFlight, findFlight, updateFlight, deleteFlight };