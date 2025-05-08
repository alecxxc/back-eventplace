const express = require('express');
const router = express.Router();

const checkToken = require('../../middlewares/auth.middleware');
const checkRol = require('../../middlewares/checkRol.middleware');

const directorController = require('../../controller/director/director.controller');

router.get('/profile', checkToken, checkRol(process.env.PARAM2), directorController.getData);

router.post('/createevent', checkToken, checkRol(process.env.PARAM2), directorController.createEvent);

router.get('/checkevents', checkToken, checkRol(process.env.PARAM2), directorController.checkEvents);

router.put('/updateevent', checkToken, checkRol(process.env.PARAM2), directorController.updateEvent);

router.delete('/deleteevent', checkToken, checkRol(process.env.PARAM2), directorController.deleteEvent);


module.exports = router;