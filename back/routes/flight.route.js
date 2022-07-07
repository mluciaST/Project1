const router = require('express').Router();
const { createFlight, findFlight, updateFlight, deleteFlight } = require('../controllers/flight.controller');


//POST - creates new flight
router.post('/', async (req, res) => {
    try {
        const flightID = await createFlight(req.body);
        res.json({_id: flightID});
    } catch (err) {
        res.status(err?.status || 400).json(err);
    }
});

//GET - view all flights
router.get('/', async (req, res) => {
    try {
        const allFlights = await findFlight();
        res.json(allFlights);
    } catch (err) {
        res.status(err?.status || 400).json(err);
    }
    
});

//PUT - updates a flight 
router.put('/:id', async (req, res) => {
    try {
        const flight = await updateFlight(req.body);
        res.json({flight});
    } catch (err) {
        res.status(err?.status || 400).json(err);
    }
})

//DEL - delete a flight
router.delete('/:id', async (req, res) => {
    try {
        const flight = await deleteFlight(req.params.id);
        res.json({flight});
    } catch (err) {
        res.status(err?.status || 400).json(err);
    }
})

module.exports = router;