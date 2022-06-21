const router = require('express').Router();
const { findFlights, addFlightToPassenger, createFlight } = require('../controllers/flight.controller');

//finds flights
router.get('/', async (req, res) => {
    const allFlights = await findFlights();
        res.json(allFlights);
});

//creates new flight
router.post('/', async (req, res) => {
    try {
        const flightID = await createFlight(req.body);
        res.json({_id: flightID});
    } catch (err) {
        res.status(err?.status || 400).json(err);
    }
});


module.exports = router;