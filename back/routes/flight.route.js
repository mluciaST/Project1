const router = require('express').Router();
const { findFlights, addFlightToPassenger, createFlight } = require('../controllers/flight.controller');



//creates new flight
router.post('/', async (req, res) => {
    try {
        const flightID = await createFlight(req.body);
        res.json({_id: flightID});
    } catch (err) {
        res.status(err?.status || 400).json(err);
    }
});

//finds flights
router.get('/', async (req, res) => {
    const allFlights = await findFlights();
        res.json(allFlights);
});

//updates a flight (by ID?)
//delete a flight


module.exports = router;