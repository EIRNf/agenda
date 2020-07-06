var express = require('express');

const router = express.Router();

const appointmentController = require('../../controllers/appointments')

const slotController = require('../../controllers/slot')


//Router for appointment controller
router.get('/appointments', appointmentController.all);
router.post('/appointmentCreate', appointmentController.create);

//Router for slot controller
router.get('/retrieveSlots', slotController.all);

module.exports = router;