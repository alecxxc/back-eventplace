const express = require('express');
const router = express.Router();

const checkToken = require('../../middlewares/auth.middleware');
const checkRol = require('../../middlewares/checkRol.middleware');

const directorController = require('../../controller/director/director.controller');
const PARAM = 'Director';

router.get('/profile', checkToken, checkRol(PARAM), directorController.getData);

router.post('/createevent', checkToken, checkRol(PARAM), directorController.createEvent);

router.get('/checkevents', checkToken, checkRol(PARAM), directorController.checkEvents);

router.put('/updateevent', checkToken, checkRol(PARAM), directorController.updateEvent);

router.delete('/deleteevent', checkToken, checkRol(PARAM), directorController.deleteEvent);


module.exports = router;