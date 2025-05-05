const express = require('express');
const router = express.Router();

const checkToken = require('../../middlewares/auth.middleware');
/* const checkRol = require('../../middlewares/checkRol.middleware'); */

const directorController = require('../../controller/director/director.controller');
const param = 'Director';

router.get('/profile', checkToken, directorController.getData);

router.post('/createevent', checkToken, directorController.createEvent);

router.get('/checkevents', checkToken, directorController.checkEvents);

router.put('/updateevent', checkToken, directorController.updateEvent);

router.delete('/deleteevent', checkToken, directorController.deleteEvent);


module.exports = router;